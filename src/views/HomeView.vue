<template>

      <div class="row">
        <div class="col">
          <h1 class="display-1"><span class="h">{{oH1}}</span> Welcome to my portfolio <span class="h">{{oH2}}</span></h1>
        <br>
        <p class="display-6">Hi, I am Kamvelihle Sikalana an aspiring <span >{{item}}</span>, so what are we building or securing? </p>
        </div>
        <div class="col">
          <img src="https://i.postimg.cc/zBv3R5bK/C12-C2-Kamvelihle-Sikalana-1.jpg" alt="my image" loading="lazy">
        </div>
        
      </div>
      <div class="row mt-3" >
        <div class="col" >
          <a id="cv" class="btn p-1 m-2" href="https://drive.google.com/file/d/1j-koUzB4avNUXO6JqOYxowMx_XwpPbK_/view?usp=share_link" target="_blank"> Download CV</a>
        </div>
      </div>
        
 
</template>

<script >

export default {
  name: 'HomeView',
 
  data() {
    return{
      item:'', 
      tEffect : ["Software Engineer "," Penetration Tester ","Cloud Security Engineer"],
      cIndex: 0,
      typingSpeed: 200, 
      rDelay: 1000, 
      rCount: 10,
      rIndex: 0, 
      oH1:'<h1>',
      oH2:'</h1>'
    };
  },
  mounted() {
    this.startTyping();
  },
  methods: {
    startTyping() {
      const currentValue = this.tEffect[this.cIndex];
      let i = 0;
      const typeInterval = setInterval(() => {
      
          if (i < currentValue.length) {
            this.item += currentValue.charAt(i);
            i++;
          } else {
            clearInterval(typeInterval);
            setTimeout(() => {
              this.item = ''; 
              this.cIndex++;
              this.rIndex++; 

              if (this.cIndex === this.tEffect.length) {
              this.cIndex = 0; 
              this.rIndex++; 
            }

            if (this.rIndex < this.rCount) {
              this.startTyping(); 
            }
            }, this.rDelay);
          }
        
         
      }, this.typingSpeed);
    }
   } 
};
</script>


<style scoped>

span{
  font-size: 3rem;
}
.h{
  color:#06283d;
}
h1{
  color: #f3f2e9;
}
img{
  border-radius: 5rem;
  max-height: 30rem;
}
/* #cv a{
  text-decoration:none;
  color:#f3f2e9;
}  */
#cv{
  text-decoration:none;
  color:#f3f2e9;
  background-color:#06283d;
  border-radius:1.5rem;

} 

</style>


