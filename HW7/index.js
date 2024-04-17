// Home work 7

// 1 
// Изначально в f вызывается глобальное window, затем привязываем к this значение null.
// И получается будет alert c null, но в браузере если this не определено или равно null, оно по умолчанию указывает на глобальный объект, который в браузере является объектом Window.

// function f() {
//     alert(this);
//    }
   
//    let user = {
//     g: f.bind(null),
//    };
   
//    user.g();

// 2
// bind фиксируется после первого привязывания и последующие bind игнорируются.

// function f() {
//  alert(this.name);
// }

// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

// f();

// 3 
// Cвойство test не копируется в новую функцию bound и будет undefined

// function sayHi() {
//     alert( this.name );
//    }
//    sayHi.test = 5;
   
//    let bound = sayHi.bind({
//     name: "Вася"
//    });

//    alert( bound.test );

// 4
// Потеря контекста this при передаче методов user.loginOk и user.loginFail в качестве аргументов функции askPassword.

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//    }
   
//    let user = {
//     name: 'Вася',
   
//     loginOk() {
//       alert(`${this.name} logged in`);
//     },
   
//     loginFail() {
//       alert(`${this.name} failed to log in`);
//     },
   
//    };
   
//    askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// 5
// Нужно передать ссылку на метод user.login с соответствующими аргументами user.login.bind(user, true), user.login.bind(user, false)
// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
//  }
 
//  let user = {
//   name: 'John',
 
//   login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
//  };
 
//  askPassword(user.login.bind(user, true), user.login.bind(user, false));

// 6

// const elem = {value: 'Привет'}

// function func(surname, name) {
// alert(this.value + ', ' + surname + ' ' + name);
// }

//Тут напишите конструкцию с bind()
// const func1 = func.bind(elem);

// func1('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
// func1('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'


// 7 

// function sum(a) {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// };

// console.log(sum(2)(2)(2));

// 8 

const countdownTimer = (startValue, endValue) => {
    let currentValue = startValue;
    
    function countdown() {
        if(currentValue <= endValue) {
            console.log("The timer has finished working")
            return;
        }
        console.log("The current value of the timer: " + currentValue);
        currentValue--;
        setTimeout(countdown, 1000);
    }
    countdown();
}
countdownTimer(5, 0);