import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ tasks }) => {
    return (
        <ul>
            {
                tasks.map(task => {
                    return <TaskItem key={task.id} {...task} />
                })
            }
        </ul>
    )
}

export default TaskList;