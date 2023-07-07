<template>
    <div class="container ">
        <div class="row my-3">
            <div class="col-12 ">
                <h1 class="display-1"><span>{{oH1}}</span> Projects <span>{{oH2}}</span></h1>
            </div>
        </div>

        <div class="row ">
            <div class=" card animate__animated animate__flipInY m-2 text-center p-0" v-for="proj in projects" :key="proj.title" >
                <div class="row g-0">
                  <div class="col ">
                    <img :src="proj.image" class="img-fluid rounded-start" :alt="proj.title" loading="lazy">
                  </div>
                </div>
                <div class="row body ">
                    <div class="col ">
                        <div class="card-body pt-2">
                          <h5 class="card-title fw-bold fs-large ">{{proj.title}}</h5>
                          <br>
                          <p class="card-text">{{proj.description}}</p>
                          <button class="card-text m-2 p-1"><a target="_blank" :href="proj.website">Go To Site</a></button>
                          <button class="card-text p-1"><a target="_blank" :href="proj.repoLink">Go To Repository</a></button>
                        </div>
                      </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                oH1:'<h1>',
                oH2:'</h1>'
            }
        },
        computed:{
            projects(){
                return  this.$store.state.projects
            }
        },
        mounted(){
            this.$store.dispatch('getProjects')
        }
    }
</script>

<style scoped>
.card{
    background-color: #f3f2e9;
    max-width: 400px;
}
.card-body button{
    border-radius: .5rem;
    background-color: #06283d; 
   
}
.card-body button a{
    text-decoration: none;
    color: #f3f2e9;
}
h1{
    color: #f3f2e9; 
}
.card img{
  height: 223px;
  max-width: 395px;
  min-width: 120px;
}
span{
    color: #06283d;
}
.projects{
    border-radius: 1.5rem;
}
@media screen and (width <400px){
  .card img{
  height: 223px;
  max-width: 50px;
    }  

</style>
