// 8) Напишите функцию sumEvenArguments, которая принимает все аргументы, переданные ей при вызове, и возвращает сумму четных чисел (из числа аргументов).

// sumEvenArguments(1,2,3,6) // 8
// sumEvenArguments(1,12,6) // 18
// sumEvenArguments(1,2) // 2

// ваш код

function sumEvenArguments(...nums) {
  let res = 0;
  nums.forEach(num => {
    if (num % 2 == 0) {
      res += num
    }
  });
  return console.log(res);
}

sumEvenArguments(1, 2, 3, 6);
sumEvenArguments(1, 12, 6);
sumEvenArguments(1, 2);