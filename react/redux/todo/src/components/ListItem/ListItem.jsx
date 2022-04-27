import { useRef } from "react";

const ListItem = ({ text, onChange, onDelete }) => {
    const elemInput = useRef();

    const handleEdit = () => {
        elemInput.current.focus();
        elemInput.current.readOnly = false;
    }

    const handleBlur = () => {
        elemInput.current.readOnly = true;
    }

    const handleDoubleClick = () => {
        elemInput.current.readOnly = false;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        elemInput.current.readOnly = false;
        elemInput.current.blur();
    }

    return <li className="list-item">
        <div className="list-item__inner">
            <form onSubmit={onSubmit}>
                <input
                    className="list-item__input"
                    ref={elemInput}
                    type="text"
                    readOnly
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    onBlur={handleBlur}
                    onDoubleClick={handleDoubleClick}
                />
            </form>
        </div>
        <div>
            <button
                className="list-item__button edit"
                onClick={handleEdit}
            >
                Edit
            </button>
            <button
                className="list-item__button delete"
                onClick={onDelete}
            >
                Delete
            </button>
        </div>
    </li>
}

export default ListItem;