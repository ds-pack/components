module.exports = function transformVanillaExtractImports() {
  return {
    name: '@ds-pack/transform-vanilla-extract-imports',
    visitor: {
      ImportDeclaration(path) {
        if (!path.node.source.value.endsWith('.css')) {
          return
        }
        if (path.node.source.value.endsWith('.css')) {
          path.node.source.value = path.node.source.value.replace(
            '.css',
            '.vanilla',
          )
        }
      },
    },
  }
}
