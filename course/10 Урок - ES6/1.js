// 1)  Дан массив. Запишите первый элемент этого массива в переменную elem1, второй - в переменную elem2, третий - в переменную elem3, а все остальные элементы массива - в переменную arr. 

// 1 варинт
let arr = [1, 2, 3, 4, 5, 6];
let elem1, elem2, elem3;
let newArr = [];

arr.forEach((item, index) => {
    if (index == 0) {
        elem1 = item;
    } else if (index == 1) {
        elem2 = item;
    } else if (index == 2) {
        elem3 = item;
    } else {
        newArr.push(item);
    }
});

console.log(elem1);
console.log(elem2);
console.log(elem3);
console.log(newArr);

//2 вариант
let arr = [1, 2, 3, 4, 5, 6];
let [elem1, elem2, elem3, ...newArr] = arr;

console.log(elem1);
console.log(elem2);
console.log(elem3);
console.log(newArr);

