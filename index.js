// HomeWork-JS-2

// // задание 1
// let a = 10;
// alert (a);
// a = 20;
// alert (a);

// // задание 2 
// let year = 2007 ;
// alert (`года выпуска первого iPhone - ${year}`);

// // задание 3
// let nameJS =  (`Брендан Эйх`);
// alert (`Создатель JavaScript - ${nameJS}`);

// // задание 4
// let b = 10;
// let c = 2;
// alert (` сложение ${b+c}\n вычитание ${b-c}\n умножение ${b*c}\n деление ${b/c}`);

// // задание 5
// let result = 2**5;
// alert (result);

// // задание 6
// let d = 9;
// let f = 2;
// alert (d%f);

// // задание 7
// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num ++ ;
// num -- ;
// alert(num);

// //задание 8
// let age = prompt (`Сколько вам лет?`);
// alert (age);

// // задание 9
// const user = {
//     name: `Mikhail`,
//     age: 33,
//     isAdmin: true,
// };

// //задание 9.1
// user [`city of residence`] =`Rostov-on-don`;

// //задание 9.2
// user.age = 50;

// //задание 9.3
// delete user [`city of residence`];

// //задание 9.4
// let info = prompt(`Какую информацию хотите узнать о пользователе?`);
// alert (user[info]);

// //задание 10
// let userName = prompt (`Как тебя зовут?`);
// alert (`Привет, ${userName}!`);





// // HomeWork-JS-3

// // Задание 1 
//  let password =  'пароль' ;

//  let user = prompt ( 'Введите пароль' );
 
//  if (password === user ) {
//      alert  ('Пароль введен верно'); 
//  } else { 
//      alert  ('Пароль введен неправильно') ;
//  };
 
 
//  // задание 2
//  let c = 5 ;
 
//  console.log (c >= 0 && c <= 10)?  'Верно' : 'Неверно' ;
 
 
//  // задание 3
//  let d = 23 ;
//  let e = 120 ;
 
//  console.log ( d > 100 || e > 100)?  'Верно'  :  'Неверно' ;
        
 
//  // задание 4
//  let a = '2';
//  let b = '3';
 
//  alert (Numbera(a) + Numberb(b));
 
//  // задание 5 
//  let monthNumber =Number (prompt('Введите номер месяца, для определения сезона'));
 
//  switch (monthNumber) {
//      case 1:
//      case 2:
//      case 12:    
//          alert ('зима')
//          break;
//      case 3:        
//      case 4:        
//      case 5:
//          alert ('весна')
//          break;
//      case 6:       
//      case 7:        
//      case 8:
//          alert ('лето')
//          break;                
//      case 9:
//      case 10:
//      case 11:
//          alert ('осень')
//          break;  
//      default: 
//      alert ('Ты слегка ошибся')
//          break;
//  }
 
//  // задание 6 ; сделано 
 
//  // задание 7 
 
//  let number = Number (prompt ('Пожалуйста, введите любое число'))
 
//  if (Number.isNaN(+number)) {
//      alert ('вы ввели не число')
//  }else {
//     if  (number % 2===0) {
//          alert ('Число четное')
//      } else {
//          alert ('Число нечетное')
//      }
//  }
 
//  // задани 8
 
//  let clientOS = Number (prompt('Введите 0 если у вас IOS или 1 если у вас Android'));
 
//  if (clientOS === 0) {
//    console.log("Установите версию приложения для iOS по ссылке");
//  } else if ( clientOS === 1) {
//    console.log("Установите версию приложения для Android по ссылке");
//  } else {
//    console.log("Неверное значение переменной clientOS");
//  }
 
//  //  задание 9 
 
 
//  let clientDeviceYear = Number (prompt('Введите год выпуска телефона?'));
 
//  if (clientOS === 0) {
//    if (clientDeviceYear >= 2015) {
//      console.log("Установите версию приложения для iOS по ссылке");
//    } else {
//      console.log("Установите облегченную версию приложения для iOS по ссылке");
//    }
//  } else if (clientOS === 1) {
//    if (clientDeviceYear >= 2015) {
//      console.log("Установите версию приложения для Android по ссылке");
//    } else {
//      console.log("Установите облегченную версию приложения для Android по ссылке");
//    }
//  } else {
//    console.log("Неверное значение переменной clientOS");
//  }

// // HomeWork-JS-4

// // задание 1

// let i = 0;

// while (i < 2) {
//   console.log ('Привет');
//   i++
// }

// // задание 2

// let a = 1;
// while (a <= 5) {
//   console.log (a);
//   a++
// }

// // задание 3

// let c = 7;
// while (c <= 22) {
//   console.log (c)
//   c++
// }

// // задание 4

// const obj = {
//   "Коля": 200,
//   "Вася": 300,
//   "Петя": 400,
// };

// for (const key in obj) {
//     console.log (`${key} — зарплата ${obj[key]} долларов.`)
// }

// // задание 5

// let n = 1000;
// let num = 0;

// while (n >= 50) { 
//   n = n / 2;
//   num++
// }
// console.log(n);
// console.log(num);

// // задание 6
// for (let friday = 3; friday <= 31; friday = friday + 7) {
//   console.log(`Сегодня пятница, ${friday}-e число. Необходимо подготовить отчет.`);
// }

// HomeWork-JS-5

// задание 1

function min (a, b) {
    
  return a < b ? a : b;
}
console.log (min(8,4))
console.log (min(6,6))






 