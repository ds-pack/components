/** @type {import('next').NextConfig} */
let config = {
  reactStrictMode: true,
  modularizeImports: {
    '@ds-pack/components': {
      transform: '@ds-pack/components/dist/{{member}}',
      skipDefaultConversion: true,
    },
    '@ds-pack/components-daisyui': {
      transform: '@ds-pack/components-daisyui/dist/{{member}}/{{member}}',
    },
  },
  experimental: {
    runtime: 'nodejs',
    appDir: true,
  },
}

module.exports = config
