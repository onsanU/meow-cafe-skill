// ═══════════════════════════════════════
//  🐱 AI猫猫陪伴助手 · 全局配置
//  改这里 → 全站自动更新！
// ═══════════════════════════════════════

const CATS_CONFIG = {
  cream: {
    id: 'cream',
    name: '奶油',
    emoji: '🐈',
    emojiFilter: 'hue-rotate(300deg) saturate(0.5) brightness(1.15)',
    desc: '温柔亲人 · 最爱蹭蹭',
    bodyColor: '#F5D5E0',
    earColor: '#E5B5C5',
    innerEarColor: '#FFB3C1',
    eyeColor: '#4A7C59',
    noseColor: '#FFB6C1',
    bellyColor: '#FFF0F3',
    pawPadColor: '#FFCCD5',
    faceColor: '#F5D5E0',
    pageBg: 'linear-gradient(180deg, #fff5f2 0%, #ffe8e8 50%, #ffd8dc 100%)',
    // 监控状态
    monitorMoods: ['😊','😌','😴','🥰'],
    monitorStatuses: ['正在被摸摸','休息中……','蹭蹭模式','打盹中…'],
    // 绘卷
    galleryHaiku: '轻抚即化<br>一团温柔<br>卧于午后窗台',
    galleryJp: 'ふわりとけ<br>やさしさひとつ<br>まどべの猫',
  },
  orange: {
    id: 'orange',
    name: '橘橘',
    emoji: '🐈',
    emojiFilter: '',
    desc: '吃货担当 · 为罐头疯狂',
    bodyColor: '#FF9A56',
    earColor: '#E8773B',
    innerEarColor: '#FF6B6B',
    eyeColor: '#3D6B3D',
    noseColor: '#FF6B6B',
    pageBg: '#fff8f0',
    // 监控状态
    monitorMoods: ['🍊','😋','🤤','😺'],
    monitorStatuses: ['已消灭罐头×'],
    // 绘卷
    galleryHaiku: '第几罐了<br>橘色毛团<br>与落日比赛谁圆',
    galleryJp: 'いくつめか<br>だいだいいろの<br>ゆうひかな',
  },
  black: {
    id: 'black',
    name: '黑黑',
    emoji: '🐈‍⬛',
    emojiFilter: '',
    desc: '高冷神秘 · 深夜守护者',
    bodyColor: '#1C141E',
    earColor: '#1A121C',
    innerEarColor: '#37232D',
    eyeColor: '#FFD700',
    eyeColor2: '#64A0F0',
    noseColor: '#371C20',
    pawColor: '#1A121C',
    faceColor: '#1A121C',
    tailColor: '#1C141E',
    pageBg: '#0a0a16',
    // 梦境配置
    dreams: [
      { name:'颠倒城市', bg:['#1a1030','#2d1b4e','#1a1030'], desc:'城市从天空倒挂下来，黑黑在中间飘过~', type:'city' },
      { name:'天空游鱼', bg:['#0a1628','#0d2848','#0a1628'], desc:'透明的鱼儿在夜空中游弋，穿过星星之间~', type:'fish' },
      { name:'毛线星球', bg:['#2a1520','#3d2030','#2a1520'], desc:'巨大的毛线团像星球一样漂浮，黑黑追着线头转~', type:'yarn' },
    ],
    // 监控状态
    monitorMoods: ['💤','😴','🌙','✨'],
    monitorStatuses: ['梦境深度'],
    // 绘卷
    galleryHaiku: '梦游深处<br>黑色影子<br>踏着星光独行',
    galleryJp: 'ゆめのそこ<br>くろきかげあり<br>ほしをふむ',
  },
  mimi: {
    id: 'mimi',
    name: '咪咪',
    emoji: '😺',
    emojiFilter: '',
    desc: '店长本喵 · 统领全局',
    bodyColor: '#FFF0E1',
    earColor: '#FFF0E1',
    innerEarColor: '#FFC8B4',
    eyeColor: '#B48C50',
    noseColor: '#FF968C',
    bellyColor: '#FFFAF5',
    pawColor: '#FFF5F0',
    faceColor: '#FFFAF5',
    whiskerColor: '#DCC8B4',
    bowColor: '#DC5050',
    bowInner: '#B43C3C',
    pageBg: '#1a1410',
    // 店长台词（{cream} {orange} {black}会被监控数据替换）
    bossLines: [
      '奶油今天被摸了{cream}次，业绩不错喵！',
      '橘橘又吃掉{orange}个罐头……算了开心就好~',
      '黑黑在做第{black}层梦呢，别吵它喵~',
      '一切正常！店长咪咪在此守护！😺',
      '主人来视察啦？报告：全员安好，请指示！',
      '监控显示：全体猫猫都在偷懒……包括本喵~',
      '奶油很受欢迎嘛！继续保持喵~',
      '橘橘！第{orange}个罐头了！……算了当我没说',
      '嘘……黑黑在第{black}层梦境，小声点~',
      '店长日志：今日一切安好，猫均幸福指数99%',
      '主人你看！奶油在蹭蹭、橘橘在吃、黑黑在睡……完美的一天~',
      '作为店长，本喵宣布：今天全员摸鱼合法！',
      '哎？主人怎么到监控室来了……我没有在偷懒哦！',
      '给主人汇报：奶油满意度{cream}分，橘橘饱腹度{orange}分！',
      '黑黑的梦境深度：{black}级——哇，好深！',
    ],
    // 绘卷
    galleryHaiku: '店长一喵<br>统领全局<br>咖啡正暖时分',
    galleryJp: 'てんちょうの<br>ねこのあくびや<br>コーヒーのゆ',
  },
};

