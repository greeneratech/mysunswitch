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
      history:""
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
          console.log(state.projects)
          state.loading = false
        })
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
          console.log(state.projects)
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
          console.log(state.history)
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
      fetchHistory(context){
        context.commit("fetchHistory")
      }
  },
  plugins: [vuexLocal.plugin]
})