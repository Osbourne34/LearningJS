import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import List from './../List/List';

const Category = () => {
    const { category } = useParams();
    const [categoryList, setCategoryList] = useState(null);
    const navigate = useNavigate(-1);

    useEffect(() => {
        fetch('http://localhost:3000/db/simpsons.json')
            .then(res => res.json())
            .then(result => setCategoryList(result[category]));
    }, [])

    return (
        <>
            <button onClick={() => navigate(-1)} className="back-link">Back</button>
            <div className="title">{category}</div>
            {categoryList && <List data={categoryList} />}
        </>
    )
}

export default Category;