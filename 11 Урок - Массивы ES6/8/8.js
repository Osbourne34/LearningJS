// 8) Требуется заполнить массив числами, которые вводит пользователь, и вычислить их сумму. Если 
// пользователь вводит ноль или превышен размер массива, то запросы на ввод должны прекратиться.

let num;
let length = 5;
let count = 1;
let arr = [];
let summ;

while( !(count > length || num === 0) ) {
    num = +prompt();
    arr.push(num);
    count++;
}

summ = arr.reduce( (num, item) => num + item);

console.log(summ);