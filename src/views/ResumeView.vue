<template>
    <div class="container">
        <div class="education">
            <h1 class="display-1"><span>{{oH1}}</span> Education <span>{{oH2}}</span></h1>
            <br>
            <div class="container edu ">
                <div class="card  " v-for="edu in education" :key="edu.id">
                    <div class="card-header">
                     {{ edu.place }}
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{{edu.year}}</h5>
                      <p class="card-text">{{edu.description}}</p>
                      <p class="card-text">{{edu.certificate}}</p>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div class="skills">
            <h1 class="display-1"><span>{{oH1}}</span> Skills <span>{{oH2}}</span></h1>
            <br>
            <div class="conatiner sk">
                <div class="card mb-3 skl" v-for="skill in skills" :key="skill.type" style="max-width: 540px;">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img :src="skill.icon" class="img-fluid rounded-start" :alt="skill.type">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">{{ skill.type}}</h5>
                          <p class="card-text">{{skill.level}}</p>
                        </div>
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
            education(){
                return this.$store.state.education
            },
            skills(){
                return this.$store.state.skills
            }
        },
        mounted(){
            this.$store.dispatch('getEducation')
            this.$store.dispatch('getSkills')

        }
    }
</script>

<style scoped>
h1{
    color:#f3f2e9;
}
.edu,.sk{
    display: inline-flex;
    flex-wrap: wrap;
    
}
.card{
    max-width: 20rem;
    margin: 2rem;  
    background-color:#f3f2e9;
}
.skl{
    margin: 2rem;
    background-color: #06283d;
    color: #f3f2e9; 
}
span{
    color: #06283d;
}


</style>