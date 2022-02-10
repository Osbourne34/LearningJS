// 5)  Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет'}. Запишите соответствующие значения в переменные name, surname и age. 

let obj = {
    name: 'Петр',
    surname: 'Петров',
    age: '20 лет',
}

let {name, surname, age} = obj;

console.log(name);
console.log(surname);
console.log(age);