<template>
    <div class="container">
        <div class="education">
            <h2 class="display-2">Education</h2>
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
            <h2 class="display-2">Skills</h2>
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
h2{
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


</style>