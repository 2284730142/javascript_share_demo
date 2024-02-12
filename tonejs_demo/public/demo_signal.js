// 创建一个简单的合成器
const synth = new Tone.Synth().toDestination();

// 创建一个低通滤波器
const filter = new Tone.Filter({
  type: 'lowpass', // 滤波器类型
  frequency: 1500,  // 截止频率
}).toDestination();

// 创建一个立体声平移器
const panner = new Tone.Panner({
  pan: 0, // 初始平移位置，-1是完全左边，1是完全右边
}).toDestination();

// 将合成器的输出首先连接到滤波器，然后连接到立体声平移器
synth.chain(filter, panner);

// 添加事件监听器到播放按钮
document.getElementById('play').addEventListener('click', async () => {
  // 首次用户交互时启动音频上下文
  await Tone.start();
  console.log('Playback started');

  // 播放一个音符
  synth.triggerAttackRelease('C4', '8n');
  
  // 在播放时改变滤波器的截止频率和立体声平移位置
  filter.frequency.rampTo(500, 1); // 1秒内截止频率降到500Hz
  panner.pan.rampTo(1, 2); // 2秒内平移到完全右边
});