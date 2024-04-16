// THIS, call, apply, bind

// const item =  {
//     title: "Phone",
//     fullPrice: 100,
//     calculatePrice(discountPercent = 0) {
//         console.log(this.fullPrice - discountPercent/100 * this.fullPrice)
//     }
// }
// item.calculatePrice(20);

// Вызов функции с привязкой контекста: this = объект переданный в метод

function calcDiscount(age) {
    if( age > 65) {
        console.log(this.price / 2)
    } else {
        console.log(this.price)
    }
}

const item = {title: "phone", price:"1000"};
calcDiscount.call(item, 70); // call
calcDiscount.apply(item, [30]); // apply второй агрумент идет в массиве

const calcDiscountForElderly = calcDiscount.bind(item, 66); // bind не вызывает сразу функцию, но нужно сохранить в другую переменную
calcDiscountForElderly();

// Функция-конструктор: this = объект созданный функцией

function CreateItem(title, price) {
    this.title = title;
    this.price = price;
    // console.log(this);
    return this
}

const item1 = new CreateItem("phone", 100);
console.log(item1);



