// 23) Дан одномерный массив. Найти среднее арифметическое его элементов. Вывести на экран только те элементы массива, которые больше найденного среднего арифметического.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 18];

let sumArr = arr => {
    return arr.reduce((num, item) => num + item);
}

let arithmeticMean = arr => {
    return Math.floor(sumArr(arr) / arr.length);
}

function result(arr) {
    return arr.filter(item => item > arithmeticMean(arr));
}

console.log(result(arr));