import { useSelector } from 'react-redux';

import './App.css';

import AddForm from './../AddForm/AddForm';
import List from './../List/List';

const App = () => {
    const todos = useSelector(state => state.todos);

    return (
        <>
            <div className="container">
                <AddForm />
                {todos.length
                    ?
                    <List />
                    :
                    <div className="empty">Пусто</div>
                }
            </div>
        </>
    )
}

export default App;