let { vanillaExtractPlugin } = require('@vanilla-extract/esbuild-plugin')

function makeJSXPlugin(presetOptions) {
  let jsxPluginReact17 = {
    name: 'jsx-react-17',
    setup(build) {
      let fs = require('fs')
      let babel = require('@babel/core')

      build.onLoad({ filter: /\.tsx$/ }, async (args) => {
        let jsx = await fs.promises.readFile(args.path, 'utf8')
        let result = babel.transformSync(jsx, {
          filename: 'foo.tsx',
          presets: [
            [
              '@babel/preset-env',
              {
                bugfixes: true,
                ...presetOptions,
              },
            ],
            [
              '@babel/preset-react',
              {
                runtime: 'automatic',
              },
            ],
          ],
        })
        return { contents: result.code }
      })
    },
  }
  return jsxPluginReact17
}

let esbuild = require('esbuild')

let sharedConfig = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  external: [
    'react',
    'react-dom',
    'scheduler',
    '@ds-pack/use-refs',
    '@vanilla-extract/css',
    '@vanilla-extract/dynamic',
    'rainbow-sprinkles',
    'nanopop',
  ],
}

esbuild
  .build({
    ...sharedConfig,
    format: 'esm',
    plugins: [
      vanillaExtractPlugin(),
      makeJSXPlugin({
        targets: { node: true },
        modules: false,
      }),
    ],
    outfile: './dist/index.mjs',
  })
  .catch((e) => {
    console.log('Error!')
    throw e
  })

esbuild
  .build({
    ...sharedConfig,
    format: 'cjs',
    plugins: [
      vanillaExtractPlugin(),
      makeJSXPlugin({
        targets: { esmodules: true },
      }),
    ],
    outfile: './dist/index.es6.js',
  })
  .catch((e) => {
    console.log('Error!')
    throw e
  })

esbuild
  .build({
    ...sharedConfig,
    format: 'cjs',
    plugins: [
      vanillaExtractPlugin(),
      makeJSXPlugin({ targets: '> 0.25%, not dead' }),
    ],
    outfile: './dist/index.es5.js',
  })
  .catch((e) => {
    console.log('Error!')
    throw e
  })
