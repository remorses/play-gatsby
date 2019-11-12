// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---docs-aaa-mdx": () => import("../docs/aaa.mdx" /* webpackChunkName: "component---docs-aaa-mdx" */),
  "component---src-pages-index-jsx": () => import("../src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */),
  "component---readme-md": () => import("../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---docs-example-mdx": () => import("../docs/example.mdx" /* webpackChunkName: "component---docs-example-mdx" */),
  "component---docs-index-mdx": () => import("../docs/index.mdx" /* webpackChunkName: "component---docs-index-mdx" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

