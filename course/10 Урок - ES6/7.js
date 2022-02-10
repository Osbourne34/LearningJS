// 7)  Дан массив, выведите его элементы последовательно на экран.

let arr = [1,2,3,4,5,7,8];

arr.forEach(elem => console.log(elem));

for(elem of arr) {
    console.log(elem);
}