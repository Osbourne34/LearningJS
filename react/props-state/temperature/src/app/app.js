import React, { Component } from "react";

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            temperatute: 0
        }
        this.step = 10;
    }

    increment() {
        this.setState({
            temperatute: this.state.temperatute + 1
        })
    }
    decrement() {
        this.setState({
            temperatute: this.state.temperatute - 1
        })
    }
    incrementStep() {
        this.setState({
            temperatute: this.state.temperatute + this.step
        })
    }
    decrementStep() {
        this.setState({
            temperatute: this.state.temperatute - this.step
        })
    }


    render() {
        let message;
        let ice = 0;
        let water = 99;
        if (this.state.temperatute <= ice) {
            message = 'Лед'
        } else if (this.state.temperatute > ice && this.state.temperatute <= water) {
            message = 'Вода'
        } else {
            message = 'Пар'
        }

        return (
            <div className="app">
                <p>{message} {this.state.temperatute}</p>
                <button onClick={this.increment.bind(this)}>+</button>
                <button onClick={this.incrementStep.bind(this)}>+10</button>
                <button onClick={this.decrement.bind(this)}>-</button>
                <button onClick={this.decrementStep.bind(this)}>-10</button>
            </div>
        )
    }
}