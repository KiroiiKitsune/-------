// // HomeWork-JS-2

// // // задание 1
// // let a = 10;
// // alert (a);
// // a = 20;
// // alert (a);

// // // задание 2 
// // let year = 2007 ;
// // alert (`года выпуска первого iPhone - ${year}`);

// // // задание 3
// // let nameJS =  (`Брендан Эйх`);
// // alert (`Создатель JavaScript - ${nameJS}`);

// // // задание 4
// // let b = 10;
// // let c = 2;
// // alert (` сложение ${b+c}\n вычитание ${b-c}\n умножение ${b*c}\n деление ${b/c}`);

// // // задание 5
// // let result = 2**5;
// // alert (result);

// // // задание 6
// // let d = 9;
// // let f = 2;
// // alert (d%f);

// // // задание 7
// // let num = 1;
// // num += 5;
// // num -= 3;
// // num *= 7;
// // num /= 3;
// // num ++ ;
// // num -- ;
// // alert(num);

// // //задание 8
// // let age = prompt (`Сколько вам лет?`);
// // alert (age);

// // // задание 9
// // const user = {
// //     name: `Mikhail`,
// //     age: 33,
// //     isAdmin: true,
// // };

// // //задание 9.1
// // user [`city of residence`] =`Rostov-on-don`;

// // //задание 9.2
// // user.age = 50;

// // //задание 9.3
// // delete user [`city of residence`];

// // //задание 9.4
// // let info = prompt(`Какую информацию хотите узнать о пользователе?`);
// // alert (user[info]);

// // //задание 10
// // let userName = prompt (`Как тебя зовут?`);
// // alert (`Привет, ${userName}!`);





// // // HomeWork-JS-3

// // // Задание 1 
// //  let password =  'пароль' ;

// //  let user = prompt ( 'Введите пароль' );
 
// //  if (password === user ) {
// //      alert  ('Пароль введен верно'); 
// //  } else { 
// //      alert  ('Пароль введен неправильно') ;
// //  };
 
 
// //  // задание 2
// //  let c = 5 ;
 
// //  console.log (c >= 0 && c <= 10)?  'Верно' : 'Неверно' ;
 
 
// //  // задание 3
// //  let d = 23 ;
// //  let e = 120 ;
 
// //  console.log ( d > 100 || e > 100)?  'Верно'  :  'Неверно' ;
        
 
// //  // задание 4
// //  let a = '2';
// //  let b = '3';
 
// //  alert (Numbera(a) + Numberb(b));
 
// //  // задание 5 
// //  let monthNumber =Number (prompt('Введите номер месяца, для определения сезона'));
 
// //  switch (monthNumber) {
// //      case 1:
// //      case 2:
// //      case 12:    
// //          alert ('зима')
// //          break;
// //      case 3:        
// //      case 4:        
// //      case 5:
// //          alert ('весна')
// //          break;
// //      case 6:       
// //      case 7:        
// //      case 8:
// //          alert ('лето')
// //          break;                
// //      case 9:
// //      case 10:
// //      case 11:
// //          alert ('осень')
// //          break;  
// //      default: 
// //      alert ('Ты слегка ошибся')
// //          break;
// //  }
 
// //  // задание 6 ; сделано 
 
// //  // задание 7 
 
// //  let number = Number (prompt ('Пожалуйста, введите любое число'))
 
// //  if (Number.isNaN(+number)) {
// //      alert ('вы ввели не число')
// //  }else {
// //     if  (number % 2===0) {
// //          alert ('Число четное')
// //      } else {
// //          alert ('Число нечетное')
// //      }
// //  }
 
// //  // задани 8
 
// //  let clientOS = Number (prompt('Введите 0 если у вас IOS или 1 если у вас Android'));
 
// //  if (clientOS === 0) {
// //    console.log("Установите версию приложения для iOS по ссылке");
// //  } else if ( clientOS === 1) {
// //    console.log("Установите версию приложения для Android по ссылке");
// //  } else {
// //    console.log("Неверное значение переменной clientOS");
// //  }
 
// //  //  задание 9 
 
 
// //  let clientDeviceYear = Number (prompt('Введите год выпуска телефона?'));
 
// //  if (clientOS === 0) {
// //    if (clientDeviceYear >= 2015) {
// //      console.log("Установите версию приложения для iOS по ссылке");
// //    } else {
// //      console.log("Установите облегченную версию приложения для iOS по ссылке");
// //    }
// //  } else if (clientOS === 1) {
// //    if (clientDeviceYear >= 2015) {
// //      console.log("Установите версию приложения для Android по ссылке");
// //    } else {
// //      console.log("Установите облегченную версию приложения для Android по ссылке");
// //    }
// //  } else {
// //    console.log("Неверное значение переменной clientOS");
// //  }

// // // HomeWork-JS-4

// // // задание 1

