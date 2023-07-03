import { createStore } from 'vuex'
let inData= "https://smasherk.github.io/vueEOMPJson/data" 
export default createStore({
  state: {
    projects:null, 
    testimonials :null, 
    education :null, 
    skills:null, 
    
  },
  getters: {
  },
  mutations: {
    async getProj(state) {
    try{
      let {projects} = await( await fetch(inData) ).json()
      if(projects) {
        state.projects =projects
      }
    } catch (e) {
        alert(e.msg)
    } 
    }, 
    async getTest(state) {
    try{
      let {testimonials} = await( await fetch(inData) ).json()
      if(testimonials) {
        state.testimonials =testimonials
      }
    } catch (e) {
        alert(e.msg)
    } 
    },
    async getSkl(state) {
    try{
      let {Skills} = await( await fetch(inData) ).json()
      if(Skills) {
        state.skills =Skills
      }
    } catch (e) {
        alert(e.msg)
    } 
    },
    async getEdu(state) {
    try{
      let {education } = await( await fetch(inData) ).json()
      if(education ) {
        state.education =education
      } 
    } catch (e) {
        alert(e.msg)
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
