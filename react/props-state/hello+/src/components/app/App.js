import React, {Component} from "react";

import './App.css';

import Hello from "../hello/Hello";

export default class App extends Component {

    render() {
        return(
            <div>
                <Hello num="4" />
                <Hello num="6" />
            </div>
        )
    }
} 