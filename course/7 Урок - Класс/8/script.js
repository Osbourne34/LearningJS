// 8) Создать класс Animal и расширяющие его классы Dog, Cat, Horse. Класс Animal содержит переменные food, location и методы makeNoise, eat, sleep. Метод makeNoise, например, может выводить на консоль "Такое-то животное спит". Dog, Cat, Horse переопределяют методы makeNoise, eat. Добавьте переменные в классы Dog, Cat, Horse, характеризующие только этих животных. Создайте класс Ветеринар, в котором определите метод void treatAnimal(Animal animal). Пусть этот метод распечатывает food и location пришедшего на прием животного. В методе main создайте массив типа Animal, в который запишите животных всех имеющихся у вас типов. В цикле отправляйте их на прием к ветеринару.

class Animal {
  constructor(animal, food, location) {
    this.animal = animal;
    this.food = food;
    this.location = location;
  }
  makeNoise() {
    return `${this.animal} спит`;
  }
  eat() {
    return `${this.animal} кушает`;
  }
}

class Dog extends Animal {
  constructor(animal, food, location, color) {
    super(animal, food, location);
    this.color = color;
  }
}
class Cat extends Animal {
  constructor(animal, food, location, tail) {
    super(animal, food, location);
    this.tail = tail;
  }
}
class Horce extends Animal {
  constructor(animal, food, location, fast) {
    super(animal, food, location);
    this.fast = fast;
  }
}

const dog = new Dog('Dog', 'bone', 'freedom', 'orange');
const cat = new Cat('Cat', 'milk', 'house', true);
const horce = new Horce('Horce', 'millet', 'farm', false);

class Veterinarian {
  static treatAnimal(animal) {
    return `${animal.food} ${animal.location}`;
  }
}

console.log(dog);
console.log(dog.makeNoise());
console.log(dog.eat());

console.log(cat);
console.log(cat.makeNoise());
console.log(cat.eat());

console.log(horce);
console.log(horce.makeNoise());
console.log(horce.eat());

console.log(Veterinarian.treatAnimal(dog));
console.log(Veterinarian.treatAnimal(cat));
console.log(Veterinarian.treatAnimal(horce));