// 人气菜单配置
const MENU_CONFIG = [
  { id:'latte', name:'🌸 猫爪拿铁', price:32, emoji:'☕',
    desc:'可爱猫爪拉花 · 治愈满分 · 奶油最爱的拿铁',
    tags:['含咖啡因','热/冰','🐱奶油推荐'], sold:3280, cat:'cream' },
  { id:'tea', name:'🧋 喵喵奶茶', price:28, emoji:'🧋',
    desc:'甜蜜暖饮 · 猫咪杯套 · 橘橘偷喝过的奶茶',
    tags:['含茶','热/冰','🐈橘橘推荐'], sold:5620, cat:'orange' },
  { id:'fish', name:'🐟 小鱼干套餐', price:58, emoji:'🐟',
    desc:'猫咪零食+你的甜点 · 现烤小鱼干×5 · 猫形饼干×3 · 迷你布丁',
    tags:['含海鲜','双人份','🐈‍⬛黑黑推荐'], sold:1890, cat:'black' },
];

// 咖啡馆全局配色
const CAFE_COLORS = {
  primary: '#d4687c',
  secondary: '#f4a460',
  bg: '#fff8f0',
  text: '#4a3728',
  textLight: '#8b6f5e',
  cardBg: '#fff8f0',
  footer: '#b8a090',
  heroGradient: 'linear-gradient(135deg, #ffe0cc 0%, #ffd4e0 40%, #ffe8d6 100%)',
};

// 主页Logo猫猫（跑在Hero里面的）
const LOGO_CATS = [
  { body:'#F5D5E0', ears:'#E5B5C5', nose:'#FFB3C1', name:'奶油' },
  { body:'#FF9A56', ears:'#E8773B', nose:'#FF6B6B', name:'橘橘' },
  { body:'#3D3D3D', ears:'#2A2A2A', nose:'#FFB6C1', name:'黑黑' },
  { body:'#FFF0E1', ears:'#FFC8B4', nose:'#FF6B6B', name:'咪咪' },
  { body:'#D4A574', ears:'#C49A6C', nose:'#FFB6C1', name:'奶茶' },
  { body:'#FEFEFE', ears:'#F0E6E0', nose:'#FFB6C1', name:'白白' },
  { body:'#A0A0A0', ears:'#888888', nose:'#FFB6C1', name:'灰灰' },
  { body:'#E8D5B7', ears:'#D4B896', nose:'#FFB6C1', name:'拿铁' },
];

// 绘卷页面
const GALLERY_CAFE = {
  name: 'Meow Cafe',
  haiku: '猫猫四只<br>咖啡一杯<br>治愈所有疲惫',
  jp: 'ねこよんびき<br>コーヒーいっぱい<br>いやしのじかん',
};
