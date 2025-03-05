import React from 'react';
import logo from './logo.svg';
import './App.css';

type Task = {
  id: number;
  task: string;
  priority: string;
  deadline: Date;
  done: boolean;
}

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
    console.log(task)
    console.log(deadline)
    if (task === '' || deadline === '') {
      alert('Please add a task!');
      return
    }
    const selectedDate = new Date(deadline);
    const newTask = {
      id: Math.round(Math.random() * 100000),
      task,
      priority,
      deadline: new Date(deadline),
      done: false,
    }
    setTasks([...tasks, newTask]);
  }

  const markDone = (id: number) => {
    const updatedTasks = tasks.map((task) => task.id === id ? { ...task, done: true } : task);
    setTasks(updatedTasks);
    const completedTask = tasks.find((task) => task.id === id);
    if (completedTask) {
      setCompletedTasks([...completedTasks, completedTask]);
    }
  }

  const upcomingTasks = tasks.filter((t) => !t.done);
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
          <h2 className="heading">Upcoming Tasks</h2>
          <div className="task-list" id="task-list">
            <table>
              <thead>
              <tr>
                <th>Task Name</th>
                <th>Priority</th>
                <th>Deadline</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              {upcomingTasks.map((t) => (
                  <tr key={t.id}>
                    <td>{t.task}</td>
                    <td>{t.priority}</td>
                    <td>{t.deadline.toString()}</td>
                    <td>
                      {!t.done && (
                          <button
                              className="mark-done"
                              onClick={() => markDone(t.id)}
                          >
                            Mark Done
                          </button>
                      )}
                    </td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>
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
