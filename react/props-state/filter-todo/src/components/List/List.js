import React, { Component } from "react";

import './List.css';

import Item from './../Item';

export default class List extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { data, onChange } = this.props;

        const done = data.filter(item => item.done)
            .map(item => <Item onChange={() => onChange(item.id)} key={item.id} {...item} />);
        const notDone = data.filter(item => !item.done)
            .map(item => <Item onChange={() => onChange(item.id)} key={item.id} {...item} />);

        return (
            <div>
                {notDone.length ? <ul><li><h3>Не сделано</h3></li>{notDone}</ul> : false}
                {done.length ? <ul><li><h3>Cделано</h3></li>{done}</ul> : false}
            </div>
        )
    }
}