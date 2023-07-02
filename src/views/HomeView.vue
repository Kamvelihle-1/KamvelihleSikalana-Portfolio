<template>
  <div class="home " >
    <div class="container mt-5 pt-5">
      <h1 class="display-1">Welcome to my portfolio</h1>
      <br>
      <p class="display-6"><super>Hi</super>, I am Kamvelihle Sikalana an aspiring <span >{{item}}</span>, so what are we building? </p>
    </div>
  </div>
</template>

<script >

export default {
  name: 'HomeView',
 
  data() {
    return{
      item:'', 
      tEffect : ["Software Engineer","Penetration Tester","IT Security Officer"],
      typingSpeed: 100, // Adjust the typing speed (in milliseconds)
      repeatDelay: 1000, // Adjust the delay between repeats (in milliseconds)
      repeatCount: 3, // Adjust the number of times to repeat the animation
      repeatIndex: 0, // Counter for tracking the current repeat index
    };
  },
  mounted() {
    this.startTyping();
  },
  methods: {
    startTyping() {
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < this.fullText.length) {
          this.text += this.fullText.charAt(i);
          i++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            this.text = ''; // Reset text
            this.repeatIndex++; // Increment repeat index

            if (this.repeatIndex < this.repeatCount) {
              this.startTyping(); // Start a new animation repeat
            }
          }, this.repeatDelay);
        }
      }, this.typingSpeed);
    },
   }, 
};
</script>


<style scoped>
h1{
  color: white;
}

</style>


