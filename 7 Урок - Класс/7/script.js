// 7) Создать класс Car в пакете com.company.vehicles, Engine в пакете com.company.details и Driver в пакете com.company.professions. Класс Driver содержит поля - ФИО, стаж вождения.
// Класс Engine содержит поля - мощность, производитель.
// Класс Car содержит поля - марка автомобиля, класс автомобиля, вес, водитель типа Driver, мотор типа Engine. Методы start(), stop(), turnRight(), turnLeft(), которые выводят на печать: "Поехали", "Останавливаемся", "Поворот направо" или "Поворот налево". А также метод printInfo(), который выводит полную информацию об автомобиле, ее водителе и моторе. 
// Создать производный от Car класс  - Lorry (грузовик), характеризуемый также грузоподъемностью кузова. Создать производный от Car класс - SportCar, характеризуемый также предельной скоростью. Пусть класс Driver расширяет класс Person.

class Engine {
    constructor(manufacturer, power) {
        this.manufacturer = manufacturer;
        this.power = power;
    }
}
const engine = new Engine('Chevrolet', '160km/h')

class Driver {
    constructor(fullName, experience) {
        this.fullName = fullName;
        this.experience = experience;
    }
}
const driver = new Driver('Птушкин Владислав', '5 лет');

class Car {
    constructor(brand, classAuto, weight, engine, driver){
        this.brand = brand;
        this.classAuto = classAuto;
        this.weight = weight;
        this.engine = engine;
        this.driver = driver;
    }
    start() {
        return 'Поехали';
    }
    stop() {
        return 'Останавливаемся';
    }
    turnRight() {
        return 'Поворот направо';
    }
    turnLeft() {
        return 'Поворот налево';
    }
    pritnInfo() {
        return `${this.brand} ${this.classAuto} ${this.weight} ${this.engine.manufacturer} ${this.engine.power} ${this.driver.fullName} ${this.driver.experience}`;
    }
}

const car = new Car ('Toyota', 'C-Class', 500, engine, driver);
console.log(car);
console.log(car.pritnInfo());

class Larry extends Car {
    constructor(carrying, brand, classAuto, weight, engine, driver) {
        super(brand, classAuto, weight, engine, driver);
        this.carrying = carrying;
    }
}

const larry = new Larry('700', 'Mercedes', 'B-class', 1500, engine, driver);
console.log(larry);

class SportCar extends Car {
    constructor(speed, brand, classAuto, weight, engine, driver) {
        super(brand, classAuto, weight, engine, driver);
        this.speed = speed;
    }
}

const sportcar = new SportCar ('400km/h', 'Ferrari', 'A-class', 250, engine, driver);
console.log(sportcar);