let { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
let withVanillaExtract = createVanillaExtractPlugin()
const withTM = require('next-transpile-modules')(['@ds-pack/components'])

/** @type {import('next').NextConfig} */
let config = {
  reactStrictMode: true,
  experimental: {
    modern: true,
    reactMode: 'concurrent',
    reactRoot: true,
  },
}

module.exports = withVanillaExtract(withTM(config))
