import React, { Component } from "react";
import './app.css';

import Post from "../post/post";

export default class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Post 
                    title="Render Props!" 
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quae eveniet, corporis cum magni ut!"
                />
            </div>
        )
    }
}
