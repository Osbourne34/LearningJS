import React from "react";
import { NavLink } from 'react-router-dom';

import './Header.css';

function Header() {
    return (
        <header className="header bg-dark">
            <div className="container-fluid">
                <NavLink to="/" className="header__link">Build your pizza</NavLink>
                <NavLink to="ingredients" className="header__link">Ingredients</NavLink>
            </div>
        </header>
    )
}

export default Header;