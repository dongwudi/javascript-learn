// var value = 1;

// function foo() {
//     console.log(value);
// }

// function bar() {
//     var value = 2;
//     foo();
// }

// bar(); // 1

// var scope = "global scope";
// function checkscope(){
//     var scope = "local scope";
//     function f(){
//         return scope;
//     }
//     return f();
// }
// checkscope(); //local scope
// console.log(checkscope())


var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();// local scope
console.log(checkscope()())