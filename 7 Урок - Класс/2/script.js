// 2)  Создать класс Person, который содержит: 
// a) поля fullName, age. 
// б) методы move() и talk(), в которых просто вывести на консоль сообщение -"Такой-то  Person говорит". 
// в) Добавьте два конструктора  - Person() и Person(fullName, age).
// Создайте два объекта этого класса. Один объект инициализируется конструктором Person(), другой - Person(fullName, age).

class Person {
    constructor(fullname, age) {
        this.fullname = fullname;
        this.age = age;
    }
    move() {
        return `Говорит ${this.name}`;
    }
    talk() {
        return `Говорит ${this.name}`;
    }

    // В классе можно создавать два конструктора?
    
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Uncaught SyntaxError: A class may only have one constructor
}


