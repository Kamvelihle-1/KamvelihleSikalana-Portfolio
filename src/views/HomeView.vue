<template>
  <div class="home " >
    <div class="container mt-5 pt-5">
      <h1 class="display-1">Welcome to my portfolio</h1>
      <br>
      <p class="display-6"><span>Hi</span>, I am Kamvelihle Sikalana an aspiring <span v-for="item in tEffect" :key="item"> {{item}}</span>, so what are we building? </p>
    </div>
  </div>
</template>

<script >

export default {
  name: 'HomeView',
 
  data() {
    return{
     tEffect : ["Software Engineer","Penetration Tester","IT Security Officer"]
      }
    }
  
}
</script>


<style scoped>
h1{
  color: white;
}

</style>


