"use strict";


let number = 5;
const leftBorderWidth = 1;



{
  let result = 50;
}


let num = 4.6;

console.log(-4/0);
console.log('string' * 9);

const persone = "Alex";

const bool = true;

console.log('something');

const obj = {
  name: "John",
  age: 25,
  isMarried: false
};

const arr = ['a', 'b', 'c'];
const arrObj = {
  0 : 'a',
  1 : 'b',
  2 : 'c'
};

console.log(arr[1]);
console.log(arrObj[2]);

// alert('hello');

// const result = confirm("Are you here?");
// console.log(result)

/* if (confirm('Ты крыса?')) {
  alert("Добро пожаловать, крыса!");
} else {
  window.location.replace("https://www.youtube.com/watch?v=j6KVEnIdj5c");
} */

/* const answer = prompt("Ты крыса?", "");

if (answer === 'Да') {
  alert("Добро пожаловать, крыса!");
  } else {
    window.location.replace("https://www.youtube.com/watch?v=j6KVEnIdj5c");  
  } */


/* const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?','');
answers[2] = prompt('Сколько вам лет?','');

console.log(typeof(answers)); */


let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

console.log(2*4 == '9');

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);