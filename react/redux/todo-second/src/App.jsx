import { useSelector } from 'react-redux';
import ActiveTasks from './components/ActiveTasks/ActiveTasks';
import CompletedTasks from './components/CompletedTasks/CompletedTasks';

const App = () => {
    const tasks = useSelector(state => state.tasks.tasks);
    const completedTasks = tasks.filter(task => task.completed);

    return (
        <>
            <ActiveTasks />
            {completedTasks.length && 
                <CompletedTasks tasks={completedTasks} />
            }
        </>
    )
}

export default App;