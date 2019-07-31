// var scope = "global scope";
// function checkscope(){
//     var scope = "local scope";
//     function f(){
//         return scope;
//     }
//     return f;
// }

// var foo = checkscope();
// foo();
// console.log(foo()) //local scope

var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = function () {
    console.log(i);
  };
}

console.log(data[0]());
console.log(data[1]());
console.log(data[2]());