// 创建一个采样器，加载不同音高的钢琴样本
const sampler = new Tone.Sampler({
    'C4': 'C4v8.mp3',
    'D#4': 'Ds4v8.mp3',
    'F#4': 'Fs4v8.mp3',
    'A4': 'A4v8.mp3',
}, {
    release: 1, // 设置释放时间为1秒
    baseUrl: '/', // 设置样本文件的基本路径
    onload: () => {
        // 样本加载完成后，使播放按钮可用
        document.getElementById('play').disabled = false;
    }
}).toDestination();

// 创建一个序列，依次播放音符
const sequence = new Tone.Sequence((time, note) => {
    sampler.triggerAttackRelease(note, '8n', time);
}, ['C4', 'E4', 'G4', 'A4'], '4n');

// 禁用播放按钮，直到样本加载完成
document.getElementById('play').disabled = true;

// 添加事件监听器到播放按钮
document.getElementById('play').addEventListener('click', async () => {
    // 首次用户交互时启动音频上下文
    await Tone.start();
    console.log('Playback started');

    // 启动序列器
    sequence.start();

    // 启动 Tone.js 的 Transport，这是控制时间的全局时钟
    Tone.Transport.start();
});