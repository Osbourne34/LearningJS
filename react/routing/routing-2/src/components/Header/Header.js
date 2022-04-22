import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return <header className="header">
        <div className="container">
            <div className="header__wrap">
                <Link className="header__logo" to="/">Vasya's Blog</Link>
                <nav className="header__nav">
                    <Link className="header__nav-link" to="register">Register</Link>
                    <Link className="header__nav-link" to="login">Login</Link>
                    <Link className="header__nav-link" to="register">Write a Story</Link>
                </nav>
            </div>
        </div>
    </header>
}

export default Header;