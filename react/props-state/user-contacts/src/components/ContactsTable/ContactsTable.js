import React, { Component } from "react";

import './ContactsTable.css';

import ContactItem from "./../ContactItem";

export default class ContactsTable extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { users, onDelete } = this.props;

        const elements = users.map(user => {
            return <ContactItem onDelete={() => onDelete(user.id)} key={user.id} {...user} />
        })

        return (
            <table className="contacts-table table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Телефон</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length ? elements : <div className="error-message">Добавьте пользователей</div>}
                </tbody>
            </table>
        )
    }
}