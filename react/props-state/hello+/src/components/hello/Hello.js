import React, {Component} from "react";

export default class Hello extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.num
        }
    }

    counter = () => {
        this.setState({
            counter: +this.state.counter + 1
        })
    }

    render() {
        return(
            <div className="hello">
                <h1>Hello Wordl!</h1>
                <p>This is a one thing</p>
                <button onClick={this.counter}>Click me</button>
                <div>I have been toggled <span>{this.state.counter}</span> times</div>
            </div>
        )
    }
} 