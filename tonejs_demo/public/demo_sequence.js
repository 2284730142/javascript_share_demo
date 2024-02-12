//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

synth.oscillator.type = 'sine'; // 设置振荡器类型为正弦波
synth.envelope.attack = 0.5;    // 设置包络的攻击时间

const note = 'C4';

// Tone.js 使用Transport来处理时间，这里我们安排在下一个整拍播放音符
// Tone.Transport.scheduleOnce((time) => {
//     // 使用时间参数确保精确的调度
//     synth.triggerAttackRelease(note, '8n', time);
// }, '0:0:1');

// 创建一个序列器，传入一个回调函数和一个音符数组
const seq = new Tone.Sequence((time, note) => {
    synth.triggerAttackRelease(note, '8n', time);
}, ['C4', 'E4', 'G4', 'A4'], '4n');

// 启动序列器
seq.start(0);

// 设置循环
seq.loop = true;

// get the button
const button = document.getElementById("play");

button.addEventListener("click", async() => {
    // 这里调用Tone.start()来启动音频
    await Tone.start();
    console.log('Audio is ready');
    Tone.Transport.start();
});