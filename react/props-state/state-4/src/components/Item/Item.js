import React, { Component } from 'react';

import './Item.css';

export default class Item extends Component {

    render() {
        return(
            <li className='item'>
                <span>{this.props.title}</span>
                <button onClick={this.props.onDelete} className="item__delete-btn">&#10006;</button>
            </li>
        )
    }
}