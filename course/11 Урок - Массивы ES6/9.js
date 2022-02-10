// 9) Дан массив из 50 элементов и лежат в диапазоне от -50 до 49 включительно. Требуется из одного массива скопировать в другой массив значения в диапазоне от -5 до 5 включительно и подсчитать их количество.

function random (maxNum, minNum) {
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
let result;

result = arr.filter((elem)=> {
    if(elem > -5 && elem < 5) {
        return true;
    } 
})

console.log(result);
console.log(result.length);
