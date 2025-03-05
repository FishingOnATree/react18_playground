import React from "react";
import {Task} from "../types/types";

interface UpcomingTasksProps {
    tasks: Task[]; // Task array type from App.tsx
    setTasks: (tasks: Task[]) => void;
    completedTasks: Task[];
    setCompletedTasks: (tasks: Task[]) => void;
}
const UpcomingTasks: React.FC<UpcomingTasksProps> = ({tasks, setTasks, completedTasks, setCompletedTasks}) => {
    //const [tasks, setTasks] = React.useState<Task[]>([]);
    //const [completedTasks, setCompletedTasks] = React.useState<Task[]>([]);

    const markDone = (id: number) => {
        const updatedTasks = tasks.map((task) => task.id === id ? { ...task, done: true } : task);
        setTasks(updatedTasks);
        const completedTask = tasks.find((task) => task.id === id);
        if (completedTask) {
            setCompletedTasks([...completedTasks, completedTask]);
        }
    }


    React.useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    return (
        <React.Fragment>
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
                    {tasks.filter((t) => !t.done)?.map((t) => (
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
        </React.Fragment>
    )
}
export { UpcomingTasks }