// // let i = 0;

// // while (i < 2) {
// //   console.log ('Привет');
// //   i++
// // }

// // // задание 2

// // let a = 1;
// // while (a <= 5) {
// //   console.log (a);
// //   a++
// // }

// // // задание 3

// // let c = 7;
// // while (c <= 22) {
// //   console.log (c)
// //   c++
// // }

// // // задание 4

// // const obj = {
// //   "Коля": 200,
// //   "Вася": 300,
// //   "Петя": 400,
// // };

// // for (const key in obj) {
// //     console.log (`${key} — зарплата ${obj[key]} долларов.`)
// // }

// // // задание 5

// // let n = 1000;
// // let num = 0;

// // while (n >= 50) { 
// //   n = n / 2;
// //   num++
// // }
// // console.log(n);
// // console.log(num);

// // // задание 6
// // for (let friday = 3; friday <= 31; friday = friday + 7) {
// //   console.log(`Сегодня пятница, ${friday}-e число. Необходимо подготовить отчет.`);
// // }

// // HomeWork-JS-5

// // задание 1

// function min (a, b) {
    
//   return a < b ? a : b;
// }
// console.log (min(8,4))
// console.log (min(6,6))


// // задание 2

// function num(number) {
//     return number % 2 == 0 ? 'четное' : 'нечетное'
    
// }

// console.log (num(4));
// console.log (num(7));

// // задание 3

// function printSquare(number) {
//     console.log(number ** 2);
//   }
//   console.log (printSquare(5));

//   function returnSquare(number) {
//      return number ** 2 ;
//   }

//   const square = returnSquare(11);
//   console.log (square);

// // задание 4

// function userAge() {
    
//     let age = prompt('Сколько вам лет');
//     if (age < 0) {
//         return (`Вы ввели неправильное значение`)
//     } else if (age <= 12) {
//         return (`Привет друг!`)
//     } else {
//         return (`Добро пожаловать`)
//     }
// }
// alert (userAge())

// // задание 5 

// function mult(c, f) {
//     if (isNaN(c) || isNaN(f)) {
//         return 'Одно или оба значения не являются числом'
//     } else {
//         return c * f 
//     }
// }
// console.log (mult(12 , 5))
// console.log (mult('n', 's'))

// // задние 6

// function cubeNumber() {
//     const number = prompt('Введите число:', '');
//     if (isNaN(number)) {
//       return 'Переданный параметр не является числом';
//     } else {
//       const result = number ** 3;
//       return `${number} в кубе равняется ${result}`;
//     }
//   }
// console.log(cubeNumber());
// // // console.log(cubeNumber(0)); // 0 в кубе будет 0
// // // console.log(cubeNumber(5)); //5 кубе будет 125
// // // console.log(cubeNumber(10)); // 10 в кубе будет 1000
// // // console.log(cubeNumber('abc')); // не являктся числом

// // задание 7

// let circle1 = {
//     radius: 5,
//     getArea: function() {
//       return Math.PI * this.radius ** 2;
//     },
//     getPerimeter: function() {
//       return 2 * Math.PI * this.radius;
//     }
//   };
  
//   let circle2 = {
//     radius: 7,
//     getArea: function() {
//       return Math.PI * this.radius ** 2;
//     },
//     getPerimeter: function() {
//       return 2 * Math.PI * this.radius;
//     }
//   };

// console.log(circle1.getArea()); 
// console.log(circle1.getPerimeter()); 

// console.log(circle2.getArea()); 
// console.log(circle2.getPerimeter()); 

// // Home-Work 2.6

// //  задание 1


// const numbs = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < numbs.length; i++) {
// 	if (numbs[i] == 10) break;
// 	console.log(numbs[i]);
// }
// for (let a = 0; a < numbs.length; a++) {
// 	if (numbs[a] < 1) break;
// 	console.log(numbs[a]);
// }

// // задание 2 

// const arr = [1, 5, 4, 10, 0, 3];
// const position = arr.indexOf(4);

// console.log(position)

// // задание 3

// let line = [1, 3, 5, 10, 20];

// line = line.join(' ');

// console.log(line)

// // задание 4

// //1 вариант

// let arr = [];
// for (let i = 0; i < 3; i++)
// {
//     arr[i] = [];
//     for (let j = 0; j < 3; j++)
//     {
//         arr[i][j] = 1;
//     }
// }
// console.log(arr);

// //2 вариант

// let arr = []; 

// for (let i = 0; i < 3; i++) {  
//   let subArr = [];  

//   for (let j = 0; j < 3; j++) {  
//     subArr.push(1); 
//   }
//   arr.push(subArr);  
// }
// console.log(arr);  

// // задание 5

// let arr = [1, 1, 1] ;

// arr.push(2, 2, 2);
// console.log(arr)

// // задание 6

// // 1 вариант

