// 2) У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

const arr = [1,2,3,4,5,6,7];

function func1(num1, num2) {
    return x => num1 <= x && num2 >= x;
}

console.log(arr.filter(func1(3,6)));


function func2(arr) {
    return x => arr.includes(x);
}

console.log(arr.filter(func2([1,2,10])));