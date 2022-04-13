import React, { useState, useContext } from "react";

const MyContext = React.createContext();

function UseContextOne() {
    const [logged, setLogged] = useState('Anonymous');
    const message = 'Logged in as ';
    const login = 'Vasya';

    return (
        <MyContext.Provider value={logged}>
            <button onClick={() => setLogged(message + login)}>Log me in</button>
            <Message />
        </MyContext.Provider>
    )
}

function Message() {
    const context = useContext(MyContext);
    return (
        <p>{context}</p>
    )
}

export default UseContextOne;