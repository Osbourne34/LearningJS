// 8) создайте счетчик. В счетчике должно быть: 1) Метод обнуление счетчика. 2) Возможность изменять начало отчета счетчика.  


function counter(n = 0) {
    let count = n;
    return (a) => {
        if (a == 0) count = n;
        return count++;
    }
}

const count = counter(5);

console.log(count());
console.log(count());
console.log(count(0));
console.log(count());
console.log(count());