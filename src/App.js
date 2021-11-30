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

const deleteTask = (id) =>{
  console.log('deleted task', id);
}

  return (
    <div className="container">
      <Header />
      <TaskList taskMap = {taskList} onDelete={deleteTask} />

      {/* <h2>Hello{x ? 'Yes' : 'NO'}</h2> */}
    </div>
  );
}

export default App;
