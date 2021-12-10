// 7) Найти максимальный элемент массива и его индекс (max_num и max_index).

let arr = [1, 2, 3, 4, 16, 7, 16, 2, 1, 3];

let maxNum = arr.reduce((num, item) => (item > num) ? num = item : num);
let index = arr.indexOf(maxNum);

console.log(`Макс. число: ${maxNum}`);
console.log(`Индекс макс. числа: ${index}`);

