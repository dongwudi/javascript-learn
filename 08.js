var cat = {
    name: 'jad',
    age: 18
}

console.log('name' in cat) //true
console.log('toString' in cat) // true
console.log('a' in cat) //false

console.log(cat.hasOwnProperty('name')) //true
console.log(cat.hasOwnProperty('toString')) //false

var cat2 = new Object();
cat2.name = 'tom';
cat2.age = 19;

var cat3 = Object.create({
    name: 'joke',
    age: 14
})

var cat4 = Object.create({})

var cat5 = Object.create(null)

console.log(cat)
console.log(cat2)

console.log('name' in cat)
console.log('a' in cat)

for(var key in cat) {
    console.log(key)
}// name age

console.log(Object.keys(cat)) //["name", "age"]

console.log(Object.getOwnPropertyNames(cat)) // ["name", "age"]
