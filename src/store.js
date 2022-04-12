import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import axios from 'axios'


Vue.use(Vuex)

const badMutations = [
  'SET_USER',
  'vuexfireMutations'
]


const vuexLocal = new VuexPersistence({
  strictMode: true, 
  storage: window.sessionStorage,
  reducer: (state) => state.user,
  filter: (mutation) => (badMutations.indexOf(mutation.type) === -1)
})


export default new Vuex.Store({
  state: {
      user:"",
      name:"",
      projects:"",
      loading:true,
      history:"",
      single:""
  },
  getters: {
    
  },
  mutations: {
      fetchUser(state,value){
        if(sessionStorage.getItem('vuex')!= null){
          state.user = JSON.parse(sessionStorage.getItem('vuex'))
        } else{
        state.user = value.user
        }
        
      },

      fetchProjects(state){
        state.loading = true
        axios({
          method:"GET",
          url:"https://greeneratech.herokuapp.com/api/user/investments/all",
          headers: {
            ContentType: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          }
        }).then((response)=>{
          state.projects = response.data.data
          state.loading = false
        })
      },

       fetchSingleProject(state,i){
        state.loading = true
        state.single = state.projects.filter((project)=>
          project.id = i).slice(0,1)
        state.loading = false
      },

      fetchMyProjects(state){
        state.loading = true
        axios({
          method:"GET",
          url:"https://greeneratech.herokuapp.com/api/user/investments/mine",
          headers: {
            ContentType: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          }
        }).then((response)=>{
          state.projects = response.data.data
        })
      },

      fetchHistory(state){
        state.loading = true
        axios({
          method:"GET",
          url:"https://greeneratech.herokuapp.com/api/user/history",
          headers: {
            ContentType: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          }
        }).then((response)=>{
          state.history = response.data.data.reverse()
          
          state.loading = false
        })
      },

      fetchBusinessHistory(state){
        state.loading = true
        axios({
          method:"GET",
          url:"https://greeneratech.herokuapp.com/api/business/history",
          headers: {
            ContentType: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          }
        }).then((response)=>{
          state.history = response.data.data.reverse()
         
          state.loading = false
        })
      },


      RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION,
  },
  actions: {
     fetchUser: (context,value) => {
        context.commit("fetchUser",value);
      },
      fetchProjects(context){
        context.commit("fetchProjects")
      },
      fetchSingleProject(context,i){
        context.commit("fetchSingleProject",i)
      },
      fetchHistory(context){
        context.commit("fetchHistory")
      },
      fetchBusinessHistory(context){
        context.commit("fetchBusinessHistory")
      },
  },
  plugins: [vuexLocal.plugin]
})