// 9)  Дан массив с числами, найдите сумму элементов этого массива. 

arr = [1,2,3,4,5,7,8];

let res = arr.reduce((sum, elem) => sum + elem, 0);

console.log(res);