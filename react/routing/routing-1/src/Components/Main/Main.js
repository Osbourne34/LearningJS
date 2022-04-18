import React, { useEffect, useState } from "react";

import './Main.css';
import List from './../List/List';

const Main = () => {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/db/simpsons.json')
            .then(res => res.json())
            .then(result => {
                setCategories(Object.keys(result))
            });
    }, [])

    return (
        <>
            <div className="title">The Simpsons</div>
            {categories && <List data={categories} />}
        </>
    )
}

export default Main;