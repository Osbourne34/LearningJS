// 4) Есть недописаная функция "parallel(funcArray, doneAll)":
function parallel(funcArray, doneAll) {
    let arr = [];
    return new Promise(res => {
        funcArray[0](text => {
            console.log(text);
            arr.push(text);
            res(funcArray[1]);
        })
    }).then(a => {
        a(text => {
            console.log(text);
            arr.push(text);
            console.log(arr);
        });
    })
};

var a = function (done) {
    setTimeout(function () {
        done('result a');
    }, 2000);
};

var b = function (done) {
    setTimeout(function () {
        done('result b');
    }, 1000);
};

// parallel([a, b], function (results) {
//     console.log(results); // ['result a', 'result b']
// });

parallel([a, b]);
// Нужно её дописать. Что-то вроде аналога promise.all. И не забудьте, что результирующий массив должен сохранять тот порядок, в котором передавались функции.
