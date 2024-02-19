// 对象操作
const _ = require('lodash');

// 1.合并多个对象，返回新对象
const obj1_1 = { a: 1 };
const obj1_2 = { b: 2, c: 3 };
const result1 = _.assign(obj1_1, obj1_2);
console.log('合并多个对象，返回新对象：', result1); // { a: 1, b: 2, c: 3 }

// 2.复制一个对象或数组，并返回一个新的对象或数组
const obj2 = { name: 'Dio', age: 18 };
const result2 = _.clone(obj2);
console.log('复制一个对象或数组，并返回一个新的对象或数组：', result2); // { name: 'Dio', age: 18 }

// 3.判断一个对象是否包含指定的属性
const obj3 = { name: 'Nancy', age: 18 };
const result3 = _.has(obj3, 'age');
console.log('判断一个对象是否包含指定的属性：', result3); // true

// 4.返回一个对象所有的属性名组成的数组
const obj4 = { name: 'Lex', age: 18 };
const result4 = _.keys(obj4);
console.log('返回一个对象所有的属性名组成的数组：', result4); // ['name', 'age']

// 5.将一个对象的属性名进行修改，并返回一个新的对象
const obj5 = { name: 'Dio', age: 18 };
const result5 = _.mapKeys(obj5, (value, key) => {
  return key.toUpperCase();
});
console.log('将一个对象的属性名进行修改，并返回一个新的对象：', result5); // { NAME: 'Dio', AGE: 18 }

// 6.删除一个对象中指定的属性，并返回一个新的对象
const obj6 = { name: 'Dio', age: 18 };
const result6 = _.omit(obj6, 'age');
console.log('删除一个对象中指定的属性，并返回一个新的对象：', result6); // { name: 'Dio' }

// 7.选择一个对象中的指定属性，并返回一个新的对象
const obj7 = { name: 'Dio', age: 18 };
const result7 = _.pick(obj7, 'name');
console.log('选择一个对象中的指定属性，并返回一个新的对象：', result7); // { name: 'Dio' }