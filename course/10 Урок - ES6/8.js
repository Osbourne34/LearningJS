// 8)  Дан массив, выведите его элементы последовательно на экран в обратном порядке (подсказка: сначала перевернем массив через reverse). 

let arr = [1,2,3,4,5,7,8].reverse();

arr.forEach(elem => console.log(elem));

for(elem of arr) {
    console.log(elem);
}

