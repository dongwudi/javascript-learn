// function foo(name, age, sex) {
//   console.log(arguments);
// }

// foo('name', 'age', 'sex')


var sum = function(n){
  if (n <= 1) return 1;
  else return n+arguments.callee(n - 1)
}

console.log(sum(3)) // 6