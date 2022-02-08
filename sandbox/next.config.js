let { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
let withVanillaExtract = createVanillaExtractPlugin()
let withMDX = require('@next/mdx')()
const withTM = require('next-transpile-modules')([
  '@ds-pack/components-experimental',
])

/** @type {import('next').NextConfig} */
module.exports = withVanillaExtract(
  withTM(
    withMDX({
      pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
      reactStrictMode: true,
      experimental: {
        modern: true,
        reactMode: 'concurrent',
        // Hmmmm 🤔
        // concurrentFeatures: true,
        // serverComponents: true,
      },
    }),
  ),
)
