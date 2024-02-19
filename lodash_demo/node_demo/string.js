// 字符操作
const _ = require('lodash');

// 1.首位转大写
const str1 = 'lodash';
const result1 = _.capitalize(str1);
console.log('首位转大写：', result1); // 'Lodash'

// 2.复制字符串
const str2 = 'lodash';
const result2 = _.repeat(str2, 3);
console.log('复制字符串：', result2); // 'lodashlodashlodash'

// 3.每个单词首字母大写
const str3 = 'hello world';
const result3 = _.startCase(str3);
console.log('每个单词首字母大写：', result3); // 'Hello World'

// 4.去除字符串两端的空格
const str4 = '   lodash   ';
const result4 = _.trim(str4);
console.log('去除字符串两端的空格：', result4); // 'lodash'
