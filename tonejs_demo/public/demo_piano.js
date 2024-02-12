// 全C调梦中婚礼数字简谱 1-5小节
const high_number = [
  { time: '0:3:1', number: '6.', duration: '8n' },
  { time: '1:0:0', number: '6.', duration: '16n' },
  { time: '1:0:1', number: '7.', duration: '16n' },
  { time: '1:0:2', number: '7.', duration: '16n' },
  { time: '1:0:3', number: '1..', duration: '16n' },
  { time: '1:1:0', number: '1..', duration: '16n' },
  { time: '1:1:1', number: '7.', duration: '16n' },
  { time: '1:1:2', number: '7.', duration: '16n' },
  { time: '1:1:3', number: '6.', duration: '16n' },
  { time: '1:2:0', number: '6.', duration: '16n' },
  { time: '1:2:1', number: '3.', duration: '16n' },
  { time: '1:2:2', number: '3.', duration: '16n' },
  { time: '1:2:3', number: '1.', duration: '16n' },
  { time: '1:3:0', number: '1.', duration: '16n' },
  { time: '1:3:1', number: '6', duration: '16n' },
  { time: '1:3:2', number: '6', duration: '16n' },
  { time: '1:3:3', number: '5.', duration: '16n' },
  { time: '2:0:0', number: '5.', duration: '16n' },
  { time: '2:0:1', number: '4.', duration: '16n' },
  { time: '2:0:2', number: '4.', duration: '16n' },
  { time: '2:0:3', number: '3.', duration: '16n' },
  { time: '2:1:0', number: '4.', duration: '16n' },
  { time: '2:1:1', number: '5.', duration: '16n' },
  { time: '2:1:2', number: '4.', duration: '8n' },
  { time: '2:2:0', number: '4.', duration: '4n' },
  { time: '2:3:1', number: '4.', duration: '8n' },
  { time: '3:0:0', number: '4.', duration: '16n' },
  { time: '3:0:1', number: '5.', duration: '16n' },
  { time: '3:0:2', number: '5.', duration: '16n' },
  { time: '3:0:3', number: '6.', duration: '16n' },
  { time: '3:1:0', number: '6.', duration: '16n' },
  { time: '3:1:1', number: '7.', duration: '16n' },
  { time: '3:1:2', number: '7.', duration: '16n' },
  { time: '3:1:3', number: '5.', duration: '16n' },
  { time: '3:2:0', number: '5.', duration: '8n' },
  { time: '3:2:1', number: '2.', duration: '8n' },
  { time: '3:3:0', number: '2.', duration: '8n' },
  { time: '3:3:1', number: '4.', duration: '8n' },
  { time: '4:0:0', number: '4.', duration: '16n' },
  { time: '4:0:1', number: '3.', duration: '16n' },
  { time: '4:0:2', number: '3.', duration: '16n' },
  { time: '4:0:3', number: '2.', duration: '16n' },
  { time: '4:1:0', number: '3.', duration: '16n' },
  { time: '4:1:1', number: '4.', duration: '16n' },
  { time: '4:1:2', number: '3.', duration: '8n' },
  { time: '4:2:0', number: '3.', duration: '4n' },
];

