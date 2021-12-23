const fizika = [
    {
        question: 'Вопрос 1',
        answers: {
            a: 'Ответ A',
            b: 'Ответ B',
            c: 'Ответ C',
            d: 'Ответ D',
        },
        answer: 'b',
    },
    {
        question: 'Вопрос 2',
        answers: {
            a: 'Ответ A',
            b: 'Ответ B',
            c: 'Ответ C',
            d: 'Ответ D',
        },
        answer: 'c',
    },
];


fizika.forEach(element => {

    let a = prompt();

    if (a === element.answer) {
        return console.log('Верный ответ');
    };
    return console.log('Неверный ответ');
});