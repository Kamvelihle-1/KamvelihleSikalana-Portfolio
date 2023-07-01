<template>
  <NavbarComp/>
  <div class="container-fluid"  >
    <router-view/>
  </div>
  <FooterComp/>
</template>

<script>

import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';
export default {
  
  components:{
    NavbarComp,
    FooterComp
  }
  
}
</script>

<style  >
@import './assets/css/style.css';
</style>
