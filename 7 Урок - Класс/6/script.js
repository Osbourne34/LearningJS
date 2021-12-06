// 6) Создайте пример наследования, реализуйте класс Student и класс Aspirant, аспирант отличается от студента наличием некой научной работы.
// а) Класс Student содержит переменные: String firstName, lastName, group. А также double averageMark, содержащую среднюю оценку.
// б) Создать переменную типа Student, которая ссылается на объект типа Aspirant.
// в) Создать метод getScholarship() для класса Student, который возвращает сумму стипендии. Если средняя оценка студента равна 5, то сумма 100 грн, иначе 80. Переопределить этот метод в классе Aspirant.  Если средняя оценка аспиранта равна 5, то сумма 200 грн, иначе 180.
// г) Создать массив типа Student, содержащий объекты класса Student и Aspirant. Вызвать метод getScholarship() для каждого элемента массива. 

class Learner {
    constructor(firstName, lastName, group, averageMark){
        this.firstName = firstName;
        this.lastNamee = lastName;
        this.group = group;
        this.averageMark = averageMark;
    }
}

class Student extends Learner {
    getScholarship() {
        if(this.averageMark >= 5) {
            return 'Степендия 100 грн';
        }
        return 'Степендия 80 грн'
    }
}

class Aspirant extends Learner {
    getScholarship() {
        if(this.averageMark >= 5) {
            return 'Степендия 200 грн';
        }
        return 'Степендия 180 грн'
    }
}

let student = new Student('Евгений', 'Волков', 'Математика', 4);
console.log(student);
console.log(student.getScholarship());

let aspirant = new Aspirant('Василий', 'Петров', 'Химия', 5);
console.log(aspirant);
console.log(aspirant.getScholarship());
