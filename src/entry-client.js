import { createSSRApp, createRenderer } from 'vue'
import App from './App.vue'
import './index.css'
import createRouter from './router'

const router = createRouter('client');

const app = createSSRApp(App);
app.use(router);

setTimeout(() => {
  router.isReady().then(() => {
    app.mount('#app', true);
  });
}, 3000);
