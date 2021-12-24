import { physics } from './questions.js';

const appData = {
    name: '',
    surName: '',
    subject: '',
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


    random(maxNum, minNum) {
        let arr = [];
        let count = 0;
        while (count != 5) {
            let num = Math.round(Math.random() * (minNum - maxNum)) + maxNum;
            arr.push(num);
            count++;
        }
        return arr;
    },

    random(array) {
        return array.map();
    },

    question(questions) {
        questions.forEach(element => {
            let answer = prompt(`${element.question}\n${Object.values(element.answers)}`);
            if (answer === element.answer) {
                return console.log('Верно');
            }
            return console.log('Не верно');
        });
    },

    startTesting(subject) {
        if (subject === 'Физика') {
            this.question(physics);
        };
    },

    start() {
        this.enterName();
        this.subjectSelection();
        this.startTesting(this.subject);
        return console.log(this.name, this.surName, this.subject);
    },
}

appData.start();


