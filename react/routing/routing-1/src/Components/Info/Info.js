import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import './Info.css';

const Info = () => {
    const { category, id } = useParams();
    const [item, setItem] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/db/simpsons.json')
            .then(res => res.json())
            .then(result => setItem(result[category][id - 1]));
    }, [])

    return (
        <>
            <button onClick={() => navigate(-1)} className="back-link" to="/">Back</button>
            {item &&
                <div className="info">
                    <p className="info__category">{item.category}</p>
                    <div className="title">{item.name}</div>
                    <div className="info__descr">{item.description}</div>
                </div>
            }
        </>
    )
}

export default Info;