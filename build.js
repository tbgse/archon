const { ssrBuild, build } = require('vite')
const replace = require('@rollup/plugin-replace');

;(async () => {
  const clientResult = await build({
    outDir: 'dist',
    rollupInputOptions: {
      input: './src/entry-client.js'
    },
  })


  await ssrBuild({
    outDir: 'functions',
    rollupOutputOptions: {
      namespaceToStringTag: true,
      inlineDynamicImports: true
    },
    rollupInputOptions: {
      plugins: [
        replace({
          __HTML__: clientResult.html.replace('<div id="app">', '<div id="app" data-server-rendered="true">${html}')
        })
      ],
      input: './src/entry-netlify.js'
    },
  })

  process.exit(0);
})()