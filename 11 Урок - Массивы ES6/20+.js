// 20)В одномерном массиве найти минимальный и максимальный элементы. Вычислить их разность.Например, дан массив [3, 5, 20, 9, 4, 2, 6]. Максимальным числом является 9, минимальным является 2. Разность составляет 9-2=7.

let arr = [3, 5, 2, 9, 4, 2, 6];

let maxNum = arr.reduce((num, item) => item > num ? num = item : num);
let minNum = arr.reduce((num, item) => item < num ? num = item : num);

let res = (maxNum - minNum);

console.log(maxNum);
console.log(minNum);

console.log(res);

