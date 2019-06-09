// console.log( typeof 'str')
// console.log( typeof 1)
// console.log( typeof true)
// console.log( typeof null)
// console.log( typeof undefined)
// console.log( typeof Symbol(''))
// console.log( typeof function(){})
// console.log( typeof [])
// console.log( typeof {})
// console.log( typeof /a/)

// string
// number
// boolean
// object
// undefined
// symbol
// function
// object
// object
// object

console.log( 1 instanceof Number) //false instanceof 只能用于引用类型
console.log( [] instanceof Array) //true
console.log( function(){} instanceof Object) //true
console.log( function(){} instanceof Function) //true
console.log( {} instanceof Object) //true
console.log( /a/ instanceof RegExp) //true


