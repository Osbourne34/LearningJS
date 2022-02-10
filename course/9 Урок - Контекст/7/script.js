// 7) Напишите функцию getMax(fn, num), которая принимает функцию и число num. Функция getMax должна возвращать функцию, которая при каждом вызове увеличивает свой внутренний счетчик (counter++). Если счетчик больше числа num, внутренняя функция должна возвращать строку «Максимум!»,
function add(a, b) {
  return console.log(a + b);
}

function getMax(fn, num) {
  let count = 0;
  return (a,b) => {
    if (count >= num) {
      return console.log('Максимум');
    }
    count++;
    fn(a, b);
  }
}


var addOnlyThreeTimes = getMax(add, 3);
addOnlyThreeTimes(1, 2); // 3
addOnlyThreeTimes(2, 2) // 4
addOnlyThreeTimes(1, 2) // 3
addOnlyThreeTimes() // "Максимум!"
addOnlyThreeTimes() // "Максимум!"
addOnlyThreeTimes() // "Максимум!"



