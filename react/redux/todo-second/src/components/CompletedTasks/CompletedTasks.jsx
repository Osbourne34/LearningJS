import { useDispatch } from 'react-redux';
import { clearCompletedTasks } from './../../redux/todoSlice';
import TaskList from "./../TaskList/TaskList";

const CompletedTasks = ({ tasks }) => {
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(clearCompletedTasks());
    }

    return (
        <div className="active-tasks">
            <div className="active-tasks__head">
                <h2>Выполненные</h2>
                <button
                    onClick={handleClick}
                >
                    Очистить
                </button>
            </div>

            <TaskList tasks={tasks} />

        </div>
    )
}

export default CompletedTasks;