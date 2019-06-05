// 使用字符串方法不会改变一个字符串
var bar = "baz";
console.log(bar);  // baz
bar.toUpperCase();
console.log(bar);  // baz

// 赋值行为可以给基本类型一个新值，而不是改变它
bar = bar.toUpperCase();       // BAZ
console.log(bar);

console.log(typeof 'this is string')
console.log(typeof 1)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof Symbol('sy'))
// string
// number
// boolean
// undefined
// object
// symbol

