import React, { Component } from 'react';

import './App.css';

import Form from '../Form/Form';
import TodoList from '../TodoList/TodoList';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueTodo: '',
            id: 1,
            todos: []
        }
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            todos: [
                ...this.state.todos,
                { title: this.state.valueTodo, done: false, id: this.state.id++ }
            ],
            valueTodo: ''
        })
    }

    inputValue(event) {
        this.setState({
            valueTodo: this.state.valueTodo = event.target.value
        })
    }

    isCheck(id) {
        this.setState((state) => {
            const newArr = state.todos.map(item => {
                if (item.id === id) {
                    item.done = !item.done;
                }
                return item;
            })
            return {
                todos: newArr
            }
        })
    }

    deleteTodo(id) {
        this.setState((state) => {
            const newArr = state.todos.filter(item => {
                if (item.id !== id) {
                    return true;
                }
            })
            return {
                todos: newArr
            }
        })
    }

    render() {
        return (
            <div className='app'>
                <h1>Todo List</h1>
                <Form value={this.state.valueTodo} addTodo={this.addTodo.bind(this)} inputValue={this.inputValue.bind(this)} />
                <TodoList deleteTodo={this.deleteTodo.bind(this)} isCheck={this.isCheck.bind(this)} todos={this.state.todos} />
            </div>
        )
    }
}

