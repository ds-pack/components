let { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
let withVanillaExtract = createVanillaExtractPlugin()
const withTM = require('next-transpile-modules')(['@ds-pack/components'])

/** @type {import('next').NextConfig} */
module.exports = withVanillaExtract(
  withTM({
    reactStrictMode: true,
    experimental: {
      modern: true,
      reactRoot: 'concurrent',
    },
  }),
)
