<template>
  <div class="home " >
    <div class="container mt-5 pt-5 ">
        <h1 class="display-1">Welcome to my portfolio</h1>
        <br>
        <p class="display-6">Hi, I am Kamvelihle Sikalana an aspiring <span >{{item}}</span>, so what are we building? </p>
    </div>
  </div>
</template>

<script >

export default {
  name: 'HomeView',
 
  data() {
    return{
      item:'', 
      tEffect : ["Software Engineer "," Penetration Tester "],
      cIndex: 0,
      typingSpeed: 200, 
      rDelay: 1000, 
      rCount: 10,
      rIndex: 0, 
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
h1{
  color: white;
}
span{
  font-size: 3rem;
  
}


</style>


