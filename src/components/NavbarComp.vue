<template>
    <div class="navigation ">
        <nav class="navbar navbar-expand-lg bg-body-tertiary p-0 ">
            <div class="container-fluid  p-2" id="navBar">
              
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link class="nav-link " aria-current="page" to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/resume">Resume</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/projects">Projects</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/testimonials">Testimonials</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/contact">Contact</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#navBar{
    background-color: #06283d;
    opacity: .75;
}
.nav-link{
    color: #f3f2e9;
    
   
}
.nav-link:hover{
    background-color: #f3f2e9;
    color:#06283d;
    border-radius: .5rem;
    transform: translateY(0.5rem);
    transition: top 0.5s, opacity 0.5s ;
}
.navbar-toggler,.navbar-toggler-icon{
    background-color: #f3f2e9;
}
.navigation{
  margin-bottom: 3rem;
}

</style>