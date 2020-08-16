const { ssrBuild, build } = require('vite')
const replace = require('@rollup/plugin-replace');

;(async () => {
  // All options are optional.
  // check out `src/node/build/index.ts` for full options interface.
  const clientResult = await build({
    outDir: 'dist/client',
    rollupInputOptions: {
      input: './src/entry-client.js'
    },
  })


  const serverResult = await ssrBuild({
    outDir: 'dist/server',
    rollupPluginVueOptions: {
      target: 'node'
    },
    rollupInputOptions: {
      plugins: [
        replace({
          __HTML__: clientResult.html.replace('<div id="app">', '<div id="app" data-server-rendered="true">${html}')
        })
      ],
      input: './src/entry-server.js'
    },
  })
})()