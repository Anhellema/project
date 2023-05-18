"use strict";

// const vehicleBodyWidth = 5000;
// const vehicleBodyLenght = 4000;

// console.log("Ширина кузова автомобиля: " + vehicleBodyWidth + ", длина: " + vehicleBodyLenght);

// const obj = {
//     name: "Alex",
//     age: 24,
//     isMarried: false
// };

// console.log(obj ["name"]);

// let arr = ["plum.png", "orange.jpg", 6, "apple.bmp", {}, []];
// console.log(arr[0]);

// const arr = [1, 2, 3];

// arr[10] = '3456';

// console.log(arr);

// const storeName = "steam";

// const storeDescription = {
// 	budget: 10000,
// 	employees: ["Alex", "Jones", "Jules"],
// 	products: {
// 		redDeadRedemption: 2300,
// 		bloodBorne: 2300,
// 	},
// 	open: true
// };

// console.log(storeDescription.products);

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Какая ваша фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");

// document.write(answers);

// const category = "toys";

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";
// alert(`Привет, ${user}`);

// console.log(4 + +"5");

// let incr = 10,
// 	decr = 10;


// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };

// const a = prompt("Назва?", ""),
// 	  b = prompt("Скiлькi?", ""),
// 	  c = prompt("Назва?", ""),
// 	  d = prompt("Скiлькi", "");


// personalMovieDB.movies[a] = b; 
// personalMovieDB.movies[c] = d; 

// console.log(personalMovieDB);

// if (4) {
// 	console.log("Ok!");
// } else {
// 	console.log("Error");

// }


// const num = 50;

// if (num < 49) {
// 	console.log("error");
// } else if (num > 100) {
// 	console.log("Много");
// } else {
// 	console.log("Ok!");
// }


// (num === 50) ? console.log("Ok!") : console.log("error");

// const num = "верно";

// switch (num) {
// 	case 49:
// 		console.log("Неверно!");
// 		break;
// 	case 100:
// 		console.log("Неверно!");
// 		break;
// 	case "верно":
// 		console.log("Верно!");
// 		break;
// 	default:
// 		console.log("Не в этот раз!");
// 		break;
// }


// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
// 	console.log("Я сыт!");
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 1 ;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "wdadasdasdas");

// if (hamburger === 3 && cola === 1 && fries) {
// 	console.log("Все сыты!");
// } else {
// 	console.log("Мы уходим!");
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && (cola === 2 || fries === 3) && nuggets) {
// 	console.log("Все довольны!");
// } else {
// 	console.log("Мы уходим!");
// }

// console.log(hamburger === 3 && (cola === 2 || fries === 3) && nuggets);

// let johnReport = "done", alexReport, samReport, mariaReport = "done";
// console.log(johnReport || alexReport || samReport || mariaReport);


// console.log(!0);

// console.log( 5 === 5 && 3 > 1 || 5);

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// console.log(hamburger && cola || fries === 3 && nuggets);

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }

// while (num <= 55);

// for (let i = 1; i < 51; i++) {
//     if (i > 10 && i < 40) {
//         // break;
//         continue;
//     } else if (i === 51) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }


// let result = "";
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";

//     }
    
//     result += "\n";
// }


// console.log(result);


// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// for (let i = 5; i < 11; i++) {
//     console.log(i);
// }


// for (let i = 20; i > 9; i--) { 
//      if (i === 13) break;
//      console.log(i);
//    }


// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// let i = 2;

// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }


// const arrayOfNumbers = [];

// for (let i = 5; i < 11; i++) {
//     arrayOfNumbers[i - 5] = i;
// }

// console.log(arrayOfNumbers);
// // Не трогаем
// return arrayOfNumbers;

// let sum = 0;

// while (true) {

// 	let value = +prompt("Введите число", "");

// 	if (!value) break; // (*)

// 	sum += value;

// }
// alert( "Сумма: " + sum );


// for (let i = 0; i < 10; i++) {

//     if (i % 2) {
//       console.log( i );
//     }
//   }


// let i = 0;

// while (i < 3) {
//     console.log( `number ${i}!` );
//     i++
// }



// const answerNumber = prompt("Введите пожалуйста число больше 100", "");
// let i = prompt("Введите пожалуйста число больше 100", "");

// while (i <= 100) {
//     do {i};
//     if (i > 100) break;
// }
// alert(i);

// let num;

// do {
// num = prompt("Введите число больше 100?", 0);
// } 
// while (num <= 100 && num);
// alert(num);


