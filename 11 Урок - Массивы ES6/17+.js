// 17) Все элементы массива поделить на значение наибольшего элемента этого массива.

let arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];

let maxNum = arr.reduce((num, item) => num < item ? num = item : num);
let newArr = arr.map(item => item / maxNum);

console.log(maxNum);
console.log(newArr);