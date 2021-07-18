export default {
  namespaced: true,
  state: {
    authenticated: false,
  },
  getters: {
    authenticated(state) {
      return state.authenticated
    },
  },
  mutations: {
    SET_AUTHENTICATED(state, value) {
      state.authenticated = value
    },
  },
  actions: {
    setAuthenticated({ commit }, data) {
      commit('SET_AUTHENTICATED', data)
    },
  }
}