// let num = 50;

// while (num <= 60) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }

// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i);
// }

// let num = 1

// for (let i = 1; i <= 7; i++) {
//     console.log("День " + num++);
//     if (i % 3 === 0) {
//         console.log("Выходной");
//         continue
//     }
//     console.log("Работа")
// }

// let num = 3;
// let i = 0;

// do {
//     console.log(--num);
//     i++
// }

// while (i < 3);

// let i = 0;

// for (; i < 3;) {
//     console.log(i);
//     i++
// }


// for (let i = 0; i < 3; i++) {
//     console.log(i); 
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }


// *
// **
// ***
// ****
// *****
// ******





//     result += "\n";
// }

// console.log(result);


// first: for (let i = 1; i < 3; i++) {
//     console.log(`First level : ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level : ${j}`);
//         for (let k = 0; k < 5; k++) {
//             if (k === 2) break first;
//             console.log(`Third level : ${k}`);
//         }
//     }
// }



// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }


// let i = 2

// do {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i++)
//     }
// }

// while (i <= 16);



// let i = 2

// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++
//         continue;
//     } else {
//         console.log(i++);
//     }
// }

// const arrayOfNumbers = [];

// arrayOfNumbers[0] = 5;
// arrayOfNumbers[1] = 6;
// arrayOfNumbers[2] = 7;
// arrayOfNumbers[3] = 8;
// arrayOfNumbers[4] = 9;
// arrayOfNumbers[5] = 10;
// console.log(arrayOfNumbers)
// // Не трогаем
// return arrayOfNumbers;

// for (let i = 20; i >= 10; i--) {
//     console.log(i);
//     if (i === 13) {
//         break;
//     }
// }


// const arrayOfNumbers = [];

// for (let i = 5; i < 11; i++) {
//     arrayOfNumbers[i - 5] = i;
// }

// console.log(arrayOfNumbers);


// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }
// console.log(result);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// result[1] = arr[1];
// console.log(arr[1]);
// console.log(result[1]);

// let result = "";
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

// const data = [5, 10, 'Shopping', 20, 'Homework'];


// for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === "number") {
//         data[i] *= 2;
//     } else if (typeof data[i] === "string") {
//         data[i] += " - done";
//     }
// }
// console.log(data);


// const data = [5, 10, '10', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === 'number') {
//         data[i] *= 2;
//     } else if (typeof data[i] === 'string') {
//         data[i] += " - done";
//     }
// }

// console.log(data);
// console.log(data.length);


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 0; i < data.length; i++) {
//     result[i - 1] = data[i];
// }

// console.log(result);


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i]
// }

// console.log(result);




// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// while (typeof numberOfFilms === 'number') {
//     if (numberOfFilms <= 10) {
//         alert("Просмотрено довольно мало фильмов");
//         break
//     } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
//         alert("Вы классический зритель");
//         break
//     } else if (numberOfFilms > 30) {
//         alert("Вы киноман");
//         break
//     } else {
//         alert("Произошла ошибка");
//         break
//     }
// }


// first: for (let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "") ; numberOfFilms > 0 ; ) {
//     if (numberOfFilms <= 10) {
//         alert("Просмотрено довольно мало фильмов");
//         break
//     } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
//         alert("Вы классический зритель");
//         break
//     } else if (numberOfFilms > 30) {
//         alert("Вы киноман");
//         break        
//     } else if (str.lenght > 50 || numberOfFilms === "" || numberOfFilms === null) {
//         continue first
//     } else {
//         alert("Произошла ошибка");
//         break   
//     }
// }


// for (let i = 0; i < 1; i++) {
//     const a = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     if (a < 10) {
//         alert("Просмотрено довольно мало фильмов");
//         break
//     } else if (a >= 10 && a <= 30) {
//         alert("Вы классический зритель");
//         break;
//     } else if (a > 30) {
//         alert("Вы киноман");
//         break;
//     } else if (str.lenght > 50 || a === "" || a === null) {
//         alert("Заново");
//         continue
//     } else {
//         alert("Произошла ошибка");
//         break
//     }
// }
const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("Какие там были актеры?", ""),
          c = prompt("К какому жанру принадлежит фильм?", ""),
          d = prompt("На сколько оцените его?", "");


    personalMovieDB.movies[a] = d;
    personalMovieDB.actors[a] = b;
    personalMovieDB.genres[a] = c;

}

console.log(personalMovieDB);