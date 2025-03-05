import React from 'react';
import './App.css';
import {UpcomingTasks} from "./components/UpcomingTasks";
import {Task} from "./types/types";

function App() {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = React.useState<Task[]>([]);
  const [task, setTask] = React.useState('');
  const [priority, setPriority] = React.useState('top');
  const [deadline, setDeadline] = React.useState('');

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value);
  };

  const handleDeadlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeadline(e.target.value);
  };

  const addTask = () => {
    if (task === '' || deadline === '') {
      alert('Please add a task!');
      return
    }
    const newTask = {
      id: Math.round(Math.random() * 100000),
      task,
      priority,
      deadline: new Date(deadline),
      done: false,
    }
    setTasks([...tasks, newTask]);
  }

  return (
      <div className="App">
        <header>
          <h1>Task Scheduler</h1>
        </header>
        <main>
          <div className="task-form">
            <input
                type="text"
                id="task"
                placeholder="Enter task..."
                value={task}
                onChange={handleTaskChange}
            />
            <select
                id="priority"
                value={priority}
                onChange={handlePriorityChange}
            >
              <option value="top">Top Priority</option>
              <option value="middle">Middle Priority</option>
              <option value="low">Less Priority</option>
            </select>
            <input
                type="date"
                id="deadline"
                value={deadline}
                onChange={handleDeadlineChange}
            />
            <button id="add-task" onClick={addTask}>
              Add Task
            </button>
          </div>
          <UpcomingTasks />
          <div className="completed-task-list">
            <h2 className="cheading">Completed Tasks</h2>
            <table>
              <thead>
              <tr>
                <th>Task Name</th>
                <th>Priority</th>
                <th>Deadline</th>
              </tr>
              </thead>
              <tbody>
              {completedTasks.map((ct) => (
                  <tr key={ct.id}>
                    <td>{ct.task}</td>
                    <td>{ct.priority}</td>
                    <td>{ct.deadline.toString()}</td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
  );

}

export default App;
