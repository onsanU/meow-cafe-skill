# 🐱 Meow Cafe Skill — AI猫猫陪伴助手

> 选题：AI猫猫陪伴助手 · 基于 Hermes Agent 的互动网页 Skill | 2026年7月

[![License: MIT](https://img.shields.io/badge/License-MIT-pink.svg)](LICENSE)

---

## 📌 选题说明

本项目选题为 **"AI猫猫陪伴助手"**——一个 config-driven 的猫猫咖啡馆互动网页应用。用户通过4题问卷匹配专属猫猫，在7个页面中与4只性格各异的猫猫互动（摸摸/喂食/聊天/守护）。核心亮点：所有颜色和配置集中在 `config.js`，改一处全站自动更新。

**AI 核心价值体现：** 不是简单的网页生成——而是 AI 辅助下的 config-driven 架构设计、零依赖 Web Audio 音效合成、localStorage 跨页统计系统，以及 CLI 自动化管理工具。没有 AI 参与架构设计和模块抽取，这套体系难以从零搭建。

---

## 📁 仓库结构

```
meow-cafe-skill/
├── skill/                        # Skill 文件
│   ├── SKILL.md                  # 技能定义（含 yaml 前端配置）
│   ├── scripts/generate.py       # CLI 管理工具
│   ├── references/config.js      # 数据中心（改一处全站更新）
│   ├── templates/                # 7个HTML页面 + sound.js + stats.js
│   └── assets/                   # 猫猫图片 + 音频
├── data/                         # 测试数据（22用例）
├── tests/                        # 测试记录 + 8张截图
│   ├── test_record.md
│   └── screenshots/
├── iteration/                    # 迭代升级说明
│   └── iteration_log.md
└── README.md
```

---

## 🐱 功能简介

### 四只猫猫

| 猫猫 | 性格 | 互动方式 |
|------|------|----------|
| 🐈 奶油 | 温柔亲人 | 摸摸计数 + AI 聊天窗 |
| 🐈 橘橘 | 吃货担当 | 吃罐头积分游戏 |
| 🐈‍⬛ 黑黑 | 深夜守护者 | 安慰话语 + 雨声 BGM |
| 😺 咪咪 | 店长本喵 | Boss 仪表盘监控 |

### 七个页面

| 页面 | 功能 |
|------|------|
| `index.html` | 4题问卷匹配 + 撒小鱼干 + 氛围切换 |
| `cream.html` | 奶油摸摸互动 + 右下角聊天窗 |
| `orange.html` | 橘橘大胃王积分 |
| `black.html` | 黑黑夜深守护 + 星空背景 |
| `mimi.html` | 店长监控仪表盘 |
| `menu.html` | 菜单购物车 |
| `gallery.html` | 猫猫绘卷 + 中日双语俳句 |

---

## 🚀 使用方式

```bash
# 1. 克隆
git clone https://github.com/onsanU/meow-cafe-skill.git
cd meow-cafe-skill

# 2. 打开主页
open skill/templates/index.html   # 或浏览器直接打开

# 3. CLI 管理（可选）
cd skill/scripts/
python3 generate.py list           # 查看所有猫猫
python3 generate.py add-cat        # 添加新猫猫
python3 generate.py add-menu       # 添加新菜单
```

---

## 🎨 设计亮点

- **改一处全站更新**：修改 `skill/references/config.js` 的颜色，所有页面自动同步
- **零依赖音效**：Web Audio API 合成呼噜声/喵叫，无音频文件依赖
- **每周自动重置**：localStorage 统计周一自动清零
- **纯静态部署**：丢到 GitHub Pages / Netlify 直接用，无需构建

---

## 🛠️ 技术栈

- 纯 HTML/CSS/JS（无框架）
- p5.js（猫猫动画）
- Web Audio API（音效合成）
- localStorage（数据持久化）
- Python 3（CLI 管理脚本）

---

*Made with 🐱 by onsanU | Hermes Agent Skill | 2026年7月*
