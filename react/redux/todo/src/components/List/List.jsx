import { useSelector, useDispatch } from 'react-redux';
import { editTodoAction, deleteTodoAction } from './../../redux/actions';

import ListItem from './../ListItem/ListItem';

const List = () => {
    const todos = useSelector(state => state.todos);
    const dispach = useDispatch();

    const editTodo = (id, value) => {
        const transfer = {
            id,
            value
        }
        dispach(editTodoAction(transfer))
    }

    const deleteTodo = (id) => {
        dispach(deleteTodoAction(id));
    }

    return (
        <ul className="list">
            {
                todos.map(item => {
                    return <ListItem
                        key={item.id}
                        text={item.text}
                        onChange={(value) => editTodo(item.id, value)}
                        onDelete={() => deleteTodo(item.id)}
                    />
                })
            }
        </ul>
    )
}

export default List;