import { createStore } from 'vuex'

export default createStore({
  state: {
    infos: JSON.parse(localStorage.getItem('infos') || '[]')
  },
  getters: {
    infos: state => {
      return state.infos;
    },
  },
  mutations: {
    createInfo(state, info) {
      state.infos = info;
      localStorage.setItem('infos', JSON.stringify(this.state.infos));
    }
  },
  actions: {
    createInfo({commit}, info) {
      commit('createInfo', info)
    },
  },
  modules: {
  }
})
