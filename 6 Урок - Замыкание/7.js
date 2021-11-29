// 7) Какой результат будет выведен при очередном вызове generation и generation2? Почему?
 

function numberGenerator() {
  var currentNum = 2;
  return function multNumber() {      
    return currentNum *= currentNum;
  };
}

var generation = numberGenerator();   
var generation2 = numberGenerator();  

alert( generation() ); // 4     2 * 2 = 4 * 4 = 16   
alert( generation() ); // 16         

alert( generation2() ); // 4    2 * 2 = 4 * 4 = 16       
alert( generation2() ); // 16
