import React, { Component } from 'react';

import './TodoItem.css';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let todoTextClass = 'todo-item__text';
        this.props.done ? todoTextClass += ' done' : todoTextClass += '';

        return (
            <li className="todo-item">
                <label className="todo-item__label">
                    <input
                        className="todo-item__checkbox"
                        type="checkbox"
                        checked={this.props.done}
                        onChange={this.props.checked}
                    />
                    <span className={todoTextClass}>
                        {this.props.title}
                    </span>
                </label>
                <button onClick={this.props.onDelete} className="todo-item__delete-btn">Delete</button>
            </li>
        )
    }
}