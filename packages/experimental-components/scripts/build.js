let esbuild = require('esbuild')
let { vanillaExtractPlugin } = require('@vanilla-extract/esbuild-plugin')
let fs = require('fs')
let babel = require('@babel/core')
let createPlugin = require('@babel/plugin-transform-react-jsx').default
let tsxSyntax = require('@babel/plugin-syntax-typescript').default
let jsxSyntax = require('@babel/plugin-syntax-jsx').default

// Source: https://github.com/evanw/esbuild/issues/334#issuecomment-760427837
// let jsxPluginReact17 = {
//   name: 'jsx-react-17',
//   setup(build) {
//     let plugin = createPlugin({}, { runtime: 'automatic' })

//     build.onLoad({ filter: /\.tsx$/ }, async (args) => {
//       let jsx = await fs.promises.readFile(args.path, 'utf8')
//       let result = babel.transformSync(jsx, {
//         plugins: [
//           jsxSyntax,
//           tsxSyntax,
//           plugin,
//           // [
//           //   {
//           //     // force typescript to support jsx in all files no matter the extension I guess
//           //     isTSX: true,
//           //     allExtensions: true,
//           //     allowDeclareFields: true,
//           //     onlyRemoveTypeImports: true,
//           //   },
//           // ],
//         ],
//       })
//       return { contents: result.code }
//     })
//   },
// }

esbuild
  .build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    plugins: [
      vanillaExtractPlugin(),
      // jsxPluginReact17
    ],
    external: Object.keys(require('../package.json').peerDependencies),
    outfile: './dist/index.js',
  })
  .catch(() => {
    process.exit(1)
  })
