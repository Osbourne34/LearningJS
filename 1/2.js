// #1
var a = 5;
// var a = 10;
(a == 10) ? alert('Верно') : alert('Неверно');

// #2
var min = 55;

if (min <= 15) {
    alert('1-ая четверть часа');
} else if (min <= 30) {
    alert('2-ая четверь часа');
} else if (min <= 45) {
    alert('3-ая четверь часа');
} else if (min <= 60) {
    alert('4-ая четверь часа');
}

// #3
var b = 3;

if (b > 1) {
    alert('Переменная b больше 1');
} else {
    alert('Переменная b не больше 1');
}

// #4
var age = prompt('Введите ваш возраст: ');

(age < 20) ? alert('Вы слишком молоды') : alert('Вы нам подходите');

// #5
var user = prompt('Ваше имя: ');

console.log(user);

if (user === '') {
    alert('Привет, незнакомец!');
} else if (user === null) {
    alert('Привет, незнакомец!');
} else {
    alert('Привет, ' + user + '!');
}

// #6
var input = prompt();
var pass1 = 9583;
var pass2 = 1747;
var pass3 = 3331;
var pass4 = 7922;
var pass5 = 9455;
var pass6 = 8997;

if (input == pass1 || input == pass2) {
    alert('Доступны модули базы A, B и C');
} else if (input == pass3 || input == pass4) {
    alert('Доступны модули базы B и C');
} else if (input == pass5 || input == pass6) {  
    alert('Доступны модули базы C');
} else {
    alert('Неверный пароль');
}

// #7
var str1 = 1;

