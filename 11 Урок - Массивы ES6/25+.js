// 25) Получить среднее арифметическое всех чётных элементов массива, стоящих на нечётных местах.

function random(maxNum, minNum) {
    let arr = [];
    let count = 0;
    while (count != 10) {
        let num = Math.round(Math.random() * (minNum - maxNum)) + maxNum;
        arr.push(num);
        count++;
    }
    return arr;
}

let arr = random(1, 15);
let indexMinus = arr => arr.filter((item, index) => index % 2 === 0);

function result(arr) {
    let sumArr = arr.reduce((num, item) => num + item);
    return Math.floor(sumArr / arr.length);
}

console.log(arr);
console.log(indexMinus(arr));
console.log(result(indexMinus(arr)));
