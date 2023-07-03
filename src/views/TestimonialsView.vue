<template>
    <div class="container">
        <h1 class="display-1"><span>{{oH1}}</span> Testimonials <span>{{oH2}}</span></h1>
        <br>
        <div class="container testimonials">
            <div class="card m-5 animate__animated animate__fadeInLeft" v-for="test in testimonials" :key="test"  >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img :src="test.image" class="img-fluid rounded-start " :alt="test.name" loading="lazy">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title fw-bold display-5">{{test.name}} {{test.surname}}</h5>
                      <p class="card-text">{{test.testimonial}}</p>
                      <p class="card-text fw-bold fs-2">{{test.relation}}</p>
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
            testimonials(){
               return this.$store.state.testimonials
            }
        },
        mounted(){
            this.$store.dispatch('getTestimonials')
        }
        
    }
</script>

<style scoped>
.card{
    background-color:  #f3f2e9;
}
.testimonials{
    display: flex;
    flex-wrap: wrap;
}
img{
    max-height: 340px;
    width: 30rem;
}
span{
    color: #06283d;
}
h1{
    color: #f3f2e9;
}

</style>