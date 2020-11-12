import { createSSRApp, createRenderer } from 'vue'
import App from './App.vue'
import './index.css'
import createRouter from './router'
import { createStore } from './store'

const router = createRouter('client');

const app = createSSRApp(App);
const store = createStore();
app.use(router);

if (window.__INITIAL_STATE__) {
  // We initialize the store state with the data injected from the server
  store.replaceState(window.__INITIAL_STATE__)
}

app.use(store);


setTimeout(() => {
  router.isReady().then(() => {
    app.mount('#app', true);
  });
}, 5000);
