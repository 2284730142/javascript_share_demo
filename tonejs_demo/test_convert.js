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

console.log(convertNumberToNote('1..'));
console.log(convertNumberToNote('.1'));
console.log(convertNumberToNote('..6'));
console.log(convertNumberToNote('1'));
console.log(convertNumberToNote('.3'));
