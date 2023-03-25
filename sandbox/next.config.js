/** @type {import('next').NextConfig} */
let config = {
  reactStrictMode: true,
  modularizeImports: {
    '@ds-pack/components': {
      transform: '@ds-pack/components/dist/{{member}}',
      skipDefaultConversion: true,
    },
    '@ds-pack/daisyui': {
      transform: '@ds-pack/daisyui/dist/{{member}}',
    },
  },
  experimental: {
    runtime: 'nodejs',
    appDir: true,
  },
}

module.exports = config
