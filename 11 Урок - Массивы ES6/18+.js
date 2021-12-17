// 18) Найти номер и значение первого положительного элемента массива.

let arr = [-5, -3, -0, 5, 7, 9];

let plus = arr.find((item) => item > 0);

console.log(plus)
console.log(arr.indexOf(plus));