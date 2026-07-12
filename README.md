# 🐱 Meow Cafe Skill — AI猫猫陪伴助手

> 喝咖啡 · 撸猫猫 · 治愈你的每一天 | Hermes Agent Skill

[![License: MIT](https://img.shields.io/badge/License-MIT-pink.svg)](LICENSE)
[![Skill Type](https://img.shields.io/badge/Hermes-Skill-orange)](SKILL.md)

## ✨ 这是什么？

一个 **config-driven（改一处全站更新）** 的猫猫咖啡馆互动网页应用。包含 7 个页面、4 只性格各异的猫猫角色、Web Audio 合成音效、localStorage 统计系统。

### 🐱 四只猫猫

| 猫猫 | 性格 | 专属页面 |
|------|------|----------|
| 🐈 奶油 | 温柔亲人 · 最爱蹭蹭 | 摸摸计数 + AI聊天窗 |
| 🐈 橘橘 | 吃货担当 · 为罐头疯狂 | 点击吃东西积分 |
| 🐈‍⬛ 黑黑 | 高冷神秘 · 深夜守护者 | 安慰话语 + 星空背景 |
| 😺 咪咪 | 店长本喵 · 统领全局 | Boss仪表盘看数据 |

## 📁 项目结构

```
meow-cafe-skill/
├── SKILL.md              ← Hermes Skill 定义
├── README.md             ← 本文
├── references/
│   └── config.js         ← 🎨 全站数据中心（改一处=全站更新）
├── scripts/
│   └── generate.py       ← 🛠️ CLI 工具（list / add-cat / add-menu）
├── templates/            ← 📄 7个HTML页面 + sound.js + stats.js
└── assets/               ← 🖼️ 猫猫图片 + 音频
```

## 🚀 快速开始

```bash
# 1. 克隆
git clone https://github.com/onsanU/meow-cafe-skill.git
cd meow-cafe-skill

# 2. 打开主页
open templates/index.html   # 或直接浏览器打开

# 3. CLI 管理（可选）
cd scripts/
python3 generate.py list      # 查看所有猫猫
python3 generate.py add-cat   # 添加新猫猫
```

## 🎨 设计亮点

- **改一处全站更新**: 修改 `references/config.js` 里的颜色，所有页面自动同步
- **零依赖音效**: `sound.js` 用 Web Audio API 合成呼噜声/喵叫/风铃，不需要任何音频文件
- **每周自动重置**: localStorage 统计周一自动清零
- **纯静态部署**: 丢到 GitHub Pages / Netlify 直接用，无需 build

## 📄 页面清单

| 页面 | 功能 |
|------|------|
| `index.html` | 主页：4题问卷 → 匹配专属猫猫 → 撒小鱼干 |
| `cream.html` | 奶油：摸摸互动 + AI聊天窗 |
| `orange.html` | 橘橘：大胃王积分游戏 |
| `black.html` | 黑黑：深夜守护 + 安慰语轮播 |
| `mimi.html` | 咪咪：店长监控仪表盘 |
| `menu.html` | 菜单：购物车 + 下单 |
| `gallery.html` | 绘卷：猫猫写真 + 俳句 |

## 🛠️ 技术栈

- 纯 HTML/CSS/JS（无框架）
- p5.js（猫猫动画）
- Web Audio API（音效合成）
- localStorage（数据统计）
- Python 3（CLI 管理脚本）

---

*Made with 🐱 by onsanU | Hermes Agent Skill*
