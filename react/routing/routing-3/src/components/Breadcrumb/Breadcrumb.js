import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb = () => {
    const location = useLocation();
    const array = location.pathname.split('/')

    return (
        <>
            <ul className="breadcrumb">
                {
                    array.map(item => {
                        if (item === array[0]) {
                            return <li className="breadcrumb__item">
                                <Link
                                    className="breadcrumb__link"
                                    key={item}
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                        }
                        if (item === array[array.length - 1]) {
                            return <li className="breadcrumb__item">
                                <div
                                    key={item}
                                    className="breadcrumb__active"
                                >
                                    {item}
                                </div>
                            </li>
                        } else {
                            return <li className="breadcrumb__item">
                                <Link
                                    className="breadcrumb__link"
                                    key={item}
                                    to={"/" + item}
                                >
                                    {item}
                                </Link>
                            </li>
                        }
                    })
                }
            </ul>
        </>

    )
}

export default Breadcrumb;