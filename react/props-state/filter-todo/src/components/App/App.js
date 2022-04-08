import React, { Component } from "react";

import './App.css';

import Form from './../Form';
import List from './../List';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                { text: '2323', done: false, id: 1 },
                { text: '23sd', done: false, id: 2 },
                { text: 'asdhgh', done: true, id: 3 },
            ]
        }
        this.maxId = 4;

        this.toggleDone = this.toggleDone.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    addItem(value) {
        this.setState({
            data: [...this.state.data, { text: value, done: false, id: this.maxId++ }]
        })
    }

    toggleDone(id) {
        this.setState(({ data }) => {
            const newArr = data.map(item => {
                if (item.id === id) {
                    item.done = !item.done
                }
                return item;
            })

            return {
                data: newArr
            }
        })
    }

    render() {
        const { data } = this.state;

        return (
            <div className="app">
                <Form onSubmit={this.addItem} />
                <List onChange={this.toggleDone} data={data} />
            </div>
        )
    }
}