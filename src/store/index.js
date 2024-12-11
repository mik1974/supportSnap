import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import actions from './actions.js'
import state from './state.js'
import mutations from './mutations.js'
import getters from './getters.js'

const store = createStore({
  state,
  actions,
  mutations,
  getters,
  plugins: [
    createPersistedState({
      storage: window.sessionStorage // Use sessionStorage instead of localStorage
    })
  ]
})

export default store
