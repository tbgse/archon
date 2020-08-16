import { createSSRApp } from 'vue'
import renderer from '@vue/server-renderer';
import App from './App.vue'

const express = require('express');
const path = require('path');
const server = express();

server.use('/_assets', express.static(path.join(__dirname, '../client/_assets')));

server.get('*', (req, res) => {

  const app = createSSRApp(App);

  ; (async () => {
    const html = await renderer.renderToString(app)
    res.end(`__HTML__`)
  })()
})

console.log('started server...');
server.listen(8080);