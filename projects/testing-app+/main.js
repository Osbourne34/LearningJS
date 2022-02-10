import { physics, mathematics } from './questions.js';

const appData = {
    name: '',
    surName: '',
    subject: '',
    counter: 0,
    repeat: '',
    number: 0,
    subjects: [
        'Физика',
        'Математика',
    ],

    enterName() {
        this.name = prompt('Введите имя');
        this.surName = prompt('Введите фамилию');
    },

    subjectSelection() {
        do {
            this.subject = prompt(`Выберите предмет \n ${this.subjects}`);
        }
        while (this.subjects.includes(this.subject) === false);
    },

    numberOfQuestion(array) {
        do {
            this.number = +prompt('Сколько вопросов составить для вас?');
        }
        while (this.number < 5 || array.length < this.number);
        return this.number;
    },

    determineQuantity(array, number) {
        if (number === array.length) {
            return this.random(array);
        }
        let randomArray = this.random(array);
        return randomArray.splice(randomArray.length - number);
    },

    random(array) {
        return array.map(item => [Math.random(), item]).sort().map(i => i.pop());
    },

    question(questions) {
        questions.forEach(element => {
            let answer = prompt(`${element.question}\n${Object.values(element.answers)}`);
            if (answer === element.answer) {
                this.counter++;
            }
        });
    },

    startTesting(subject) {
        switch (subject) {
            case 'Физика':
                this.question(this.determineQuantity(physics, this.numberOfQuestion(physics)));
                break;
            case 'Математика':
                this.question(this.determineQuantity(mathematics, this.numberOfQuestion(physics)));
                break;
            default:
                break;
        };
    },

    init() {
        this.enterName();
        this.start();
        while (this.repeat === true) {
            this.start();
        }
    },

    start() {
        this.subjectSelection();
        this.startTesting(this.subject);
        console.log(`Имя: ${this.name}\n Фамилия: ${this.surName}\n Выбранный предмет: ${this.subject}\n Правильных ответов: ${this.counter}
        `);
        this.repeat = confirm('Хотите пройти тест ещё раз?');
    },
}

appData.init();


