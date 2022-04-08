import React, { Component } from "react";

import './Form.css';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }

        this.onInput = this.onInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInput(e) { 
        this.setState({
            value: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" onChange={this.onInput} value={this.state.value} placeholder="Добавить"/>
            </form>
        )
    }
}

