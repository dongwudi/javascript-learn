// var value = 1;
// function foo(v) {
//     v = 2;
//     console.log(v); //2
// }
// foo(value);
// console.log(value) // 1

// var obj = {
//   value: 1
// };
// function foo(o) {
//   o.value = 2;
//   console.log(o.value); //2
// }
// foo(obj);
// console.log(obj.value) // 2

var obj = {
  value: 1
};
function foo(o) {
  o = 2;
  console.log(o); //2
}
foo(obj);
console.log(obj.value) // 1