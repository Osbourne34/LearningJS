import React, { Component } from 'react';

import './Quote.css';

export default class Quote extends Component {
    render() {
        const { quote, author, onClick } = this.props;

        return (
            <div className="quote">
                <div className="quote__head">
                    <div className="quote__double-quote">&quot;</div>
                    <p className="quote__text">{quote}</p>
                </div>
                <div className="quote__author">{author}</div>
                <button onClick={onClick} className="quote__next-btn">New Quote</button>
            </div>
        )
    }
}