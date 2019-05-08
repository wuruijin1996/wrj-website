const path = require('path');

module.exports = {
  // 基本路径
  publicPath: './',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  configureWebpack: {
    externals: {
      echarts: 'echarts',
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/common/less/var.less'),
      ],
    },
  },
};
