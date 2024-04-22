// Home work 8

// 1

// class Worker {
//     constructor(name, surname, rate, days) {
//         this.name = name,
//         this.surname = surname,
//         this.rate = rate;
//         this.days= days;
//     }
//     getSalary() {
//         console.log(this.rate * this.days);
//     }
//     getFullName() {
//         console.log(`${this.name} ${this.surname}`)
//     }
// }

// const worker = new Worker("Denis", "Abramov", 5000, 22);
// worker.getFullName();

// 2

// class Worker {
//     constructor(name, surname, rate, days) {
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days= days;
//     }
//     getSalary() {
//         console.log(this.rate * this.days);
//     }
//     getFullName() {
//         console.log(`${this.name} ${this.surname}`)
//     }
// }

// const worker = new Worker("Denis", "Abramov", 5000, 22);
// // worker.getFullName();

// class Boss extends Worker {
//     constructor(name, surname, rate, days, workers) {
//         super(name, surname, rate, days);
//         this.workers = workers;
//     }
//     getSalary() {
//         console.log(this.rate * this.days * this.workers);
//     }
// }

// const boss = new Boss ("Denis", "Abramov", 5000, 22, 10);
// boss.getSalary();

// 3

// class Worker {
//     constructor(name, surname, rate, days) {
//         this.name = name;
//         this.surname = surname;
//         this._rate = rate;
//         this._days= days;
//     }
//     get rate() {
//         return this._rate;
//     }
//     set rate(newRate) {
//         this._rate = newRate;
//     }
//     get days() {
//         return this._days;
//     }
//     set days(newDays) {
//         this._days = newDays;
//     }
//     getSalary() {
//         console.log(this.rate * this.days);
//     }
//     getFullName() {
//         console.log(`${this.name} ${this.surname}`)
//     }
// }

// const worker = new Worker("Denis", "Abramov", 5000, 22);
// console.log(worker.rate);
// worker.rate = 10000;
// console.log(worker.rate);


// 4

// class MyString {
//     constructor(string) {
//         this.string = string;
//     }
//     reverse(){
//         console.log(this.string.split(" ").reverse().join(" "));
//     };
//     ucFirst(){
//         console.log(this.string.charAt(0).toUpperCase() + this.string.slice(1));
//     };
//     ucWords(){
//         console.log(this.string.split(/\s+/).map((chr) => this.ucFirst()).join(" "));
//     }
// }

// const string = new MyString("string is this");
// string.reverse();
// string.ucFirst();
// string.ucWords();

// 5

// class Validator {
//     constructor() {
//         this.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         this.domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         this.dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
//         this.phoneRegex = /^\+?\d{1,3}[\s-]?\(?\d{2,3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
//     }
//     isEmail(email){
//         return this.emailRegex.test(email);
//     };
//     isDomain(domain){
//         return this.domainRegex.test(domain);
//     };

//     isDate(date){
//         return this.dateRegex.test(date);
//     };
//     isPhone(phone){
//         return this.phoneRegex.test(phone);
//     };
// }

// const validator = new Validator();
// console.log(validator.isEmail("test@test.com")); 
// console.log(validator.isDomain("test.com")); 
// console.log(validator.isDate("16.04.2024")); 
// console.log(validator.isPhone("+7 (999) 123-1234")); 

// 6

// class User {
//     constructor(name,surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     getFullName() {
//         console.log(`${this.name} ${this.surname}`)
//     }
// }

// class Student extends User {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }
//     getCourse() {
//         const currentYear = new Date().getFullYear();
//         const course = currentYear - this.year + 1;
//         return Math.max(1, Math.min(5, course));
//     }
// }

// const student = new Student("Denis", "Abramov", 2022);
// student.getFullName();
// console.log(student.getCourse()); 