// 12) Заполнить массив из 10 элементов случайными числами в интервале [0..4] и определить, есть ли в нем одинаковые соседние элементы.

function random(maxNum, minNum) {
  let arr = [];
  let count = 0;
  while (count != 5) {
      let num = Math.round(Math.random() * (minNum - maxNum)) + maxNum;
      arr.push(num);
      count++;
  }
  return arr;
}

let arr = random(0, 4);

console.log(arr);

let prevNum;
let nextNum;

arr.forEach((item, index, arr) => {
  prevNum = arr[index-1];
  nextNum = arr[index+1];
  if(item === prevNum || item === nextNum) {
    console.log('yes')
  } else {
    console.log('no');
  }
})
