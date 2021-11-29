// 1) Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Например: 
// sum(1)(2) = 3
// sum(5)(-1) = 4

function sum(a) {
    return b => a + b;
}

console.log(sum(1)(2));
console.log(sum(5)(-1));

