console.log('script started');
const interval = setInterval(() => {
    console.log('Set interval');
}, 0);
setTimeout(() => {
    console.log('SetTimeOut #1');
    Promise.resolve()
        .then(() => console.log('Promise 3'))
        .then(() => console.log('Promise 4'))
        .then(() => {
            setTimeout(() => {
                console.log('SetTimeOut #2');
                Promise.resolve()
                    .then(() => console.log('Promise 5'))
                    .then(() => console.log('Promise 6'))
                    .then(() => clearInterval(interval))
            }, 0)
        })
}, 0)
Promise.resolve()
    .then(()=> console.log('Promise #1'))
    .then(()=> console.log('Promise #2'))
console.log('script end');

// Мой ответ: 

// script started 
// script end 
// Promise #1 
// Promise #2 
// Set interval 
// SetTimeOut #1 
// Promise 3 
// Promise 4 
// SetTimeOut #2 
// Promise 5 
// Promise 6 


// Что вывелось:

// script started 
// script end
// Promise #1 
// Promise #2 
// Set interval 
// SetTimeOut #1 
// Promise 3 
// Promise 4 
// Set interval 
// SetTimeOut #2 
// Promise 5 
// Promise 6 

