import React, { useContext, useState } from "react";

const MyContext = React.createContext();

function UseContextSecond() {
    const [data, setData] = useState([
        { todo: 'todo1' },
        { todo: 'todo2' },
        { todo: 'todo3' }
    ]);

    const addTodo = (value) => setData([...data, { todo: value }]);

    return (
        <div>
            <MyContext.Provider value={{ todos: data, addFuncTodo: addTodo }}>
                <AddForm />
                <ListTodoNormal data={data} />
                <ListTodoContext />
            </MyContext.Provider>
        </div >
    )
}

function AddForm() {
    const [inputValue, setInputValue] = useState('');
    const context = useContext(MyContext);

    const onSubmit = (e) => {
        e.preventDefault();
        context.addFuncTodo(inputValue);
        setInputValue('');
    }

    const onChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={inputValue} onChange={onChange} />
            <button>Add</button>
        </form>
    )
}

function ListTodoNormal(props) {
    return (
        <div>
            <h1>Обычный метод</h1>
            <ul>
                {props.data.map((item, id) => {
                    return <ItemTodo key={id} todo={item.todo} />
                })}
            </ul>
        </div>
    )
}

function ListTodoContext() {
    const context = useContext(MyContext);

    return (
        <div>
            <h1>useContext</h1>
            <ul>
                {
                    context.todos.map((item, id) => {
                        return <ItemTodo key={id} todo={item.todo} />
                    })
                }
            </ul>
        </div>
    )
}

function ItemTodo(props) {
    return (
        <li>{props.todo}</li>
    )
}

export default UseContextSecond;