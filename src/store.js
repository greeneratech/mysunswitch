import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
// import axios from 'axios'


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
      name:""
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
      RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION,
  },
  actions: {
     fetchUser: (context,value) => {
        context.commit("fetchUser",value);
      },
  },
  plugins: [vuexLocal.plugin]
})