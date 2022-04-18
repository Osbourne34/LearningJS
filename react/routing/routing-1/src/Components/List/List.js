import React from "react";
import { Link } from "react-router-dom";

import './List.css';

const List = (props) => {
    const { data } = props;

    const listItems = data.map((item, id) => {
        if (typeof item == 'object') {
            return <li className="list__item" key={id}>
                <Link className="list__link" to={item.id}>{item.name}</Link>
            </li>
        } else {
            return <li className="list__item" key={id}>
                <Link className="list__link" to={item}>{item}</Link>
            </li>
        }
    })

    return (
        <ul className="list">
            {listItems}
        </ul>
    )
}

export default List;