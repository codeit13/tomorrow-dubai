const { defineConfig } = require("@vue/cli-service");
// const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  // configureWebpack: {
  //   plugins: [
  //     new PrerenderSPAPlugin({
  //       staticDir: __dirname + "/dist",
  //       // Required - Routes to render.
  //       routes: ["/partner"],
  //     }),
  //   ],
  // },
});
