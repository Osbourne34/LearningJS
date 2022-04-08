import React, { Component } from "react";

import './Item.css';

export default class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { text, done, onChange } = this.props;

        return (
            <li>
                <label>
                    <input type="checkbox" onChange={onChange} checked={done} />
                    <span>{text}</span>
                </label>
            </li>
        )
    }
}