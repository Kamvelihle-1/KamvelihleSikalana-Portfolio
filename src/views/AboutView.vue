<template>
  <div class="container about px-5  ">
    <h1 class="display-1 animate__animated animate__fadeInLeft"><span>{{oH2}}</span> About me <span>{{oH3}}</span></h1>
    <br>
  
    <p class="animate__animated animate__fadeInRight"> <span>{{ p1}} </span>I am a 20 years old young man from Cape Town, South Africa, with a great passion for anything tech but more specifically programming. I have a vested interest in security and software engineering fields within tech, of which I am currently perusing. 
      I have had exposure, as little as it may be, to different technologies including and not limited to Java, Python, Html, CSS, JavaScript, Vue.js and Bootstrap5 framework. 
      I am a programmer by heart, I like programming and working in a team although I would prefer to work alone often.
      I am not only about tech, I have other none tech interest which include (but not limited to) tennis and rugby although I'm not the best at them, anime and manhwa, property development and real-estate.  <span>{{ p2}}</span>
    </p>
  
  </div>
</template>
<script>
  export default {
    data(){
      return{
        p1:"<p>",
        p2:"</p>",
        oH2:"<h1>",
        oH3:"</h1>"
      }
    }
   } 
</script>
<style scoped>
p{
  font-size: larger;
}
span{
  font-size:3rem;
  color: #06283d;
}
h1{
  color:#f3f2e9;
}

</style>
