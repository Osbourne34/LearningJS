import React, { Component } from "react";
import './post.css';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: false
        }
    }

    onDarkMode = (e) => {
        this.setState({
            mode: e.target.checked
        })
    } 

    render() {
        let classNames = 'post';
        this.state.mode ? classNames += ' dark' : classNames += ' light';

        return (
            <div className={classNames}>
                <h2 className="post__title">{this.props.title}</h2>
                <p className="post__text">{this.props.text}</p>
                <label className="post__label">
                    <input onChange={this.onDarkMode} className="post__checkbox" type="checkbox" />
                    <span>Dark Mode</span>
                </label>
            </div>
        )
    }
}