const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---docs-aaa-mdx": hot(preferDefault(require("/Users/morse/Documents/GitHub/play-gatsby/docz-app-gatsby/docs/aaa.mdx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/morse/Documents/GitHub/play-gatsby/docz-app-gatsby/src/pages/index.jsx"))),
  "component---readme-md": hot(preferDefault(require("/Users/morse/Documents/GitHub/play-gatsby/docz-app-gatsby/README.md"))),
  "component---docs-example-mdx": hot(preferDefault(require("/Users/morse/Documents/GitHub/play-gatsby/docz-app-gatsby/docs/example.mdx"))),
  "component---docs-index-mdx": hot(preferDefault(require("/Users/morse/Documents/GitHub/play-gatsby/docz-app-gatsby/docs/index.mdx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/morse/Documents/GitHub/play-gatsby/docz-app-gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/morse/Documents/GitHub/play-gatsby/docz-app-gatsby/src/pages/404.js")))
}

