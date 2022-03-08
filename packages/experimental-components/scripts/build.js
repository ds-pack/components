let { vanillaExtractPlugin } = require('@vanilla-extract/esbuild-plugin')

let jsxPluginReact17 = {
  name: 'jsx-react-17',
  setup(build) {
    let fs = require('fs')
    let babel = require('@babel/core')
    let plugin = require('@babel/plugin-transform-react-jsx').default(
      {},
      { runtime: 'automatic' },
    )
    let ts = require('@babel/plugin-syntax-typescript').default

    build.onLoad({ filter: /\.tsx$/ }, async (args) => {
      let jsx = await fs.promises.readFile(args.path, 'utf8')
      let result = babel.transformSync(jsx, {
        filename: 'foo.tsx',
        plugins: [plugin, ts],
      })
      return { contents: result.code }
    })
  },
}

require('esbuild')
  .build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    format: 'cjs',
    plugins: [vanillaExtractPlugin(), jsxPluginReact17],
    outfile: 'compiled.js',
    // outdir: './dist',
    // splitting: true,
    external: [
      'react',
      'scheduler',
      '@ds-pack/use-refs',
      'react-dom',
      '@vanilla-extract/css',
      'nanopop',
    ],
  })
  .catch(() => process.exit(1))
