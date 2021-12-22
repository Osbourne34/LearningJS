// 22) В массиве найти минимальное значение среди элементов с нечетными индексами.

let arr = [1, 6, 3, 2, 5, 6, 8, 9];

let result = arr.filter((item, index) => index % 2 != 0)
                .reduce((num, item) => (num > item) ? num = item : num);

console.log(result);