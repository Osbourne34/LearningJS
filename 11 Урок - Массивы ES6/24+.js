// 24) Дан массив A вещественного типа, содержащий 20 положительных и отрицательных элементов. Сформировать массив B из положительных элементов массива A, имеющих четный индекс. Найти сумму квадратов элементов нового массива.

function random(maxNum, minNum) {
    let arr = [];
    let count = 0;
    while (count != 40) {
        let num = Math.round(Math.random() * (minNum - maxNum)) + maxNum;
        arr.push(num);
        count++;
    }
    return arr;
}

let arrA = random(-20, 20);

let arrB = arrA.filter((item,index) => item > 0 && index % 2 === 0);

console.log(arrB);

let result = arrB.map(item => item *= item)
                 .reduce((num, item) => num + item);

console.log(result);

