import { createSSRApp } from 'vue'
import renderer from '@vue/server-renderer';
import App from './App.vue'
import createRouter from './router'

// functions/hello.js
exports.handler = async event => {
  console.log('received request at', event.path);
  const router = createRouter();
  const app = createSSRApp(App);
  app.use(router);
  router.push(event.path)
  await router.isReady();
  
  if (router.currentRoute.value.matched.length === 0) {
    return {
      statusCode: 404,
      body: '404, route not found' 
    }
  }
  
  const html = await renderer.renderToString(app)
  
  return {
    statusCode: 200,
    body: `__HTML__`
  }
}