const low_number = [
  { time: '0:0:0', number: '..6', duration: '8n' },
  { time: '0:0:1', number: '.3', duration: '8n' },
  { time: '0:1:0', number: '1', duration: '8n' },
  { time: '0:1:1', number: '.3', duration: '8n' },
  { time: '0:2:0', number: '1', duration: '8n' },
  { time: '0:2:1', number: '.3', duration: '8n' },
  { time: '0:3:0', number: '1', duration: '8n' },
  { time: '0:3:1', number: '.3', duration: '8n' },
  { time: '1:0:0', number: '..6', duration: '8n' },
  { time: '1:0:1', number: '.3', duration: '8n' },
  { time: '1:1:0', number: '1', duration: '8n' },
  { time: '1:1:1', number: '.3', duration: '8n' },
  { time: '1:2:0', number: '1', duration: '8n' },
  { time: '1:2:1', number: '.3', duration: '8n' },
  { time: '1:3:0', number: '1', duration: '8n' },
  { time: '1:3:1', number: '.3', duration: '8n' },
  { time: '2:0:0', number: '.2', duration: '8n' },
  { time: '2:0:1', number: '.6', duration: '8n' },
  { time: '2:1:0', number: '4', duration: '8n' },
  { time: '2:1:1', number: '.6', duration: '8n' },
  { time: '2:2:0', number: '4', duration: '8n' },
  { time: '2:2:1', number: '.6', duration: '8n' },
  { time: '2:3:0', number: '4', duration: '8n' },
  { time: '2:3:1', number: '.6', duration: '8n' },
  { time: '3:0:0', number: '..5', duration: '8n' },
  { time: '3:0:1', number: '.2', duration: '8n' },
  { time: '3:1:0', number: '.7', duration: '8n' },
  { time: '3:1:1', number: '.2', duration: '8n' },
  { time: '3:2:0', number: '.7', duration: '8n' },
  { time: '3:2:1', number: '.2', duration: '8n' },
  { time: '3:3:0', number: '.7', duration: '8n' },
  { time: '3:3:1', number: '.2', duration: '8n' },
  { time: '4:1:0', number: '1', duration: '4n' },
  { time: '4:2:0', number: '.5', duration: '4n' },
  { time: '4:3:0', number: '3', duration: '4n' },
];

function convertNumberToNote(number) {
  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  if (number === '0' || number.indexOf('0') > -1) {
    return null; // 休止符
  }
  let octave = 4;
  let prefixDots = (number.match(/^\.*(?=\d)/) || [''])[0].length; // 计算数字前面的点的数量
  let suffixDots = (number.match(/(?<=\d)\.*$/) || [''])[0].length; // 计算数字后面的点的数量
  let noteNumber = parseInt(number.replace(/\./g, ''), 10); // 提取数字并转换为整数

  // 数字简谱是从1开始的，而数组索引是从0开始的
  let noteIndex = noteNumber - 1;
  let note = notes[noteIndex % notes.length];
  let noteOctave = octave + Math.floor(noteIndex / notes.length) - prefixDots + suffixDots; // 计算八度
  return note + noteOctave;
}

// 定义一个函数来高亮显示钢琴键
function highlightKey(note, duration, type) {
  const key = document.querySelector(`[data-note="${note}"]`);
  console.log(`key`, key);
  if (key) {
    key.classList.add(`key-active-${type}`);
    // 设置一个定时器来移除高亮，持续时间等于音符的持续时间
    setTimeout(() => {
      key.classList.remove(`key-active-${type}`);
    }, Tone.Time(duration).toMilliseconds());
  }
}

// 假设你有钢琴样本文件，并且已经放在了正确的路径
const pianoSampler = new Tone.Sampler({
  'A2': 'A2v8.mp3',
  'C2': 'C2v8.mp3',
  'D#2': 'Ds2v8.mp3',
  'F#2': 'Fs2v8.mp3',
  'A3': 'A3v8.mp3',
  'C3': 'C3v8.mp3',
  'D#3': 'Ds3v8.mp3',
  'F#3': 'Fs3v8.mp3',
  'A4': 'A4v8.mp3',
  'C4': 'C4v8.mp3',
  'D#4': 'Ds4v8.mp3',
  'F#4': 'Fs4v8.mp3',
  'A5': 'A5v8.mp3',
  'C5': 'C5v8.mp3',
  'D#5': 'Ds5v8.mp3',
  'F#5': 'Fs5v8.mp3',
  'A6': 'A6v8.mp3',
  'C6': 'C6v8.mp3',
  'D#6': 'Ds6v8.mp3',
  'F#6': 'Fs6v8.mp3',
}, {
  release: 1,
  baseUrl: '',
  onload: () => {
    // 样本加载完成后，使播放按钮可用
    document.getElementById('play-button').disabled = false;
  }
}).toDestination();

