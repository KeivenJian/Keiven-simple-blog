'use strict';

// 把 Butterfly 引用的 jsDelivr CDN 资源替换成本地路径
// 原因：cdn.jsdelivr.net 在国内经常被墙，字体加载失败会导致图标显示成方块
hexo.extend.filter.register('after_render:html', function (str) {
  return str
    .replace(
      /https:\/\/cdn\.jsdelivr\.net\/npm\/@fortawesome\/fontawesome-free@[\d.]+\/css\/all\.min\.css/g,
      '/fontawesome/css/all.min.css'
    )
    .replace(
      /https:\/\/cdn\.jsdelivr\.net\/npm\/@egjs\/infinitegrid@[\d.]+\/dist\/infinitegrid\.min\.js/g,
      '/vendor/infinitegrid.min.js'
    );
});
