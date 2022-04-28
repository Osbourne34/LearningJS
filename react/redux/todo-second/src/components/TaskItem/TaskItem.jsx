import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTaskText, toggleCompleted, removeTask } from './../../redux/todoSlice';

const TaskItem = ({ text, id, completed }) => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(text);

    let isAutoFocusInput = true;
    if (text) {
        isAutoFocusInput = false;
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleFocus = () => {
        dispatch(setTaskText({ id, text: inputValue }))
    }
    const handleChecked = () => {
        dispatch(toggleCompleted({ id }))
    }
    const handleClick = () => {
        dispatch(removeTask({ id }))
    }

    return (
        <li className="task-item">
            <div>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={handleChecked}
                />
                <input
                    autoFocus={isAutoFocusInput}
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    onBlur={handleFocus}
                    className={completed && 'completed'}
                />
            </div>
            <button
                className="task-item__delete-btn"
                onClick={handleClick}
            >
                Delete
            </button>
        </li>
    )
}

export default TaskItem;