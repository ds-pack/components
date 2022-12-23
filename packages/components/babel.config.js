let presets = [
  '@babel/preset-env',
  ['@babel/preset-react', { runtime: 'automatic' }],
  '@babel/preset-typescript',
]
let plugins = ['@vanilla-extract/babel-plugin']

if (process.env.NODE_ENV !== 'test') {
  plugins.push('@ds-pack/transform-vanilla-extract-imports')
}

module.exports = { presets, plugins }
