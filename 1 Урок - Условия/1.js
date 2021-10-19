// #1
var admin;
var name = 'Джон';

admin = name;
alert(admin);

// #2
var a1, a2, a3, a4;

a1 = 5 + 3;
a2 = 5 - 3;
a3 = 5 * 3;
a4 = 5 / 3;

alert('a1 = ' + a1 + ', ' + 
      'a2 = ' + a2 + ', ' + 
      'a3 = ' + a3 + ', ' +
      'a4 = ' + a4);

// #3
var a6, a7, a8, a9, a10;

a6 = 5 % 3; 
a7 = 3 % 5;
a8 = 5 + '3';
a9 = '5' - 3;
a10 = 75 + 'кг';

alert('a6 = ' + a6 + ', ' + 
      'a7 = ' + a7 + ', ' +
      'a8 = ' + a8 + ', ' +
      'a9 = ' + a9 + ', ' +
      'a10 = ' + a10);

// #4
var width = prompt('Ширина: ');
var height = prompt('Высота: ');

c = width * height;
alert(c);
