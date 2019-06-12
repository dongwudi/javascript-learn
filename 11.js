// var arr = [1,2,3,4];
// arr.push(5); 
// console.log(arr); //[1, 2, 3, 4, 5]
// arr.push(6,7);
// console.log(arr); //[1, 2, 3, 4, 5, 6, 7]
// arr.unshift(0);
// console.log(arr); //[0, 1, 2, 3, 4, 5, 6, 7]
// arr.splice(2,0,9);
// console.log(arr); //[0, 1, 9, 2, 3, 4, 5, 6, 7]
// arr.splice(2,1,0);
// console.log(arr); //[0, 1, 0, 2, 3, 4, 5, 6, 7]

// const array = [ 1, 2, 3, 4, 5, 6, 7, 8 ]
// const evenNumbers = array.filter(function(x) {
//   return x % 2 == 0
// })

// console.log(evenNumbers) //=> [2, 4, 6, 8]

// const array = [1, 2, 3, 10, 4, 5]

// array.splice(3, 1)

// console.log(array) //=> [1, 2, 3, 4, 5]

// const arr = [1,2,3,4,6,8];
// arr.forEach((v,i) => {
//     console.log(v) // 1 2 3 4 6 8
// })

// const arr = ['jad','tom','a','b','tom',18 ,9];
// console.log(arr.find((v) => {
//     return v > 10
// }))

// const arr = ['jad','tom','a','b','tom',18 ,9];
// const new_arr = arr.map((v) => {
//     return v + 2;
// })
// console.log(new_arr) //["jad2", "tom2", "a2", "b2", "tom2", 20, 11]

const array = [ 1, 2, 3, 4 ]

const sumResult = array.reduce(function(left, right) {
  return left + right
})

console.log(sumResult) //=> 10