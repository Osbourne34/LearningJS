import React from "react";

const Register = () => {

    return (
        <div className="container">
            <form className="register form">
                <h2>Welcome Please Signup here</h2>
                <input className="input" type="text" placeholder="Enter your name" />
                <input className="input" type="email" placeholder="Enter your email" />
                <input className="input" type="password" placeholder="Enter your password" />
                <button className="button">Submit</button>
            </form>
        </div>
    )
}

export default Register;