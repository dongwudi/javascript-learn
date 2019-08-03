function Otaku (name, age) {
  this.name = name;
  this.age = age;

  this.habit = 'Games';
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
  console.log('I am ' + this.name);
}

// var person = new Otaku('Kevin', '18');

// console.log(person.name) // Kevin
// console.log(person.habit) // Games
// console.log(person.strength) // 60

// person.sayYourName(); // I am Kevin

// function objectFactory() {

//   var obj = new Object(),

//   Constructor = [].shift.call(arguments);

//   obj.__proto__ = Constructor.prototype;

//   Constructor.apply(obj, arguments);

//   return obj;

// };

// var person = objectFactory(Otaku, 'Kevin', '18')

// console.log(person.name) // Kevin
// console.log(person.habit) // Games
// console.log(person.strength) // 60

// person.sayYourName(); // I am Kevin


// function Otaku (name, age) {
//   this.strength = 60;
//   this.age = age;

//   return {
//       name: name,
//       habit: 'Games'
//   }
// }

// var person = new Otaku('Kevin', '18');

// console.log(person.name) // Kevin
// console.log(person.habit) // Games
// console.log(person.strength) // undefined
// console.log(person.age) // undefined


// function Otaku (name, age) {
//   this.strength = 60;
//   this.age = age;
//   // this.name = name;

//   return 'handsome boy';
// }

// var person = new Otaku('Kevin', '18');

// console.log(person.name) // undefined
// console.log(person.habit) // undefined
// console.log(person.strength) // 60
// console.log(person.age) // 18

function objectFactory() {

  var obj = new Object(),

  Constructor = [].shift.call(arguments);

  obj.__proto__ = Constructor.prototype;

  var ret = Constructor.apply(obj, arguments);

  return typeof ret === 'object' ? ret : obj;

};