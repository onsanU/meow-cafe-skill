#!/usr/bin/env python3
"""
🐱 AI猫猫陪伴助手 · 一键生成脚本
用法：
  python3 generate.py list              # 列出当前所有猫猫
  python3 generate.py add-cat           # 交互式添加新猫猫
  python3 generate.py add-menu          # 交互式添加新菜单项
  python3 generate.py export-config     # 导出config为JSON
"""

import json
import re
import os
import sys

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
CONFIG_PATH = os.path.join(SCRIPT_DIR, '..', 'references', 'config.js')

def load_config():
    """从config.js中提取CATS_CONFIG和MENU_CONFIG"""
    with open(CONFIG_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 提取CATS_CONFIG
    match = re.search(r'const CATS_CONFIG = ({.*?^});', content, re.DOTALL | re.MULTILINE)
    cats = {}
    if match:
        # 简单解析——找每个猫的id
        for cat_match in re.finditer(r"(\w+):\s*\{[^}]+\}", match.group(1)):
            pass  # JS对象嵌套太复杂，用更简单的方式
    
    return content

def list_cats():
    """列出config.js中的所有猫猫"""
    with open(CONFIG_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 提取猫猫名称
    cats = re.findall(r"(\w+):\s*\{\s*id:\s*'(\w+)',\s*name:\s*'([^']+)'", content)
    
    print("\n🐱 当前猫猫列表：")
    print("═" * 50)
    for key, cat_id, name in cats:
        # 找emoji
        emoji_match = re.search(rf"{key}:\s*\{{.*?emoji:\s*'([^']+)'", content, re.DOTALL)
        emoji = emoji_match.group(1) if emoji_match else '?'
        desc_match = re.search(rf"{key}:\s*\{{.*?desc:\s*'([^']+)'", content, re.DOTALL)
        desc = desc_match.group(1) if desc_match else ''
        print(f"  {emoji} {name} ({key}) — {desc}")
    print("═" * 50)
    
    # 菜单
    menu_items = re.findall(r"name:\s*'([^']+)'.*?price:\s*(\d+)", content)
    if menu_items:
        print("\n🍽️ 当前菜单：")
        for name, price in menu_items:
            print(f"  {name} — ¥{price}")


def add_cat():
    """交互式添加新猫猫到config.js"""
    print("\n🐱 添加新猫猫")
    print("═" * 30)
    
    cat_id = input("  ID (英文，如 huahua): ").strip()
    name = input("  名字 (如 花花): ").strip()
    emoji = input("  Emoji (如 🐈): ").strip()
    desc = input("  描述: ").strip()
    body_color = input("  身体颜色 (如 #F5D5E0): ").strip()
    ear_color = input("  耳朵颜色 (如 #E5B5C5): ").strip()
    eye_color = input("  眼睛颜色 (如 #4A7C59): ").strip()
    
    if not all([cat_id, name, body_color]):
        print("❌ 必填项不能为空！")
        return
    
    # 生成新猫猫配置块
    new_cat = f"""  {cat_id}: {{
    id: '{cat_id}',
    name: '{name}',
    emoji: '{emoji or '🐈'}',
    emojiFilter: '',
    desc: '{desc or '新来的猫猫~'}',
    bodyColor: '{body_color}',
    earColor: '{ear_color or body_color}',
    innerEarColor: '#FFB3C1',
    eyeColor: '{eye_color or '#4A7C59'}',
    noseColor: '#FFB6C1',
    monitorMoods: ['😊','😌'],
    monitorStatuses: ['悠闲中……'],
    galleryHaiku: '新来的猫<br>好奇张望<br>咖啡香气中',
    galleryJp: 'あたらしい<br>ねこがきたよ<br>コーヒーかぐ',
  }},
"""
    
    # 追加到config.js（在最后一个猫配置后）
    with open(CONFIG_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 找到最后一个猫配置的结束位置 (}, 后面跟着换行和})
    insert_marker = "  },\n};\n"
    if insert_marker not in content:
        print("❌ 无法定位config.js中的插入位置，请手动添加。")
        print("\n📋 请将以下内容添加到 CATS_CONFIG 中：")
        print(new_cat)
        return
    
    new_content = content.replace(insert_marker, new_cat + insert_marker)
    
    with open(CONFIG_PATH, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"\n✅ 猫猫 '{name}' 已添加到 config.js！")
    print(f"💡 要生成 '{name}' 的专属页面，复制 cream.html 并替换颜色引用即可。")


def add_menu():
    """交互式添加新菜单项"""
    print("\n🍽️ 添加新菜单项")
    print("═" * 30)
    
    mid = input("  ID (英文): ").strip()
    name = input("  名称 (如 🍰 猫猫蛋糕): ").strip()
    price = input("  价格 (数字): ").strip()
    desc = input("  描述: ").strip()
    
    if not all([mid, name, price]):
        print("❌ 必填项不能为空！")
        return
    
    new_item = f"""  {{ id:'{mid}', name:'{name}', price:{price}, emoji:'🍰',
    desc:'{desc}',
    tags:['新品'], sold:0, cat:'cream' }},
"""
    
    with open(CONFIG_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
    
    insert_marker = "];\n\n// 咖啡馆全局配色"
    if insert_marker not in content:
        print("❌ 无法定位插入位置，请手动添加。")
        print(new_item)
        return
    
    new_content = content.replace(insert_marker, new_item + insert_marker)
    
    with open(CONFIG_PATH, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"\n✅ 菜单项 '{name}' 已添加！刷新menu.html即可看到。")


def export_config():
    """导出config为可读JSON"""
    print("\n📋 config.js 数据摘要：")
    with open(CONFIG_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 提取猫猫数量
    cat_count = len(re.findall(r"id:\s*'(\w+)'", content)) // 2  # 每个猫有2个id字段
    menu_count = len(re.findall(r"price:\s*(\d+)", content))
    
    print(f"  🐱 猫猫: {cat_count} 只")
    print(f"  🍽️ 菜单: {menu_count} 项")
    print(f"  📏 config.js 大小: {len(content)} 字符")
    print(f"  📁 位置: {CONFIG_PATH}")


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        return
    
    cmd = sys.argv[1]
    
    if cmd == 'list':
        list_cats()
    elif cmd == 'add-cat':
        add_cat()
    elif cmd == 'add-menu':
        add_menu()
    elif cmd == 'export-config':
        export_config()
    else:
        print(f"❌ 未知命令: {cmd}")
        print(__doc__)


if __name__ == '__main__':
    main()
