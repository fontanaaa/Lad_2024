"кот" > "код" // true, первые две буквы одинаковые, поэтому сравниваются т и д, двоичный код т = 10010010, д = 10000100, отсюда т > д

"2" + 2 * "2" // 24, сначала выполняется умножение, строчная 2 приводится к числу, получаем число 4, далее конкатенация строк

undefined == null // true, нестрогое сравнение

undefined != null // false, изначально получаем true, а не true это false

null == 0 // false, используется абстрактный алгоритм стравнения для равенств, состоящий из 22 шагов и этому равенству подходит 22 шаг, вернуть false

2 > "3" // false, строчная 3 приводится к числу

null - false + true // 1, 0 - 0 + 1 = 1

1 / "l" // 1, строчная единица приводится к числу 1

"2" * "3" // 6, строки приводятся к числам

4 + 5 + "O" // "90", сначала считаем сумму чисел, равна 9, затем конкатенация строк

"l" + 4 + 5 // "105, конкатенация строк

"4" - 2 // строчная 4 приводится к числу 4 и вычитаем 2

"4" - "4x" // NaN, 4x не приводится к числу 

"23" == 23 // true, нестрогое равенство

null == false // false

" -4 "/ 0 + 1 // -Infinity, -4 становится числом, делим на 0 получаем -Infinity, +1 и получаеv -Infinity

null + 1 // 1, null становится 0, 0 + 1 = 1

undefined + null // NaN, NaN + 0 = NaN

1 === "1" // false, строгое сравнение

"2" > 10 // false, строчная 2 становится числом и она меньше 10

NaN == undefined // false, 0 == NaN



const temp = 20;
if(temp <= -30) {
    console.log("Оставайтесь дома!")
} else if (temp <= - 10) {
    console.log("Сегодня холодно!")
} else if (temp <= 5) {
    console.log("Не холодно!")
} else if (temp <= 15) {
    console.log("Тепло!")
} else if (temp <= 25) {
    console.log("Очень тепло!")
} else if (temp < 35) {
    console.log("Жарко!")
} 
    
let res = 155;

switch (res) {
    case 15:
        console.log("OK")
        break;
    case "manager":
        console.log("bad")
        break;
    case "user":
        console.log("bad")
        break;  
    default:
        console.log("bad values")
} 

// let counterDays = 1;

// while (N >= M) {
//     N = N / 2;
//     counterDays++;
//     console.log(counterDays)
// }


let N = 32;
const M = 5;
for(let i = 1; N >= M; i++) {
    if(i > 1)N = N / 2;
    console.log(i) 
}
