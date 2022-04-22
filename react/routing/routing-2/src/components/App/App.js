import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './App.css';

import Header from './../Header/Header';
import Main from './../Main/Main';
import Register from './../Register/Register';
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";

const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Main />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;