// let arrNumber = [9, 8, 7, 'a', 6, 5];

// arrNumber = arrNumber.sort();

// console.log(arrNumber.pop());
// console.log(arrNumber);

// // 2 вариант

// let arrNumber = [9, 8, 7, 'a', 6, 5];

// arrNumber.sort().pop();

// console.log(arrNumber);

// // задание 7 

// const numbers = [9, 8, 7, 6, 5];

// const usserNumber = +prompt('ввдедите число от 1 до 10');

// if (numbers.includes(usserNumber)){
//   alert ('Это число есть в массиве');
// } else if (isNaN(usserNumber)){
//     alert ('Не является числом');
// }
// else {
//   alert ('Такого числа нет в массиве');
// };



// // задание 8

// let greeting = 'abcdef';

// console.log([...greeting].reverse().join(''))

// // задание 9

// let arr = [[1, 2, 3],[4, 5, 6]];

// const flatArr = arr.flat();

// console.log(flatArr);

// // задаие 10

// const arr = [1, 3, 2, 9, 5, 8, 10, 4, 6, 7];

// for (let i = 0; i < arr.length - 1; i++) {
// console.log(arr[i] + arr[i + 1]);
// }

// // задание 11

// const element = [11, 5, 10, 32,];
// const square = element.map(el => el ** 2);

// console.log(square);

// // задание 12

// // 1 вариант

// function getLengthWords(words) {
//     let arr = [];
//     for (let i = 0; i < words.length; i++) {
//     const wordLength = words[i].length;
//     arr.push(wordLength);
//     }
//     return arr;
//     }
// let words = (['слово', '', 'слог', 'длинное предложение', 'буква']);
// let wordsLength = getLengthWords(words)
// console.log (wordsLength)

// // 2 вариант

// const lengthWords = ['картошка', 'луна', 'солнцу', 'skypro', 'учеба'];
// const arr = lengthWords.map(function(len){
//     return len.length;
// });
// console.log(arr);


// // задание 13

// function getNegativeValues(numbers) {
    
//     const result = [];
//     for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//     result.push(numbers[i]);
//     }
//     }
//     return result;
//     }
//     let numbers = [2, -5, 8, -10, 6, -3];
//     let negativeNumbers = getNegativeValues(numbers);
//     console.log(negativeNumbers)

// //    доп задания  
// // задание 14

// const arr = [];
// const evenNumbers = [];

// for (let i = 0; i < 10; i++) {
// arr.push(Math.floor(Math.random() * 10));
// }

// console.log('Исходный массив:', arr);

// for (let i = 0; i < arr.length; i++) {
// if (arr[i] % 2 === 0) {
// evenNumbers.push(arr[i]);
// }
// }

// console.log('четные числа:', evenNumbers);

// // задание 15

// let arr = [];

// for (let i = 0; i < 6; i++) {
// arr.push(Math.ceil(Math.random() * 10) + 1 );
// }

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
// sum += arr[i];
// }

// let average = sum / arr.length;

// console.log(`Среднее арифметическое: ${average}`);

// Home-Work 2.7

// задание 1

let str = "js";
str = str.toUpperCase();
console.log(str);

// 2 задание

const productsFruits = ['яблоко', 'банан', 'груша', 'киви', 'виноград', 'вишня'];
const search = 'ви'

productsFruits.forEach((fruits) => {
if (fruits.toLowerCase().startsWith(search.toLowerCase())) {
    console.log(fruits);
}
});

// задание 3 

let num = 32.58884;

let roundDawn = Math.floor(num);
let roundUp = Math.ceil(num);
let roundNearest = Math.round(num);

console.log(roundDawn, roundUp, roundNearest);

// задание 4

const numbers = [52, 53, 49, 77, 21, 32];

const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log(`Минимальное число: ${min}`);
console.log(`Максимальное число: ${max}`);

// задание 5

function randomNumbers(min, max) {
    return Math.round(Math.random() * (min - max)) + max;
}
console.log (randomNumbers(1, 10))

// задание 6

function getRandomArray(n) {
    const arr = [];
  
    for (let i = 0; i < n / 2; i++) {
      arr.push(Math.floor(Math.random() * (n + 1)));
    }
  
    return arr;
  }
  console.log(getRandomArray(7));
  console.log(getRandomArray(12));


// задание 7

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
    console.log(getRandomInt(1, 10));

// задание 8

let currentDate = new Date();

console.log(currentDate);

// задание 9

let currentDate = new Date(); 
let nextDate = new Date();
let daysToAdd = 73;

nextDate.setDate(currentDate.getDate() + daysToAdd);
nextDate.toLocaleTimeString('ru-RU');

console.log(nextDate);



// задание 10

function formatDate(date) {
    const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `Дата: ${day} ${month} ${year}: ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
    }
    
    const currentDate = new Date();
    console.log(formatDate(currentDate));

