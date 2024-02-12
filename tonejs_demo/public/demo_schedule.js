// 创建一个简单的合成器
const synth = new Tone.Synth().toDestination();

// 添加事件监听器到播放按钮
document.getElementById('play').addEventListener('click', async () => {
  // 首次用户交互时启动音频上下文
  await Tone.start();
  console.log('Playback started');

  // 使用 Tone.Transport 安排事件
  // 在未来的0秒、1秒、2秒处播放不同的音符
  Tone.Transport.schedule(time => {
    synth.triggerAttackRelease('C4', '8n', time);
  }, 0);

  Tone.Transport.schedule(time => {
    synth.triggerAttackRelease('E4', '8n', time);
  }, '1:0'); // "1:0" 表示第1小节的开始，等同于1秒

  Tone.Transport.schedule(time => {
    synth.triggerAttackRelease('G4', '8n', time);
  }, '2:0'); // "2:0" 表示第2小节的开始，等同于2秒

  // 启动 Tone.Transport 开始调度
  Tone.Transport.start();
});