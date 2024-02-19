// 数组操作
const _ = require('lodash');

// 1.分割
const arr1 = ['a', 'b', 'c', 'd', 'e'];
const result1 = _.chunk(arr1, 3);
console.log('分割：', result1); // [['a', 'b', 'c'], ['d', 'e']]

// 2.去除falsy值
const arr2 = ['a', 0, '', null, undefined, NaN, 'b'];
const result2 = _.compact(arr2);
console.log('去除falsy值：', result2); // ['a', 'b']

// 3.数组合并
const arr3_1 = ['a', 'b'];
const arr3_2 = ['c', 'd'];
const result3 = _.concat(arr3_1, arr3_2, 'e');
console.log('数组合并：', result3); // ['a', 'b', 'c', 'd', 'e']

// 4.返回差异
const arr4_1 = [1, 2, 3];
const arr4_2 = [2, 3, 4];
const result4 = _.difference(arr4_1, arr4_2);
console.log('返回差异：', result4); // [1]

// 5.删除指定数组的前几个元素
const arr5 = [1, 2, 3, 4, 5];
const result5 = _.drop(arr5, 2);
console.log('删除指定数组的前几个元素：', result5); // [3, 4, 5]

// 6.删除指定数组的后几个元素
const arr6 = [1, 2, 3, 4, 5];
const result6 = _.dropRight(arr6, 2);
console.log('删除指定数组的后几个元素：', result6); // [1, 2, 3]

// 7.用指定的值填充数组
const arr7 = [1, 2, 3, 4, 5];
const result7 = _.fill(arr7, '*', 1, 4);
console.log('用指定的值填充数组：', result7); // [1, '*', '*', '*', 5]

// 8.返回符合指定条件的元素的索引值，如果没有找到则返回 -1
const arr8 = [
    { name: 'Miya', age: 18 },
    { name: 'Lex', age: 20 },
    { name: 'Dio', age: 22 }
];
const result8 = _.findIndex(arr8, { age: 20 });
console.log('返回符合指定条件的元素的索引值，如果没有找到则返回 -1：', result8); // 1

// 9.返回两个或多个数组之间的交集
const arr9_1 = ['a', 'b'];
const arr9_2 = ['b', 'c'];
const arr9_3 = ['b', 'd'];
const result9 = _.intersection(arr9_1, arr9_2, arr9_3);
console.log('返回两个或多个数组之间的交集：', result9); // ['b']