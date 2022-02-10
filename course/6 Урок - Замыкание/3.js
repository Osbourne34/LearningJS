// 3) У нас есть массив объектов, который нужно отсортировать:
// users.sort(byField('name'));
// users.sort(byField('age'));

// То есть, чтобы вместо функции, мы просто писали byField(fieldName).
// Напишите функцию byField, которая может быть использована для этого.

const users = [
    { name: 'Edward', age: 21 },
    { name: 'Sharpe', age: 37 },
    { name: 'And', age: 45 },
    { name: 'The', age: 12 },
    { name: 'Magnetic', age: 32 },
    { name: 'Zeros', age: 37 }
];

function byField(name) {
    return (a,b) => {
        if (a[name] > b[name]) return 1;
        else if (a[name] < b[name]) return -1;
        return 0;
    }
}

const resultAge = users.sort(byField('age'));
const resultName = users.sort(byField('name'));

console.log(resultAge);
console.log(resultName);
