//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

// 创建多个效果器
const delay = new Tone.FeedbackDelay("8n", 0.5).toDestination();
const distortion = new Tone.Distortion(0.8).toDestination();

// 将合成器连接到效果器，然后连接到主输出
synth.chain(distortion, delay);

// 播放一个音符
synth.triggerAttackRelease('C4', '8n');

// get the button
const button = document.getElementById("play");

button.addEventListener("click", async() => {
    // 这里调用Tone.start()来启动音频
    await Tone.start();
    console.log('Audio is ready');
    Tone.Transport.start();
});