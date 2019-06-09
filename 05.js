// var a = 4;
// var b = 4;
// var c = 1;
// var d = true;
// console.log(a === b); //true
// console.log(c == d); //true 隐式类型转换后进行比较

var a1 = 5;
var a2 = a1;
console.log(a2);
a2++;
console.log(a2);
console.log(a1);

// var x1 = {
//     age: 18
// };
// var x2 = {
//     age: 18
// };
// var x3 = x2;
// console.log(x1 === x2); //false
// console.log(x2 === x3); //true

var x3 = {
    age: 18
};
var x4 = x3;
x4.age = 19;
console.log(x4.age);//19
console.log(x3.age);//19