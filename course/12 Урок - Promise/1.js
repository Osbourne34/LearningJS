// 1) что выведет код?  Объясните
var a = 5;
setTimeout(function timeout() {
    console.log(a);
    a = 10;
}, 0);

var p = new Promise(function(resolve, reject) {
    console.log(a);
    a = 25;
    resolve();
});

p.then(function(){
    console.log('yes');
});

console.log(a);


// Ответ: 

//5    9-ая строка
//25   18-ая строка
//yes  15-ая строка
//25   4-ая строка

