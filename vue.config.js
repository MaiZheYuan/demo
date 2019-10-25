const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  // runtimeCompiler:true,
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias.set("@cpn", resolve("src/components"));
  },
  // rules: [
  //   {
  //     test: /\.less$/,
  //     use: [
  //       {
  //         loader: 'less-loader',
  //         options: {
  //           modifyVars: {
  //             '@blue':"#884898"
  //           }
  //         }
  //       }
  //     ]
  //   }
  // ],
  devServer: {
    proxy: {
      "/commons": {
        target: "http://172.16.1.99",
        changeOrigin: true,
        ws: true
        // pathRewrite: {
        //   '^/api': ''
        // }
      },
      "/api": {
        target: "http://172.16.1.99",
        changeOrigin: true,
        ws: true
      },
      "/config": {
        target: "http://172.16.1.99",
        changeOrigin: true,
        ws: true
      }
    }
  }
};
