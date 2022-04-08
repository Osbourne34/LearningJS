import React, { Component } from 'react';

import './TodoList.css';

import TodoItem from './../TodoItem/TodoItem';

export default class TodoList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const todoItems = this.props.todos.map((todo) => {
            return <TodoItem onDelete={() => this.props.deleteTodo(todo.id)} checked={() => this.props.isCheck(todo.id)} key={todo.id} {...todo} />
        })

        return (
            <ul className="todo-list">
                {todoItems}
            </ul>
        )
    }
}