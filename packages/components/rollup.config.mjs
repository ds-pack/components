import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin'
import fastGlob from 'fast-glob'

let cssJSFiles = fastGlob
  .sync('**/*.css.ts')
  .filter((path) => !path.includes('node_modules'))

/**
 * @type import('rollup').RollupOptions
 */
export default {
  plugins: [vanillaExtractPlugin()],
  input: cssJSFiles,
  output: {
    dir: './dist',
    preserveModules: true,
    format: 'cjs',
    // banner: "'use client';",
    entryFileNames({ name }) {
      if (name) {
        return name.replace('.css', '.vanilla.js')
      }
      return ''
    },
    assetFileNames({ name }) {
      if (name) {
        if (name.endsWith('.css.ts.vanilla.css')) {
          return name.replace('.css.ts.vanilla.css', '.css').replace('src/', '')
        }
      }
      return ''
    },
  },
}
