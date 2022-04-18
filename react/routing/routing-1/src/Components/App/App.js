import React from "react";
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Main from './../Main/Main';
import Category from "../Category/Category";
import Info from './../Info/Info';

const App = () => {
    return (
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/:category" element={<Category />} />
                <Route path="/:category/:id" element={<Info />} />
            </Routes>
        </div>
    )
}

export default App;