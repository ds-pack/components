let { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
let withVanillaExtract = createVanillaExtractPlugin()
const withTM = require('next-transpile-modules')(['@ds-pack/components'])

/** @type {import('next').NextConfig} */
<<<<<<< HEAD
module.exports = withVanillaExtract(
  withTM({
    reactStrictMode: true,
    experimental: {
      modern: true,
      reactRoot: 'concurrent',
    },
  }),
)
=======
let config = {
  reactStrictMode: true,
  experimental: {
    modern: true,
    reactMode: 'concurrent',
    reactRoot: true,
  },
}

module.exports = withVanillaExtract(withTM(config))
>>>>>>> 56f9ed067fc3336ac2957c9bbe064d141585028a
