import React, { Component } from "react";

import './ContactItem.css';

export default class ContactItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, phone, email, onDelete } = this.props;

        return (
            <tr>
                <th scope="row">{name}</th>
                <td>{phone}</td>
                <td>{email}</td>
                <td>
                    <button className="btn btn-danger btn-sm" onClick={onDelete}>Удалить</button>
                </td>
            </tr>
        )
    }
}