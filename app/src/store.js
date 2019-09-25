import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     myinfo:null
  },
  mutations: {
      setMy(state,data){
        state.myinfo = data
      }
  },
  getters:{
    getMy(state){
      return state.myinfo;
    }
  },
  actions: {

  }
})

