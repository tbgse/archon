import { createSSRApp } from 'vue'
import App from './App.vue'
import './index.css'

window.setTimeout(() => {
  createSSRApp(App).mount('#app', true);
}, 3000);
