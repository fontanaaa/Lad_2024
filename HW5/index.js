// 1
// function stringToAray(str) {
//      const result = str.split(" ");
//    console.log(result);
// };
// stringToAray("Moscow is a capital of Russia");

// 2

// function deleteCharacters(str, length) {
//    const result = str.slice(length);
//    console.log(result);
// };
// deleteCharacters("Moscow is a capital of Russia", (10));

// 3

// function insertDash(str) {
//    const result = str.toUpperCase().replaceAll(" ", "-");
//    console.log(result);
// };
// insertDash("Moscow is a capital of Russia");

// 4

// const firstLetterUp = function(str) {
//    const result = str.charAt(0).toUpperCase() + str.slice(1);
//    console.log(result);
// };
// firstLetterUp("moscow is a capital of Russia");

// 5

// const capitalize = function(str) {
//    const result = str.split(/\s+/).map((chr) => chr[0].toUpperCase() + chr.slice(1)).join(' ');
//    return result;
// };
// console.log(capitalize("moscow is a capital of russia"))

// 6

// function changeRegister(str) {
//    let result = "";
//    for(let i of str) {
//       result += i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase();
//    } return result
// };
// console.log(changeRegister("КаЖдЫй ОхОтНиК"))

// 7 

// const removeChar = function(str) {
//    const result = str.replace(/[^\w\s]/gi, " ");
//    console.log(result);
// }
// removeChar('$5d#$@;d))');

// 8

// const zeros = function(num, len, sign) {
//     if (sign === '+') {
//         for (let i = 0; i < len; i++) {
//             num = num + "0";
//         };
//         return '+' + num;
//     } else if (sign === '-') {
//         for (let i = 0; i < len; i++) {
//             num = num + "0";
//         };
//         return '-' + num;
// };
// };
// console.log(zeros(1, 1, '-'))

// 9

// function comparison(str1, str2) {
//     console.log(str1.toUpperCase() === str2.toUpperCase());
// };
// comparison('aaa', 'AAA');

// 10

// const insensitiveSearch = function(str1, str2) {
//     const result = str1.toUpperCase().includes(str2.toUpperCase());
//     console.log(result);
// };
// insensitiveSearch("moscowiacapitalofrussia", "capital");

// 11

// const initCap = function(str) {
//     const result = str.toLowerCase().split(" ");
//     for(let i = 1; i < result.length; i++) {
//         result[i] = result[i][0].toUpperCase() + result[i].slice(1);
//     }
//     return result.join('');
// };
// console.log(initCap("CAmel CASE dO"));

// 12

// const initSnake = function(str) {
//     const result = str.split(" ").map(chr => chr.toLowerCase()).join("_");
//     return result;
// };
// console.log(initSnake("Purple color is Cool"));

// 13

// const repeatStr = (str, n) => {
//      return str = str.repeat(n);
// };
// console.log(repeatStr("String ", 5));

// 14

// const path = (pathname) => {
//    return pathname.split("/").at(-1);
// };
// console.log(path("https://doka.guide/js/array-at"));

// 15

// const endsWith = (str, str1) => {
//     return str.endsWith(str1)
// };
// console.log(endsWith("Purple color is Cool", "Cool"));

// 16

// function getSubstr(str, char, pos) {
//     let index = str.indexOf(char);
//     return pos === 'before' ? str.slice(0, index) : str.slice(index + 1)
//     };
//     console.log(getSubstr("Purple color Cool", "-", "after"));

// 17

// const insert = (str, substr="", pos = 0) =>
//    str.slice(0, pos) + substr + str.slice(pos);

// console.log(insert("Purple color Cool", ' is', 12));


// 18

// const limitStr = function(str, num = 0, symb = "") {
//    return str.slice(0, num) + ( symb ? symb : '...')
// };
// console.log(limitStr("Purple color is Cool", "7"));


// 19

// function count(str, stringsearch) {
//     const regexp = str.match(new RegExp(`${stringsearch}`, "g") || []).length
//     return regexp;
// };
// console.log(count("Purple color is Cool", "o"));

//20

// let str = "Purple       color      is      Cool";

// function strip(str){
//     let result = str.split(" ")
//     return result.filter(item => item).join(' ') 
// };
// console.log(strip(str));

// 21

// function cutString(str, n) {
//     return str.split(" ").splice(0, n).join(" ")
//     };

//     console.log(cutString("Purple color is Cool", 1))

// 22

// function findWord(word, str) {
//     return str.includes(word)
//     };
// console.log(findWord("Purple", "Purple color is Cool"));


