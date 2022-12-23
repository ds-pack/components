/** @type {import('next').NextConfig} */
let config = {
  reactStrictMode: true,
  modularizeImports: {
    '@ds-pack/components': {
      transform: '@ds-pack/components/dist/{{member}}',
      skipDefaultConversion: true,
    },
  },
  experimental: {
    runtime: 'nodejs',
    appDir: true,
  },
}

module.exports = config
