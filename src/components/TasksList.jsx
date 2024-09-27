/* eslint-disable react/prop-types */
import { useState } from "react";
import Swal from "sweetalert2";
import ButtonStatus from "./ButtonStatus";

const TasksList = ({ tasks, deleteTask, sortTasksByStatus, toogleStatus }) => {
    
    const [viewComplete, setViewComplete] = useState(false);
    const pendingTasks = tasks.find((task) => !task.status);

    const handleViewToggle = (e) => {
        const { checked } = e.target;
        setViewComplete(checked);
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Estás seguro?",
            text: "No podrás revertirlo!",
            icon: "warning",
            background: "#1b1b1f",
            showCancelButton: true,
            confirmButtonColor: "#0d6efd",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminarlo!",
            color: "white",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteTask(id);
                Swal.fire({
                    title: "Eliminado!",
                    text: "Su tarea ha sido eliminada.",
                    icon: "success",
                    background: "#1b1b1f",
                    color: "white",
                    confirmButtonColor: "#0d6efd",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };

    return (
        <div>
            <div className="d-flex flex-column">
                <h2 className="text-center mb-4">Lista de Tareas</h2>
                <div className="form-check mb-4">
                    <input
                        type="checkbox"
                        name="complete"
                        id="viewComplete"
                        className="form-check-input"
                        checked={viewComplete}
                        onChange={handleViewToggle}
                    />
                    <label htmlFor="viewComplete">Completadas</label>
                </div>
                {tasks.length === 0 || !pendingTasks && !viewComplete 
                    ? 
                        <div className="col-md-4w w-100">
                            <div className="card mb-2">
                                <div className="card-body text-center">
                                    <h5 className="card-title">
                                        No hay tareas Pendientes 😎
                                    </h5>
                                </div>
                            </div>
                        </div>
                    : null}
                {/* TASKS LIST */}
                {sortTasksByStatus.map(
                    ({ id, title, description, priority, status }) => (
                        <div
                            className={`col-md-4w w-100 ${
                                status && !viewComplete
                                    ? "d-none"
                                    : null
                            }`}
                            key={id}
                        >
                            <div className="card mb-2">
                                <div className="card-body d-flex justify-content-between align-items-start flex-wrap">
                                    <div className="d-flex gap-2 flex-wrap mb-2">
                                        <h5
                                            className={`card-title ${
                                                status &&
                                                "text-secondary"
                                            }`}
                                        >
                                            {title}
                                        </h5>
                                        <span className="text-secondary">
                                            |
                                        </span>
                                        <p
                                            className={`card-text ${
                                                status &&
                                                "text-secondary"
                                            }`}
                                        >
                                            {description}
                                        </p>
                                    </div>
                                    <div>
                                        <span
                                            className={`badge ${
                                                priority && "bg-danger"
                                            }`}
                                        >
                                            {priority && "Prioritaria"}
                                        </span>
                                    </div>
                                </div>
                                <div className="card-body d-flex justify-content-between align-items-end">
                                    <div className="d-flex gap-2">
                                        <ButtonStatus toogleStatus={toogleStatus} id={id} status={status}/>

                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleDelete(id)}
                                        >
                                            <svg
                                                className="d-flex"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1.1rem"
                                                height="1.1rem"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div>
                                        <span
                                            className={`badge ${
                                                status
                                                    ? "bg-success"
                                                    : "bg-secondary"
                                            }`}
                                        >
                                            {status ? 'Completada' : 'Pendiente'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
            
        </div>
    );
};

export default TasksList;
