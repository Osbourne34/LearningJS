// 2)  Дан массив. Запишите последний элемент этого массива в переменную elem1, а предпоследний - в переменную elem2.

//1 вариант
let arr = [1, 2, 3, 4, 5, 6];
let elem1, elem2;
let newArr = [];

arr.reverse().forEach((item, index) => {
    if (index == 0) {
        elem1 = item;
    } else if (index == 1) {
        elem2 = item;
    } else {
        newArr.push(item);
    }
});

console.log(elem1);
console.log(elem2);

//2 вариант
let arr = [1, 2, 3, 4, 5, 6];
let [elem1, elem2] = arr.reverse();

console.log(elem1);
console.log(elem2);