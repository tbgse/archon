import { createSSRApp } from 'vue'
import renderer from '@vue/server-renderer';
import App from './App.vue'
import createRouter from './router'
import { createStore } from './store'

const express = require('express');
const path = require('path');
const server = express();
server.use('/_assets', express.static(path.join(__dirname, '../dist/_assets')));

server.get('*', (req, res) => {
  const router = createRouter();
  const app = createSSRApp(App);
  const store = createStore();
  app.use(router);
  app.use(store);

  router.push(req.url)
  router.isReady().then(() => {
    if (router.currentRoute.value.matched.length === 0) {
      res.end();
      return;
    }
    ;(async () => {
      let html = await renderer.renderToString(app);

      // TODO fix possible XSS vulnerability, use a more reliable way to serialize data
      const state = `<script>__INITIAL_STATE__=${JSON.stringify(store.state)}</script>`;
      html+=state;
      res.end(`__HTML__`)
    })()
  });
})

console.log('started server...');
server.listen(8080);