// 10) В одномерном массиве (заполнение массива случайными числами от -50 до 49) найти сумму отрицательных элементов. Если эта сумма меньше -100, то необходимо прибавить к ней минимальный положительный элемент.

function random(maxNum, minNum) {
    let arr = [];
    let count = 0;
    while (count != 50) {
        let num = Math.round(Math.random() * (minNum - maxNum)) + maxNum;
        arr.push(num);
        count++;
    }
    return arr;
}

let arr = random(-50, 49);

let minusSumm = arr.filter(elem => elem < 0).reduce((summ, item) => summ + item);

let plusMin = arr.filter(elem => elem > 0).reduce((summ, item) => (summ > item) ? summ = item : summ);

console.log(minusSumm);
console.log(plusMin);

let result;
if (minusSumm < -100) {
    result = minusSumm + plusMin;
}

console.log(result);