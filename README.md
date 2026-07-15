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
| **服务器详情** | 各线路详细信息 |
| **封禁列表** | 封禁玩家数据查询（分页、排序、搜索） |
| **数据看板** | 服务器状态、TPS 趋势、在线人数、PVP 段位统计 |
| **游戏公告** | 最新公告与资讯 |
| **客服反馈** | 反馈建议、举报玩家、误封申诉 |
| **玩家查询** | 玩家信息查询 |
| **商店页面** | 游戏商店入口 |
| **周目记录** | 服务器地图历史 |

## 🛠️ 技术栈

- **HTML5** + **CSS3** — 页面结构与样式
- **Bootstrap 4** — 响应式布局
- **jQuery** — DOM 操作与交互
- **Chart.js** — 数据可视化图表
- **Bootstrap-Table** — 封禁列表数据表格
- **Isotope** + **Magnific Popup** — 图片网格与灯箱效果
- **Morphext** — 文字轮播动效
- **Font Awesome** — 图标库

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

## 🔌 API

前端数据来源于后端 API（基地址：`https://api.ranmc.cc`）：

| 接口 | 说明 |
|------|------|
| `GET /banlist` | 封禁列表（分页） |
| `GET /chart?type=status` | 各线路状态与延迟 |
| `GET /chart?type=season` | 纪念套装销售统计 |
| `GET /chart?type=tps` | TPS 与在线人数趋势 |
| `GET /chart?type=pvp` | PVP 段位统计 |

## 📄 许可证

[MIT](LICENSE)
