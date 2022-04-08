import React, { Component } from 'react';

import './Form.css';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    render() {
        let { inputValue } = this.state;
        const { onSubmit } = this.props;

        return (
            <form className="form" onSubmit={(e) => {
                e.preventDefault()
                onSubmit(inputValue);
                this.setState({
                    inputValue: ''
                })
            }}>
                <input 
                    className="form__input" 
                    type="text" 
                    value={inputValue} 
                    onChange={this.onChange}
                    required
                />
            </form>
        )
    }
}