import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)




export default new Vuex.Store({
  state: {
      user:"",
      users:[],
      name:"",
      projects:"",
      loading:true,
      history:"",
      single:"",
      projectLoading:false,
      allProjects:[]
  },
  getters: {
    
  },
  mutations: {
      fetchUser(state,value){
        if(sessionStorage.getItem('vuex')!= null){
          state.user = JSON.parse(sessionStorage.getItem('vuex'))
        } else{
        state.user = value
        sessionStorage.setItem('vuex',JSON.stringify(value))
        } 
      },

      adminUsers(state,value){
        if(sessionStorage.getItem("users")!=null){
          state.users = JSON.parse(sessionStorage.getItem("users"))
        }else{
          state.users = value
          console.log(value)
          sessionStorage.setItem("users",JSON.stringify(value))
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

      fetchAllProjects(state){
        state.projectLoading = true
        axios({
          method:"GET",
          url:"https://greeneratech.herokuapp.com/api/admin/investments/get",
          headers: {
            ContentType: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          }
        }).then((response)=>{
          console.log(response)
          state.allProjects = response.data.data.reverse()
          state.projectLoading = false
        })
      },

      sortByName(state) {
        state.users.sort((a, b) =>
          a.firstName > b.firstName
            ? 1
            : b.firstName > a.firstName
            ? -1
            : 0
        );
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

  },
  actions: {
     fetchUser: (context,value) => {
        context.commit("fetchUser",value);
      },
      adminUsers:(context,value) => {
        context.commit("adminUsers",value);
      },
      sortByName: (context) => {
        context.commit("sortByName");
      },
      fetchProjects(context){
        context.commit("fetchProjects")
      },
      fetchAllProjects(context){
        context.commit("fetchAllProjects")
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
})