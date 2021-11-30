import Task from './Task'
const TaskList = ({ taskMap, onDelete }) => {

    return (
        <>
            {taskMap.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete}/>
            ))}
        </>
    )
}

export default TaskList
