import Task from './Task'
const TaskList = ({ taskMap, onDelete, onToggle }) => {

    return (
        <>
            {taskMap.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} toggle={onToggle}/>
            ))}
        </>
    )
}

export default TaskList
