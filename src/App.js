import { useState } from "react"
import './App.css';
import Header from './component/Header';
import TaskList from './component/TaskList';

// const name = 'satish'
// const x = true;

function App() {

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

  // Delete Task

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id))
    console.log('deleted task', id);
  }

  //Toggle Reminder

  const toggleReminder = () =>{
    // console.log(id)
  }

  return (
    <div className="container">
      <Header />
     {taskList.length > 0 ? (<TaskList taskMap={taskList} onToggle = {toggleReminder}
        onDelete={deleteTask} />): ('No Task To Show')}
    </div>
  );
}

export default App;
