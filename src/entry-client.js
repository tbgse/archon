import { createSSRApp, createRenderer } from 'vue'
import App from './App.vue'
import './index.css'
import createRouter from './router'

const router = createRouter('client');


const app = createSSRApp(App);
app.use(router);

window.setTimeout(() => {
  console.log('hydrating!!');
  router.isReady().then(() => {
    console.log(router.currentRoute);
    app.mount('#app', true);
  });
}, 5000);
