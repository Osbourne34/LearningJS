import React, { Component } from 'react';

import './App.css';

import List from './../List';
import Form from './../Form';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    title: 'text1',
                    id: 1
                },
                {
                    title: 'text2',
                    id: 2
                },
                {
                    title: 'text3',
                    id: 3
                }
            ]
        }
        this.maxId = 4;

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    addItem(value) {
        this.setState(({data}) => {
            const newArr = [...data, {title: value, id: this.maxId++}];

            return {
                data: newArr
            }
        })
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const newArr = data.filter(item => item.id !== id);

            return {
                data: newArr
            }
        })
    }

    render() {
        const { data } = this.state;

        return (
            <div className="app">
                <div className="app__wrapper">
                    <List onDelete={this.deleteItem} data={data} />
                    <Form onSubmit={this.addItem} />
                </div>
            </div>
        )
    }
}