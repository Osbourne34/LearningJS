import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from './../../redux/actions';

const AddForm = () => {
    const elemInput = useRef();
    const dispach = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (elemInput.current.value.trim().length) {
            dispach(addTodoAction(elemInput.current.value))
            elemInput.current.value = '';
        }
    }

    return (
        <form
            className="form"
            onSubmit={handleSubmit}
        >
            <input
                className="input"
                ref={elemInput}
                type="text"
            />
            <button
                className="button"
            >
                Добавить
            </button>
        </form>
    )
}

export default AddForm;