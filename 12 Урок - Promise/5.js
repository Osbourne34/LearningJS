// 5) В каком порядке выведется консольлог и почему? 
console.log('1');

setTimeout(function () {
  console.log('2')
}, 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');


// Ответ:

//1
//4
//3
//2