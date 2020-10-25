// store.js
import { createStore as createVuexStore } from 'vuex'

// Assume we have a universal API that returns Promises
// and ignore the implementation details
// import { fetchItem } from './api'

export function createStore() {
  return createVuexStore({
    // IMPORTANT: state must be a function so the module can be
    // instantiated multiple times
    state: () => ({
      name: ''
    }),

    // actions: {
    //   fetchItem({ commit }, id) {
    //     // return the Promise via `store.dispatch()` so that we know
    //     // when the data has been fetched
    //     return fetchItem(id).then(item => {
    //       commit('setItem', { id, item })
    //     })
    //   }
    // },

    mutations: {
      setItem(state, val) {
        state.name = val;
      }
    }
  })
}