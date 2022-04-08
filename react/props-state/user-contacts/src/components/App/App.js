import React, { Component } from 'react';

import './App.css';

import AddFrom from './../AddForm';
import ContactsTable from './../ContactsTable';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        this.maxId = 1;

        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    addUser(data) {
        data.id = this.maxId++
        this.setState({
            users: [...this.state.users, data]
        });
    }

    deleteUser(id) {
        this.setState((state) => {
            const newArr = state.users.filter(user => user.id !== id);

            return {
                users: newArr
            }
        })
    }

    render() {
        const { users } = this.state;

        return (
            <div className="app container-xxl">
                <AddFrom onSubmit={this.addUser} />
                <ContactsTable users={users} onDelete={this.deleteUser} />
            </div>
        )
    }
}