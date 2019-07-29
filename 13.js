function Person() {
  
}

// Person.prototype.name = 'lisi';
// let person1  = new Person();
// let person2  = new Person();
// console.log(person1.name);// lisi
// console.log(person2.name);// lisi

// console.log(person1.__proto__ === Person.prototype);//true
// console.log(Person === Person.prototype.constructor );//true

Person.prototype.name = 'zhangsan';

let person = new Person();
// person.name = 'lisi';

// console.log(person.name);// lisi

// delete person.name;
// console.log(person.name);// 'zhangsan'

// console.log(person.__proto__)

console.log(Object.prototype.__proto__) //null