const lowSampler = new Tone.Sampler({
  'A2': 'A2v8.mp3',
  'C2': 'C2v8.mp3',
  'D#2': 'Ds2v8.mp3',
  'F#2': 'Fs2v8.mp3',
  'A3': 'A3v8.mp3',
  'C3': 'C3v8.mp3',
  'D#3': 'Ds3v8.mp3',
  'F#3': 'Fs3v8.mp3',
  'A4': 'A4v8.mp3',
  'C4': 'C4v8.mp3',
  'D#4': 'Ds4v8.mp3',
  'F#4': 'Fs4v8.mp3',
  'A5': 'A5v8.mp3',
  'C5': 'C5v8.mp3',
  'D#5': 'Ds5v8.mp3',
  'F#5': 'Fs5v8.mp3',
  'A6': 'A6v8.mp3',
  'C6': 'C6v8.mp3',
  'D#6': 'Ds6v8.mp3',
  'F#6': 'Fs6v8.mp3',
}, {
  release: 1,
  baseUrl: '',
  volume: -8, // 降低12分贝
}).toDestination();

// 梦中的婚礼开头的几个音符，以及它们的时间安排
let melody = [
  // { time: '0:3:1', note: 'F5', duration: '8n' },
  // { time: '1:0:0', note: 'F5', duration: '16n' },
  // { time: '1:0:1', note: 'F#5', duration: '16n' },
  // { time: '1:0:2', note: 'F#5', duration: '16n' },
  // { time: '1:0:3', note: 'C6', duration: '16n' },
  // { time: '1:1:0', note: 'C6', duration: '16n' },
  // { time: '1:1:1', note: 'F#5', duration: '16n' },
  // { time: '1:1:2', note: 'F#5', duration: '16n' },
  // { time: '1:1:3', note: 'F5', duration: '16n' },
  // ... 添加更多音符和时间
];
melody = high_number.map(item => ({ time: item.time, duration: item.duration, note: convertNumberToNote(item.number) }))
console.log(`melody`, melody);

// 创建一个 Tone.Part 高音
const melodyPart = new Tone.Part((time, value) => {
  pianoSampler.triggerAttackRelease(value.note, value.duration, time);
  highlightKey(value.note, value.duration, `high`);
}, melody).start(0);

// 低音部分的音符，以及它们的时间安排
let bass = [
  // { time: '0:0:0', note: 'F2', duration: '8n' },
  // { time: '0:0:1', note: 'D3', duration: '8n' },
  // { time: '0:1:0', note: 'C4', duration: '8n' },
  // { time: '0:1:1', note: 'D3', duration: '8n' },
  // { time: '0:2:0', note: 'C4', duration: '8n' },
  // { time: '0:2:1', note: 'D3', duration: '8n' },
  // { time: '0:3:0', note: 'C4', duration: '8n' },
  // { time: '0:3:1', note: 'D3', duration: '8n' },
  // ... 添加更多音符和时间
];

bass = low_number.map(item => ({ time: item.time, duration: item.duration, note: convertNumberToNote(item.number) }))
console.log(`bass`, bass);

// 创建一个 Tone.Part 低音
const bassPart = new Tone.Part((time, value) => {
  lowSampler.triggerAttackRelease(value.note, value.duration, time);
  highlightKey(value.note, value.duration, `low`);
}, bass).start(0);

// 禁用播放按钮，直到样本加载完成
document.getElementById('play-button').disabled = true;

// 添加事件监听器到播放按钮
document.getElementById('play-button').addEventListener('click', async () => {
  // 首次用户交互时启动音频上下文
  await Tone.start();
  console.log('Playback started');
  // 设置播放速度，例如将 BPM 设置为 90
  Tone.Transport.bpm.value = 90;

  // 启动 Tone.Transport 开始调度
  Tone.Transport.start();
});