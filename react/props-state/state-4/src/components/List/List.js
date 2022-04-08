import React, { Component } from 'react';

import './List.css';

import Item from './../Item';

export default class List extends Component {
    render() {

        const elements = this.props.data.map(item => {
            return <Item onDelete={() => this.props.onDelete(item.id)} key={item.id} title={item.title} />
        })

        return (
            <ul className='list'>
                {elements}
            </ul>
        )
    }
}