import { useState } from "react"
import './App.css';
import Header from './component/Header';
import TaskList from './component/TaskList';
import AddTask from "./component/AddTask";

// const name = 'satish'
// const x = true;

const App = () => {
  const [showAddTask, setShowAddTask ] = useState(false)

  const [taskList, setTaskList] = useState([
    {
      id: '1',
      text: 'Doctors Appointment',
      day: '5th Feb 2021',
      reminder: true
    },

    {
      id: '2',
      text: 'Metting at School',
      day: '25th Feb 2021',
      reminder: true
    },
    {
      id: '3',
      text: 'Food Shopping',
      day: '15th Feb 2021',
      reminder: true
    },
  ]
  )

  //Add Task

  const AddTask1 = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task}
    setTaskList([...taskList, newTask])
    console.log('===newTask====',newTask)
  }

  // Delete Task

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id))
    console.log('deleted task', id);
  }

  //Toggle Reminder

  const toggleReminder = (id) =>{
    setTaskList(
      taskList.map((task) => task.id === id ? {...task, reminder: !task.reminder} :task))
    // console.log(id)
  }

  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd = {showAddTask} 
        />
      { showAddTask && <AddTask 
        onAdd = {AddTask1}
      />
      }
     {taskList.length > 0 ? (<TaskList taskMap={taskList} 
        onDelete={deleteTask}
        onToggle={toggleReminder}
         />): ('No Task To Show')}
    </div>
  );
}

export default App;
