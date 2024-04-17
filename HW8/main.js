// const animal = { 
//     isLive: true,
//     hasHead: true,
// };

// const dog =  {
//     name: "Sharik",
//     isTail: true,
// }

// dog.__proto__ = animal;

// const human =  {
//     name: "Denis",
//     isTail: false,
// }

// console.log(dog.hasHead);
// console.log(dog.isLive);

// function CreateUser(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHi = function() {
//         console.log("My name is: " + this.name);
//     }
// }

// let firstUser = new CreateUser('Mac', 44);
// let secondUser = new CreateUser('Ivan', 22);
// firstUser.sayHi()
// secondUser.sayHi()

// function CreatePostcard(from, to) {
//     this.from = from;
//     this.to = to;
//     this.show = function() {
//         return `From: ${this.from}, To: ${this.to}`;
//     }
// }

// CreatePostcard.prototype.newFrom = function(newFrom) {
//     this.from = newFrom;
// }

// let postCard =  new CreatePostcard('Pasha', 'Anna');
// postCard.show();
// postCard.newFrom('Petr');


// class Animal {
//     constructor(name) {
//         this.name = name;
//         this.isLive = true;
//     }
//     sayName() {
//         console.log("Animal: ", this.name)
//     }
// }

// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//         this.isTail = true;
//     }
//     sayHi() {
//         console.log("Gav");
//     }
// }

// const dog = new Dog("Menas");
// console.log(dog);
// dog.sayHi();
// dog.sayName();

// class User {
//     get name() {
//         return this._name + " user"
//     }
//     set name(value) {
//      value.length < 5 
//      ? console.log("Too short name") 
//      : (this._name = value)
//     }
// }

// const user = new User();

// user.name = "A";

// console.log(user);


class People {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getFullName() {
        console.log(`${this.name} ${this.surname}`)
    }
}

class Worker extends People {
    constructor(name, surname, rate, day) {
        super(name, surname);
        this.rate = rate;
        this.day = day;
    }
    getSalary() {
        console.log(this.rate * this.day);
    }
}

const worker = new Worker("Denis", "Abramov", 5000, 22);
worker.getSalary();