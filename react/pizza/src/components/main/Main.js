import React from "react";

import './Main.css';

function Main(props) {
    const { pizza, sidebar } = props;

    return (
        <main className="main pt-5">
            <div className="container-xxl">
                <div className="row">
                    {pizza}
                    {sidebar}
                </div>
            </div>
        </main>
    )
}

export default Main;