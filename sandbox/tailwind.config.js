let path = require('path')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    path.join(path.dirname(require.resolve('@ds-pack/daisyui')), '/**/*.js'),
  ],
  plugins: [require('daisyui')],
}
