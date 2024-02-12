// 创建一个简单的合成器
const synth = new Tone.Synth().toDestination();

// 创建一个分析器，用于获取波形数据
const analyser = new Tone.Waveform(1024); // 1024是FFT大小，决定了波形数据的精度
synth.connect(analyser);

// 获取canvas元素，并设置绘图上下文
const canvas = document.getElementById('waveform');
const context = canvas.getContext('2d');

// 定义一个函数来绘制波形
function drawWaveform() {
  // 获取波形数据
  const waveformValues = analyser.getValue();

  // 清除画布
  context.clearRect(0, 0, canvas.width, canvas.height);

  // 绘制波形
  context.beginPath();
  context.lineJoin = 'round';
  context.lineWidth = 2;
  context.strokeStyle = '#00ff00';
  context.moveTo(0, (waveformValues[0] + 1) / 2 * canvas.height);
  for (let i = 1; i < waveformValues.length; i++) {
    const value = waveformValues[i];
    const x = canvas.width * (i / waveformValues.length);
    const y = (value + 1) / 2 * canvas.height; // 将波形值映射到画布高度
    context.lineTo(x, y);
  }
  context.stroke();
}

// 添加事件监听器到播放按钮
document.getElementById('play').addEventListener('click', async () => {
  // 首次用户交互时启动音频上下文
  await Tone.start();
  console.log('Playback started');

  // 播放一个音符
  synth.triggerAttackRelease('C4', '8n');

  // 开始绘制波形
  Tone.Draw.schedule(() => {
    requestAnimationFrame(drawWaveform);
  }, Tone.now());
});