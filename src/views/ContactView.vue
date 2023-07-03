<template>
    <div class="container ">
        <h1 class="display-1"><span>{{oH1}}</span>  Contact <span>{{oH2}}</span></h1>
        <br>
        <form class="contact my-2 p-2" action="https://formspree.io/f/xleyrkaj" @submit.prevent="formValidator" method="post">
            <div class="row text-start">
                <div class="col ">
                    <label for="name">Enter Name/s</label>
                    <div class="row">
                        <div class="col ">
                            <input type="text" v-model="name" name="name" id="name">
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="row text-start">
                <div class="col">
                    <label for="surname">Enter surname/s </label>
                    <div class="row">
                        <div class="col">
                            <input type="text" v-model="surname" name="surname" id="surname">
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="row text-start">
                <div class="col">
                    <label for="email">Enter email  </label>
                    <div class="row">
                        <div class="col">
                            <input type="text" v-model="email" name="email" id="email">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row text-start">
                <div class="col">
                    <label for="msg">Enter massage </label>
                    <textarea v-model="msg" name="msg" id="msg" ></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <button class="py-2 px-3 fs-3" type="submit" id="send">Send</button>
                </div>
            </div>
        </form>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                name:'',
                surname:'',
                email:'',
                msg:'',
                oH1:'<h1>',
                oH2:'</h1>',
                form:document.querySelector('.contact')
                 
            }
        },
        methods:{
            formValidator(event){
               switch (true) {
                case !isNaN(this.name) || this.name:
                    alert('Please enter your name')
                    this.name=''
                    break;
                case !isNaN(this.surname) || this.surname:
                    alert('Please enter your surname')
                    this.surname=''
                    break;
                case !isNaN(this.email) || this.email:
                    alert('Please enter your email')
                    this.email=''
                    break;
                case !isNaN(this.msg) || this.msg:
                    alert('Please enter a message')
                    this.msg=''
                    break;
                default:
                    var data = new FormData(event.target);
                    fetch(event.target.action, {
                      method: 'POST',
                      body: data,
                      headers: {
                          'Accept': 'application/json'
                      }
                    }).then(response => {
                      if (response.ok) {
                        alert ("Thanks for your submission!");
                        this.form.reset()
                      } else {
                        response.json().then(data => {
                          if (Object.hasOwn(data, 'errors')) {
                           alert( data["errors"].map(error => error["message"]).join(", "))
                          } else {
                            alert("Oops! There was a problem submitting your form")
                          }
                        })
                      }
                    }).catch(() => {
                     alert("Oops! There was a problem submitting your form")
                    });
                    break;
               }
            }
        }
        
    }
</script>

<style scoped>
form input, form textarea{
    width: 90%;
    border: 0;
    outline: none;
    background:#f3f2e9;
    padding: 15px;
    margin: 15px 0;
    color: #1f1e1e;
    font-size: 18px;
    border-radius: 6px;

}

form button{
    margin-top: 20px;
    cursor: pointer;
    background-image:linear-gradient(45deg, #f3f2e9,#06283d) ;
    border-radius: .5rem;
}
.contact{
    background-color: #06283d;
    border-radius: 1.5rem;
    color: #f3f2e9;
   
}
.container{
    margin-bottom: 5rem;
}
label{
    font-size: larger;   
}
#name,#surname,#email{
    width: 50%;
}
h1{
    color: #f3f2e9;
}
span{
    color: #06283d;
}
@media screen and (width<605px) {
    #name,#surname,#email{
        width: 90%;
    } 
}

</style>