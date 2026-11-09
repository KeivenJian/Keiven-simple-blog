# Keiven-simple-blog

个人博客源码，基于 **Hexo 7 + NexT 8**，通过 GitHub Actions 自动构建并发布到 GitHub Pages。

## 写作

```bash
hexo new post "文章标题"   # 在 source/_posts/ 下生成 Markdown
hexo server               # 本地预览 http://localhost:4000
```

## 构建与部署

```bash
hexo generate   # 生成静态文件到 public/
```

推送到 `main` 分支后，GitHub Actions 会自动构建并发布。

## 配置文件

| 文件 | 作用 |
|---|---|
| `_config.yml` | 站点配置（标题、作者、URL） |
| `_config.next.yml` | NexT 主题配置（菜单、评论） |
| `source/CNAME` | 自定义域名 `keivenblog.me` |
| `.github/workflows/pages.yml` | 自动部署流程 |
