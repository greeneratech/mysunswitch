import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'


Vue.use(Vuex)


export default new Vuex.Store({
  state: {
      user:""
  },
  getters: {
    
  },
  mutations: {
      fetchUser(state,value){
        state.user = value
        console.log(state.user)
      }
  },
  actions: {
     fetchUser: (context,value) => {
        context.commit("fetchUser",value);
      },
  },
})