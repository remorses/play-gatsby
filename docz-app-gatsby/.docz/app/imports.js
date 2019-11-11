export const imports = {
  'README.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "readme" */ 'README.md'),
  'docs/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-index" */ 'docs/index.mdx'
    ),
}
