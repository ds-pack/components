module.exports = function (api) {
  api.cache.using(() => process.env.NODE_ENV)

  let cfg = ['@babel/preset-env', { bugfixes: true }]
  if (process.env.NODE_ENV === 'test') {
    cfg = [
      '@babel/preset-env',
      {
        targets: {
          node: 8,
        },
      },
    ]
  }
  return {
    presets: ['next/babel', cfg],
    plugins: [
      '@vanilla-extract/babel-plugin',
      [
        '@babel/plugin-transform-typescript',
        {
          isTSX: true,
          allowNamespaces: true,
          onlyRemoveTypeImports: true,
          allowDeclareFields: true,
        },
      ],
      'babel-plugin-styled-components',
      '@babel/plugin-transform-runtime',
      '@babel/plugin-proposal-export-default-from',
    ],
    ignore:
      process.env.NODE_ENV !== 'test'
        ? ['src/test.js', 'src/__fixtures__/**/*.js']
        : [],
  }
}
