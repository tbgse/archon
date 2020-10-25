import { createSSRApp } from 'vue'
import renderer from '@vue/server-renderer';
import App from './App.vue'
import createRouter from './router'
import { createStore } from './store'

// functions/hello.js
exports.handler = async event => {
  console.log('received request at', event.path);
  const router = createRouter();
  const app = createSSRApp(App);
  const store = createStore();

  app.use(router);
  app.use(store);
  router.push(event.path)
  await router.isReady();
  
  if (router.currentRoute.value.matched.length === 0) {
    return {
      statusCode: 404,
      body: '404, route not found' 
    }
  }
  
  let html = await renderer.renderToString(app)
  const state = `<script>__INITIAL_STATE__=${JSON.stringify(store.state)}</script>`;
  html += state;
  return {
    statusCode: 200,
    body: `__HTML__`
  }
}