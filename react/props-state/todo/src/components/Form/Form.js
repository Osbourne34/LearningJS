import React, { Component } from 'react';

import './Form.css';

export default class Form extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form onSubmit={this.props.addTodo} className="form">
                <input value={this.props.value} onInput={this.props.inputValue} required className="form__input" type="text" />
                <button className="form__add-button" type="submit">Add todo</button>
            </form>
        )
    }
}