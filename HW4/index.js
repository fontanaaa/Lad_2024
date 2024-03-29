// Functions 

// 1

// function squareNumber(n) {
//     return n ** 2;
// }
// console.log(squareNumber(5));

// const squareNumber = function(n) {
//     return n ** 2;
// }
// console.log(squareNumber(4));

// const squareNumber = (n) => {
//     return n ** 2;
// }
// console.log(squareNumber(8));

// 2

// function summary(a, b = 0) {
//     return  a + b;
// }
// console.log(summary(4, 5));

// const summary = function(a, b = 0) {
//     return a + b;
// }
// console.log(summary(5));

// const summary = (a, b = 0) => {
//     return a + b;
// }
// console.log(summary(7, 7));

// 3

// function math(a, b = 0, c = 0) {
//     return (a - b) / c;
// }
// console.log(math(4, 2, 5));

// const math = function(a, b = 0, c = 0) {
//     return (a - b) / c;
// }
// console.log(math(4, 5, 6));

// const math = (a, b = 0, c = 0) => {
//     return (a - b) / c;
// }
// console.log(math(4, 5, 6));

// 4

function dayOfWeek(day) {
    switch(day) {
        case 1:
            return ('Понедельник')
        case 2:
            return ('Вторник')
        case 3:
            return ('Cреда')
        case 4:
            return ('Четверг')
        case 5:
            return ('Пятница')
        case 6:
            return ('Суббота')
        case 7:
            return ('Воскресенье')
        default:
            return ('Введите значение от 1 до 7')
    }
}
console.log(dayOfWeek(1));

// const dayOfWeek = function(day) {
//     switch(day) {
//         case 1:
//             console.log('Понедельник')
//             break
//         case 2:
//             console.log('Вторник')
//             break
//         case 3:
//             console.log('Cреда')
//             break
//         case 4:
//             console.log('Четверг')
//             break
//         case 5:
//             console.log('Пятница')
//             break
//         case 6:
//             console.log('Суббота')
//             break
//         case 7:
//             console.log('Воскресенье')
//             break
//         default:
//             console.log('Введите значение от 1 до 7')
//             break
//     }
// }
// dayOfWeek(2);

// const dayOfWeek = (day) => {
//     switch(day) {
//         case 1:
//             console.log('Понедельник')
//             break
//         case 2:
//             console.log('Вторник')
//             break
//         case 3:
//             console.log('Cреда')
//             break
//         case 4:
//             console.log('Четверг')
//             break
//         case 5:
//             console.log('Пятница')
//             break
//         case 6:
//             console.log('Суббота')
//             break
//         case 7:
//             console.log('Воскресенье')
//             break
//         default:
//             console.log('Введите значение от 1 до 7')
//             break
//     }
// }
// dayOfWeek('ssd');


// 5

// function checkNumbers(a, b = 0) {
//    return a === b ?  true : false;
// }
// console.log(checkNumbers(5, 5));

// const checkNumbers = function(a, b = 0) {
//     return a === b ?  true : false;
// } 
// console.log(checkNumbers(5, 1));

// const checkNumbers = (a, b = 0) => {
//     return a === b ?  true : false;
// }
// console.log(checkNumbers(5));

// 6

// function checkNumbers(a, b = 0) {
//  return a + b > 10 ? true : false;
// }
// console.log(checkNumbers(5, 5));

// const checkNumbers = function(a, b = 0) {
//     return a + b > 10 ? true : false;
// }
// console.log(checkNumbers(5, 1));

// const checkNumbers = (a, b = 0) => {
//     return a + b > 10 ? true : false;
// }
// console.log(checkNumbers(11));

// 7 

// function checkNumber(value = 0) {
//   return value > 0 ? false : true 
// }
// console.log(checkNumber(1));

// const checkNumber = function(value = 0) {
//     return value > 0 ? false : true 
// }
// console.log(checkNumber(-4));

// const checkNumber = (value = 0) => {
//     return value > 0 ? false : true
// }
// console.log(checkNumber(-1));

// 8

// function isNumberInRange(value = 0) {
//     return value > 0 && value < 10 ? true : false
// }
// console.log(isNumberInRange(11));

// const isNumberInRange = function(value = 0) {
//     return value > 0 && value < 10 ? true : false
// }
// console.log(isNumberInRange());

// const isNumberInRange = (value = 0) => {
//     return value > 0 && value < 10 ? true : false
// }
// console.log(isNumberInRange(100));

// 9

// function isEven(value = 0) {
//     return Math.round(value) % 2 === 0 ? true : false
// }
// console.log(isEven(1.9));

// const isEven = function(value = 0) {
//     return Math.round(value) % 2 === 0 ? true : false
// }
// console.log(isEven(3));

// const isEven = (value = 0) => {
//     return Math.round(value) % 2 === 0 ? true : false
// }
// console.log(isEven(99));