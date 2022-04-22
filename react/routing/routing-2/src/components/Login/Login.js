import React from "react";

const Login = () => {
    return (
        <div className="container">
            <form className="login form">
                <h2>Welcome back! Please Login</h2>
                <input className="input" type="email" placeholder="Enter your email" />
                <input className="input" type="password" placeholder="Enter your password" />
                <button className="button">Enter</button>
            </form>
        </div>
    )
}

export default Login;