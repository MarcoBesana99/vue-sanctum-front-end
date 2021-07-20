import auth from './auth'
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],
  modules: {
    auth,
  }
})

export default store