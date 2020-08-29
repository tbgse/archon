import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import Home from './components/Home.vue';
console.log(process.env.RENDER_MODE);


export default function (type) {
  const routerHistory = type === 'client' ? createWebHistory() : createMemoryHistory();
  
  return createRouter({
    history: routerHistory,
    routes: [
      { path: '/', component: Home, props: true },
      { path: '/a', component: () => import('./components/PageA.vue'), props: true },
      { path: '/b', component: () => import('./components/PageB.vue'), props: true },
    ]
  });
}