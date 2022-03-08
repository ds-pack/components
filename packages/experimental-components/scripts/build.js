let { vanillaExtractPlugin } = require('@vanilla-extract/esbuild-plugin')

require('esbuild')
  .build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    format: 'cjs',
    plugins: [vanillaExtractPlugin()],
    outfile: 'compiled.js',
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
