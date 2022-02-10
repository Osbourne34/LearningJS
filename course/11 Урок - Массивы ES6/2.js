// 2) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

let arrA = ['a', 'b', 'c'];
let arrB = [1, 2, 3];

//1
let newArr = [...arrA, ...arrB];
console.log(newArr);

//2
arrA.push(1,2,3);
console.log(arrA);

//3
let concat = arrA.concat(arrB);
console.log(concat);
