import React, { Component } from 'react';

import './App.css';

import Quote from '../Quote';

const data = [
    {
        quote: 'Я такая счастливая!!!',
        author: '(c) Мария Соколова',
        color: 'brown'
    },
    {
        quote: 'Когда-нибудь я уеду на Украину и уже никогда не буду онлайн.',
        author: '(c) Наука и Техника',
        color: 'violet'
    },
    {
        quote: 'Спартак - Чемпион',
        author: '(c) Мария Соколова',
        color: 'yellow'
    },
    {
        quote: 'пипец... ПАЦАНЫ! МЕНЯ НАКРЫЛО!',
        author: '(c) Мария Соколова',
        color: 'orange'
    },
    {
        quote: 'Когда-нибудь я напишу книгу "Как перестать бухать и найти свою любовь". Ну а пока бухаем',
        author: '(c) Хэнк Муди',
        color: 'burgundy'
    },
    {
        quote: 'В Чебоксарах положили дорожную разметку на дохлую ворону',
        author: '(c) Хэнк Муди',
        color: 'darkblue'
    }
]

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuote: this.randomIndex(data.length)
        }
    }

    randomIndex(max) {
        return Math.floor(Math.random() * (max - 1))
    }

    onClick() {
        this.setState((state) => {
            const old = state.currentQuote;
            let newNum = this.randomIndex(data.length);
            while (old === newNum) {
                newNum = this.randomIndex(data.length);
            }
            return {
                currentQuote: newNum
            }
        })
    }

    render() {
        const { currentQuote } = this.state;

        let color = 'app app--';
        color += data[currentQuote].color;

        let quote = data[currentQuote].quote;
        let author = data[currentQuote].author;

        return (
            <div className={color}>
                <Quote
                    quote={quote}
                    author={author}
                    onClick={this.onClick.bind(this)}
                />
            </div>
        )
    }
}