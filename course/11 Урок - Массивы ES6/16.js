// 16) Вывести элементы числового массива, которые больше, чем элементы, стоящие перед ними.Например, дан массив [3, 9, 8, 4, 5, 1]. Следует вывести числа 9 и 5, так как перед ними стоят соответственно числа 3 и 4, которые меньше их.

let arr = [3, 9, 8, 4, 5, 1];

newArr = arr.filter((item, index) => {
    let nextItem = arr[index+1];
    if(nextItem > item) return true;
});

console.log(arr);
console.log(newArr);
