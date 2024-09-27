import { useEffect, useState } from "react";
import FormTasks from "./components/FormTasks";
import TasksList from "./components/TasksList";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const bdTasks = JSON.parse(localStorage.getItem("tasks")) || [];

const App = () => {

    const [tasks, setTasks] = useState(bdTasks);

    console.log(tasks)

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]); 

    const sortTasksByStatus = tasks.sort((a, b) =>
        a.status - b.status
    );

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toogleStatus = (id, status) => {
        setTasks(
            tasks.map((t) => (t.id === id ? { ...t, status: status } : t))
        );
    };

    return (
        <div className="container mt-5 mb-5">
            <Header />
            <FormTasks addTask={addTask} />
            <hr />
            <TasksList
                tasks={tasks}
                deleteTask={deleteTask}
                sortTasksByStatus={sortTasksByStatus}
                toogleStatus={toogleStatus}
            />
            <Footer />
        </div>
    );
};

export default App;
