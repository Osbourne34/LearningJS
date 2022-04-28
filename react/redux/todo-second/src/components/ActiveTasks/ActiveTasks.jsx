import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './../../redux/todoSlice';

import TaskList from './../TaskList/TaskList';

const ActiveTasks = () => {
    const tasks = useSelector(state => state.tasks.tasks);
    const activeTasks = tasks.filter(item => !item.completed);
    const dispatch = useDispatch();

    return (
        <div className="active-tasks">
            <div className="active-tasks__head">
                <h2>Задачи</h2>
                <button
                    onClick={() => dispatch(addTask())}
                >
                    Новая задача
                </button>
            </div>

            {activeTasks.length ?
                <TaskList tasks={activeTasks} />
                :
                <div>Добавьте задачи</div>
            }

        </div>
    )
}

export default ActiveTasks;