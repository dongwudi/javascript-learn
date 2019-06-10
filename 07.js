// var color = 'red';
// console.log(color); //red
// function changecolor() {
//     var name = 'joke';
//     console.log(name); //joke
//     color = 'blue';
//     console.log(color); //blue
// }
// changecolor();
// console.log(color) //blue

// test();

// function test() {
//     console.log('hah')
// }

// console.log(a) //f a() {}
// var a = '1';
// function a () {
//     console.log('a')
// }
// console.log(a) //1

var b = 1;
function a(b) {
    console.log(b) //undefined
    b = 2;
    console.log(b) //2
}
a();
console.log(b) //1