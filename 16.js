// console.log(this); //Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

// console.log(this instanceof Object); // true

// // 都能生效
// console.log(Math.random()); 
// console.log(this.Math.random());

// var a = 1;
// console.log(this.a);

// var a = 1;
// console.log(window.a);

// this.window.b = 2;
// console.log(this.b);

// function foo(a) {
//   var b = 2;
//   function c() {}
//   var d = function() {};

//   b = 3;

// }

// foo(1);

// function foo(a) {
//   console.log(a) // 1
//   var b = 2;
//   function c() {}
//   var d = function() {};

//   b = 3;

//   var a = 2; // 如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性 ==> a = 2
//   console.log(a) // 2

// }

// foo(1);



// function foo() {
//   console.log(a); 
//   a = 1;
// }

// foo(); // Uncaught ReferenceError: a is not defined

// function bar() {
//   a = 1;
//   console.log(a);
// }
// bar(); // 1

console.log(foo);

var foo = 1;

console.log(foo);

function foo(){
    console.log("foo");
}
