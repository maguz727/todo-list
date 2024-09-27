/* eslint-disable react/prop-types */
import { useState } from "react";
import Swal from "sweetalert2";

const FormTasks = ({ addTask }) => {
    const [task, setTask] = useState({
        title: "",
        description: "",
        status: false,
        priority: false,
    });
    const { title, description, status, priority } = task;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !description.trim()) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Debes diligenciar todos los campos!",
                background: "#1b1b1f",
                color: "white",
                confirmButtonColor: "#0d6efd",
            });
            return;
        }

        // Agregar nueva tarea
        addTask({
            id: parseInt(Date.now().toString().slice(6)),
            ...task,
        });

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Se a guardado satisfactoriamente",
            showConfirmButton: true,
            timer: 1500,
            background: "#1b1b1f",
            color: "white",
            confirmButtonColor: "#0d6efd",
        });

        // Limpiar el formulario
        setTask({
            title: "",
            description: "",
            status: false,
            priority: false,
        });
    };

    const handleCancel = (e) => {
        e.preventDefault();
        // Limpiar el formulario
        setTask({
            title: "",
            description: "",
            status: false,
            priority: false,
        });
    };

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        // Obteniendo los datos del formulario y enviandolos al estado task
        setTask({
            ...task,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
            >
                <div className="form-floating mb-3">
                    <input
                        className="form-control mb-4"
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleChange}
                        placeholder="Ingrese la tarea"
                        id="titleInput"
                        required
                    />
                    <label htmlFor="titleInput" className="text-secondary">
                        Título <span className="text-danger">*</span>
                    </label>
                </div>
                <div className="form-floating mb-3">
                    <textarea
                        className="form-control mb-4"
                        name="description"
                        value={description}
                        onChange={handleChange}
                        placeholder="Ingrese una descripción"
                        id="descriptionInput"
                        required
                    />
                    <label
                        htmlFor="descriptionInput"
                        className="text-secondary"
                    >
                        Descripción <span className="text-danger">*</span>
                    </label>
                </div>
                <div className="form-check mb-4">
                    <input
                        type="checkbox"
                        name="priority"
                        id="inputCheck"
                        className="form-check-input"
                        checked={priority}
                        onChange={handleChange}
                    />
                    <label htmlFor="inputCheck">Con prioridad</label>
                </div>
                <div className="form-floating">
                    <select
                        className="form-select"
                        name="status"
                        value={status}
                        onChange={handleChange}
                        id="selectInput"
                    >
                        <option value={false}>Pendiente</option>
                        <option value={true}>Completado</option>
                    </select>
                    <label htmlFor="selectInput">
                        Estado <span className="text-danger">*</span>
                    </label>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4 mb-4">
                    <button className="btn btn-primary me-md-2" type="submit">
                        Guardar
                    </button>
                    <button
                        onClick={handleCancel}
                        type="button"
                        className="btn btn-outline-danger"
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormTasks;
