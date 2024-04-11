// Home work 6

// 1

const arr = ["generated", "javascript", "pool", "easy"];

const itemLength = (arr) => {
    const result = arr.map(function(item) {
        return item.length;
    });
    console.log(result);
};
itemLength(arr);

// 2 

// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];

// const currentSums = (numbers) => {
// const result = []; 
// numbers.reduce((accum, item, i) => {
//     return result[i] = accum += item
// }, 0);
// console.log(result);
// };
// currentSums(numbers);

// 3

// const numbers = [2, 3, 5, 4, 1, 6, 0, 16, 44];

// const sumOfTwo = (numbers, value) => {
//     const result = [];
//     for(let i = 0; i < numbers.length; i++) {
//         for(let j = i + 1; j < numbers.length; j++) {
//             if(numbers[i] + numbers[j] === value) {
//                 result.push(`${numbers[i]}:${numbers[j]}`);
//             };
//         };
//     };
//     return result;
// };
// console.log(sumOfTwo(numbers, 7));

// 4

// const str = "Jimmy Neutron is very funny cartoon";

// const arrayOfLetter = (str) => {
//     const result = str.split(" ").map(letter => letter[0]);
//     console.log(result);
// }
// arrayOfLetter(str);


// 5

// let str = "строка";

// let arrayOfLetters = (str) => {
//     const strArr = str.split("");
//     let result = strArr.map((el, i, arr) => arr[i-1] + el + arr[i+1]);
//     console.log(result);
// }
// arrayOfLetters(str);

// 6

// const numbers = [2, 3, -5, 4, -1, 6, 0, 16, 44];

// const sortedArray = (numbers) => {
//     const  result = [...numbers].sort((a, b) => b - a);
//     console.log(numbers);
//     console.log(result);
// };
// sortedArray(numbers);


// 7

// const arr = [7, 33, 64];
// const arr2 = [6, 2, 35];
// const arr3 = [12, -4, -22];

// const joinedArrays = (arr, arr2, arr3) => {
//     const result = [...arr, ...arr2, ...arr3].sort((a, b) => b - a);
//     console.log(result);
// };
// joinedArrays(arr, arr2, arr3);

// 8 

// const arr = [
//     [1, 2, 3],
//     [4, 5],
//     [6],
// ];

// const sumOfArrays = (arr) => {
//    const result = arr.map(subArr => subArr.reduce((sum, current) => sum + current, 0));
//    console.log(result);
// };

// sumOfArrays(arr);

// 9

// const numbers = [2, 3, -5, 4, -1, 6, 0, 16, 44];

// const result = numbers.map(numbers.pop, [...numbers]);
// console.log(result);

// 10

// const numbers = [3, 1, 5, 1, 6, 8];

// const arrSum = (numbers) => {
//     let sum = 0;
//     let arr = [];
//     for(let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//         if(sum < 10) {
//             arr.push(numbers[i]);
//         }
// }
// console.log(arr.length);
// };
// arrSum(numbers);

// 11

// const arrayFill = (item, length) => {
//  const array = Array(length);
//  return array.fill(item);
// };
// console.log(arrayFill('x', 5));
