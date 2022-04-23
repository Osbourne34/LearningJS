import React from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

import './App.css';

import Breadcrumb from './../Breadcrumb/Breadcrumb';

const App = () => {
    return <BrowserRouter >
        <Routes path="/">
            <Route index element={<Links />} />
            <Route path="users" element={<Users breadcrumb={<Breadcrumb />} />} />
            <Route path="posts" element={<Posts breadcrumb={<Breadcrumb />} />} />
            <Route path="users/:user" element={<User breadcrumb={<Breadcrumb />} />} />
            <Route path="posts/:post" element={<Post breadcrumb={<Breadcrumb />} />} />
        </Routes>
    </BrowserRouter>
}

const Links = () => {
    return (
        <ul>
            <li><Link to="users">Users</Link></li>
            <li><Link to="posts">Posts</Link></li>
        </ul>
    )
}

const Users = ({ breadcrumb }) => {
    return (
        <>
            {breadcrumb}
            <ul>
                <li><Link to="vasya">Vasya</Link></li>
                <li><Link to="petya">Petya</Link></li>
                <li><Link to="jenya">Jenya</Link></li>
            </ul>
        </>
    )
}

const Posts = ({ breadcrumb }) => {
    return (
        <>
            {breadcrumb}
            <ul>
                <li><Link to="javascript">Javascript</Link></li>
                <li><Link to="react">React</Link></li>
                <li><Link to="angular">Angular</Link></li>
            </ul>
        </>
    )
}

const User = ({ breadcrumb }) => {
    const params = useParams();
    return (
        <>
            {breadcrumb}
            <div>{params.user}</div>
        </>

    )
}

const Post = ({ breadcrumb }) => {
    const params = useParams();
    return (
        <>
            {breadcrumb}
            <div>{params.post}</div>
        </>
    )
}

export default App;