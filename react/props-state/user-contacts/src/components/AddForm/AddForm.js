import React, { Component } from 'react';

import './AddForm.css';

export default class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const type = target.name;
        const value = target.value;

        this.setState({
            [type]: value
        })
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const infoUser = {name: this.state.name, phone: this.state.phone, email: this.state.email}
        this.props.onSubmit({...infoUser});
        this.setState({
            name: '',
            phone: '',
            email: ''
        })
    }

    render() {
        return (
            <form
                className="add-form d-flex justify-content-center align-items-end"
                onSubmit={this.handleFormSubmit}>
                <label className="add-form__label">
                    <span>Имя</span>
                    <input name="name" onChange={this.handleInputChange} value={this.state.name} className="form-control" type="text" required />
                </label>
                <label className="add-form__label">
                    <span>Телефон</span>
                    <input name="phone" onChange={this.handleInputChange} value={this.state.phone} className="form-control" type="tel" required />
                </label>
                <label className="add-form__label">
                    <span>E-mail</span>
                    <input name="email" onChange={this.handleInputChange} value={this.state.email} className="form-control" type="email" required />
                </label>

                <button className="btn btn-success" type="submit">Добавить</button>
            </form>
        )
    }
}