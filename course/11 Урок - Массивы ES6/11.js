// 11) Дан массив из N элементов в диапазоне [100;300]. Сжать массив, оставив в нем только те элементы,сумма цифр которых четная.

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

let arr = random(100, 300);
console.log(arr);

let numbers = [];

arr.forEach( elem => {
    let number = ([...String(elem)]);
    numbers.push(number);
});

numbers.forEach( elem => {
    let a;
    a = elem.reduce((summ, item) => +summ + +item)
    if (a % 2 == 0) {
        console.log(a);
    }
})



