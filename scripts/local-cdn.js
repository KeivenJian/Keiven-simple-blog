'use strict';

/**
 * Hexo 构建过滤器：把主题引用的境外 CDN 换成本地路径
 *
 * 背景：
 *   Butterfly 主题默认从 cdn.jsdelivr.net 加载两样东西：
 *     1. Font Awesome 图标字体（图标显示依赖它）
 *     2. @egjs/infinitegrid（文章瀑布流组件）
 *   但 jsdelivr 在国内经常被墙，字体加载失败会让图标全变成方块。
 *
 * 做法：
 *   资源已经复制到 source/ 目录下（/fontawesome/、/vendor/），
 *   这里在「HTML 渲染完成之后」做一次字符串替换，
 *   把 CDN 地址改成站点内的本地路径。
 *
 * 生效时机：
 *   hexo generate / hexo server 运行时自动执行；
 *   scripts/ 目录下的文件会被 Hexo 自动加载，不需要在配置里注册。
 */
hexo.extend.filter.register('after_render:html', function (str) {
  return str
    // Font Awesome 的样式表（图标字体，解决图标丢失问题）
    .replace(
      /https:\/\/cdn\.jsdelivr\.net\/npm\/@fortawesome\/fontawesome-free@[\d.]+\/css\/all\.min\.css/g,
      '/fontawesome/css/all.min.css'
    )
    // 瀑布流组件（文章列表布局）
    .replace(
      /https:\/\/cdn\.jsdelivr\.net\/npm\/@egjs\/infinitegrid@[\d.]+\/dist\/infinitegrid\.min\.js/g,
      '/vendor/infinitegrid.min.js'
    );
});
