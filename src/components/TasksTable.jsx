/* eslint-disable react/prop-types */
const TasksTable = ({ tasks, deleteTask, completeTask }) => {

    return (
        <div className="my-4">
            <h2 className="text-center mb-4">Tareas</h2>
            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered align-middle">
                    <thead>
                        <tr>
                            <th scope="col">Acciones</th>
                            <th scope="col">Título</th>
                            <th scope="col" className="w-25">
                                Descripción
                            </th>
                            <th scope="col">Prioridad</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.length === 0 && (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No hay tareas
                                </td>
                            </tr>
                        )}
                        {tasks.map(
                            ({ id, title, description, priority, status }) => (
                                <tr key={id}>
                                    <th scope="row">
                                        
                                        <button 
                                            onClick={() => completeTask(id)}
                                            className={`btn btn-sm btn-success m-1 ${status === 'Completada' && 'disabled'}`}>
                                            <svg className="d-flex" xmlns="http://www.w3.org/2000/svg" width="1.1rem" height="1.1rem" viewBox="0 0 24 24"><path fill="white" d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
                                        </button>
                                        <button 
                                            className="btn btn-sm btn-warning m-1"
                                        >
                                            <svg className="d-flex" xmlns="http://www.w3.org/2000/svg" width="1.1rem" height="1.1rem" viewBox="0 0 24 24"><path fill="white" d="M10 15q-.425 0-.712-.288T9 14v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162zm9.6-9.2l1.425-1.4l-1.4-1.4L18.2 4.4zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6.5q.35 0 .575.175t.35.45t.087.55t-.287.525l-4.65 4.65q-.275.275-.425.638T7 10.75V15q0 .825.588 1.412T9 17h4.225q.4 0 .763-.15t.637-.425L19.3 11.75q.25-.25.525-.288t.55.088t.45.35t.175.575V19q0 .825-.587 1.413T19 21z"/></svg>
                                        </button>
                                        <button
                                            className="btn btn-sm btn-danger m-1"
                                            onClick={() => deleteTask(id)}
                                        >
                                            <svg className="d-flex" xmlns="http://www.w3.org/2000/svg" width="1.1rem" height="1.1rem" viewBox="0 0 24 24"><path fill="white" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"/></svg>
                                        </button>
                                    </th>
                                    <td>{title}</td>
                                    <td>{description}</td>
                                    <td className="text-center">
                                        {priority ? "Si" : "No"}
                                    </td>
                                    <td>
                                        <span
                                            className={`badge ${
                                                status === "Completada"
                                                    ? "bg-success"
                                                    : "bg-warning"
                                            }`}
                                        >
                                            {status}
                                        </span>
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TasksTable;
