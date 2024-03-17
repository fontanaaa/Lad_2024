// Работа с if-else

// 1
const a = 1;

a === 1 ? console.log("Верно") : console.log("Неверно");

// 2 
// const a = 1;

// a > 0 ? console.log("Верно") : console.log("Неверно");

// 3 
// const a = -3;

// a < 0 ? console.log("Верно") : console.log("Неверно");

// 4
// const a = -3;

// a >= 0 ? console.log("Верно") : console.log("Неверно");

// 5
// const a = -3;

// a <= 0 ? console.log("Верно") : console.log("Неверно");

// 6
// const a = 0;

// a === 0 ? console.log("Верно") : console.log("Неверно");

// 7
// const a = "test";

// a === "test" ? console.log("Верно") : console.log("Неверно");

// 8
// const a = "1";
// a === "1" ? console.log("Верно") : console.log("Неверно");


// Работа с логическими переменными

// 1
// const test = false;

// test === true ? console.log("Верно") : console.log("Неверно");

// if(test === true) {
//     console.log("Верно")
// } else {
//     console.log("Неверно")
// };

// 2 
// const test = false;

// test === true ? console.log("Неверно") : console.log("Верно");

// if(test === true) {
//     console.log("Неверно")
// } else {
//     console.log("Верно")
// };


// Работа с && (и) и || (или)

// 1
// const a = 2;

// a > 0 && a < 5 ? console.log("Верно") : console.log("Неверно");

// 2
//const a = 2;

//a === 2 || a === 0 ? console.log("Результат:", a + 7) : console.log("Результат:", a / 10);


// 3
// const a = 3;
// const b = 5;

// a <= 1 && b >= 3 ? console.log(a + b) : console.log(a - b);


// 4
// const a = 5;
// const b = 7;

// a > 2 && a < 11 || b >= 6 && b <= 14 ? console.log("Верно") : console.log("Неверно");

// На switch-case

//1 
// const num = 5;
// let result;

// switch(num) {
//     case 1: 
//     result = "зима";
//     console.log(result);
//     break;
//     case 2: 
//     result = "весна";
//     console.log(result);
//     break;
//     case 3: 
//     result = "лето";
//     console.log(result);
//     break;
//     case 4: 
//     result = "осень";
//     console.log(result);
//     break;
// default:
//     console.log("Введите значение от 1 до 4");
// };

// Общие задачи

//1 
// const day = 51;

// if (day >= 1 && day <= 10) {
//     console.log("1 декада")
// } else if(day >= 11 && day <= 20) {
//     console.log("2 декада")
// } else if (day >= 21 && day <= 31) {
//     console.log("3 декада")
// } else {
//     console.log("В месяце не больше 31 дня")
// };

// Циклы while и for

// 1 
// let i = 0;

// while (i < 100) {
//     i++;
//     console.log(i);
// }

// for (let i = 1; i <= 100; i++) {
//     console.log(i)
// }

// 2
// let i = 10;

// while (i < 33) {
//     i++;
//     console.log(i);
// }

// for (let i = 11; i <= 33; i++) {
//     console.log(i);
// }

//3

// let i = 0;

// while (i < 100) {
//     i++;
//     if(i % 2 === 0) {
//         console.log(i)
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if(i % 2 != 0) continue;
//     console.log(i);
// }


//4
// let res = 0;
// let i = 0;

// while (i < 100) {
//     i++;
//     res = res + i;
// }
// console.log(res);


// let res = 0;

// for (let i = 0; i <= 100; i ++) {
//     res +=i;
// }
// console.log(res);










