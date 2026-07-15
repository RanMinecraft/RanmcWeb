# 桃花源 · RanmcWeb

![GitHub License](https://img.shields.io/github/license/ranminecraft/Ranmcweb)
![GitHub last commit](https://img.shields.io/github/last-commit/ranminecraft/Ranmcweb)
![GitHub deployments](https://img.shields.io/github/deployments/ranminecraft/Ranmcweb/github-pages)

> 🏔️ 我的世界「桃花源」服务器官方网站

## 📋 简介

桃花源服务器官方网站，为玩家提供服务器信息展示、封禁列表查询、数据看板、游戏公告、客服反馈等功能。

## ✨ 功能

| 页面 | 说明 |
|------|------|
| **首页** | 服务器介绍、欢迎信息、风景画廊 |
| **封禁列表** | 封禁玩家数据查询（分页、排序、搜索） |
| **数据看板** | 服务器状态、TPS 趋势、在线人数、PVP 段位统计 |
| **游戏公告** | 最新公告与资讯 |
| **客服反馈** | 内嵌飞书表单实现反馈建议、举报玩家、误封申诉 |

## 🚀 快速开始

### 本地预览

项目为纯静态页面，直接在浏览器打开 HTML 文件即可预览：

```bash
git clone https://github.com/ranminecraft/Ranmcweb.git
cd Ranmcweb
# 直接打开 index.html
```

### 构建

```bash
npm install
node build.js
```

构建产物输出到 `dist/` 目录。

### 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

```bash
git push origin main
```

## 📁 项目结构

```
RanmcWeb/
├── index.html                  # 首页
├── banlist.html                # 封禁列表
├── dashboard.html              # 数据看板
├── server.html                 # 服务器详情
├── news.html                   # 游戏公告
├── service.html                # 客服反馈
├── verify.html                 # 验证页面
├── address.html                # 服务器地址
├── check.html                  # 玩家查询
├── region.html                 # 周目记录
├── shop.html                   # 商店
├── card.html                   # 名片
├── halloween.html              # 万圣节活动
├── build.js                    # 构建脚本
├── package.json
├── css/                        # 样式文件
├── js/                         # JavaScript
├── constant/                   # 公共模块（导航栏、页脚等）
├── img/                        # 图片资源
└── .github/workflows/          # CI/CD 配置
```
