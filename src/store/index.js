import { createStore } from 'vuex'
let inData= "https://smasherk.github.io/vueEOMPJson/data" 
export default createStore({
  state: {
    projects:null, 
    testimonials :null, 
    education :null, 
    skills:null, 
    msg:null
  },
  getters: {
  },
  mutations: {
    async getProj(state) {
    try{
      let {projects} = await( await fetch(inData) ).json()
      if(projects) {
        state.projects =projects
      } else{
        
      } 
    } catch (e) {
        state.msg = e
        alert(msg)
    } 
    }, 
    async getTest(state) {
    try{
      let {testimonials} = await( await fetch(inData) ).json()
      if(testimonials) {
        state.testimonials =testimonials
      } else{
        
      } 
    } catch (e) {
        state.msg = e
        alert(msg)
    } 
    },
    async getSkl(state) {
    try{
      let {skills} = await( await fetch(inData) ).json()
      if(skills) {
        state.skills =skills
      } else{
        
      } 
    } catch (e) {
        state.msg = e
        alert(msg)
    } 
    },
    async getEdu(state) {
    try{
      let {education } = await( await fetch(inData) ).json()
      if(education ) {
        state.education =education
      } else{
        
      } 
    } catch (e) {
        state.msg = e
        alert(msg)
    } 
   } 
  },
  actions: {
    getEducation(context) {
       context.commit('getEdu')
     },
    getSkills(context) {
       context.commit('getSkl')
     },
    getTestimonials(context) {
       context.commit('getTest')
     },
    getProjects(context) {
       context.commit('getProj')
     }
  },
  modules: {
  }
})
