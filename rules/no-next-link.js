module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'disallow usage of next/link in the project',
      category: 'Possible Errors',
      recommended: true,
    },
    schema: [], // no options
  },
  create: context => ({
    ImportDeclaration(node) {
      if (
        node.source.value === 'next/link' &&
        node.specifiers.some(specifier => specifier.local.name === 'Link')
      ) {
        context.report({
          node,
          message: 'Do not use next/link. Use CustomLink instead.',
        })
      }
    },
  }),
}
