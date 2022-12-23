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
    // banner: "'use client';",
    entryFileNames({ name }) {
      console.log(`Entry: ${name}`)
      if (name) {
        return name.replace('.css', '.vanilla.js')
      }
      return ''
    },
    assetFileNames({ name }) {
      console.log(`Asset: ${name}`)
      if (name) {
        if (name.endsWith('.css.ts.vanilla.css')) {
          return name.replace('.css.ts.vanilla.css', '.css').replace('src/', '')
        }
      }
      return ''
    },
  },
}
