import { createStore as createVuexStore } from 'vuex'
if (typeof window === 'undefined') {
  const fetch = require('isomorphic-unfetch')
}
// Assume we have a universal API that returns Promises
// and ignore the implementation details
// import { fetchItem } from './api'



export function createStore() {
  return createVuexStore({
    // IMPORTANT: state must be a function so the module can be
    // instantiated multiple times
    state: () => ({
      sku: {}
    }),

    actions: {
      fetchItem({ commit }, id) {
        // return the Promise via `store.dispatch()` so that we know
        // when the data has been fetched
        console.log('fetching item');
        return fetch(`https://www.aceandtate.com/torii/catalog/products?skus=${id}`)
        .then(r => r.json())
        .then(item => {
          console.log(item);
          commit('setItem', item.data[0]);
        })
        .catch(err => {
          commit('setItem', 'invalid');
        })
      }
    },

    mutations: {
      setItem(state, val) {
        state.sku = val;
      }
    }
  })
}