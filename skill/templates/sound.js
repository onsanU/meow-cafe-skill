// ═══════════════════════════════════════
//  🔊 猫猫音效系统 (Web Audio API合成)
//  无需音频文件，浏览器原生合成！
// ═══════════════════════════════════════

let _audioCtx = null;

function getCtx() {
  if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (_audioCtx.state === 'suspended') _audioCtx.resume();
  return _audioCtx;
}

// 🐱 呼噜声（低频振动模拟猫猫满足咕噜）
function playPurr(duration = 0.5) {
  try {
    let ctx = getCtx();
    let osc = ctx.createOscillator();
    let gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(25, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(30, ctx.currentTime + duration/2);
    osc.frequency.linearRampToValueAtTime(25, ctx.currentTime + duration);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + duration);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(); osc.stop(ctx.currentTime + duration);
  } catch(e) {}
}

// 😺 喵叫声（快速频率扫描）
function playMeow() {
  try {
    let ctx = getCtx();
    let osc = ctx.createOscillator();
    let gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(400, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(600, ctx.currentTime + 0.08);
    osc.frequency.linearRampToValueAtTime(300, ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.25);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(); osc.stop(ctx.currentTime + 0.25);
  } catch(e) {}
}

// ✨ 点击反馈（短促叮咚）
function playClick() {
  try {
    let ctx = getCtx();
    let osc = ctx.createOscillator();
    let gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.setValueAtTime(1100, ctx.currentTime + 0.03);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.08);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(); osc.stop(ctx.currentTime + 0.08);
  } catch(e) {}
}

// 🍊 得分音效（上升音阶）
function playScore() {
  try {
    let ctx = getCtx();
    let osc = ctx.createOscillator();
    let gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523, ctx.currentTime);
    osc.frequency.setValueAtTime(659, ctx.currentTime + 0.06);
    osc.frequency.setValueAtTime(784, ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.2);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(); osc.stop(ctx.currentTime + 0.2);
  } catch(e) {}
}

// 💤 梦境切换（柔和风铃）
function playDream() {
  try {
    let ctx = getCtx();
    let notes = [523, 659, 784, 1047];
    notes.forEach((freq, i) => {
      let osc = ctx.createOscillator();
      let gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1);
      gain.gain.setValueAtTime(0.06, ctx.currentTime + i * 0.1);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + i * 0.1 + 0.3);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.1);
      osc.stop(ctx.currentTime + i * 0.1 + 0.3);
    });
  } catch(e) {}
}

// 🛒 购物车添加（清脆叮）
function playCart() {
  playClick();
}

// 🎉 结算成功
function playSuccess() {
  try {
    let ctx = getCtx();
    [523,659,784,1047].forEach((f,i)=>{
      let o=ctx.createOscillator(),g=ctx.createGain();
      o.type='triangle';o.frequency.setValueAtTime(f,ctx.currentTime+i*0.12);
      g.gain.setValueAtTime(0.08,ctx.currentTime+i*0.12);
      g.gain.linearRampToValueAtTime(0,ctx.currentTime+i*0.12+0.2);
      o.connect(g);g.connect(ctx.destination);
      o.start(ctx.currentTime+i*0.12);o.stop(ctx.currentTime+i*0.12+0.2);
    });
  } catch(e) {}
}
