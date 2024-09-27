/* eslint-disable react/prop-types */
import { useState } from "react";
import Swal from "sweetalert2";

const ButtonStatus = ({ toogleStatus, id, status }) => {
    const [state, setState] = useState(status);

    const handleToogleState = () => {
        setState(!state);

        const alertConfig = {
            position: "center",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
            background: "#1b1b1f",
            color: "white",
            confirmButtonColor: "#0d6efd",
        };

        !state 
            ? Swal.fire({
                ...alertConfig,
                title: "Se completó la tarea satisfactoriamente"
            }) 
            : Swal.fire({
                ...alertConfig,
                title: "Se ha revertido la tarea"
            });

        toogleStatus(id, !state);
    };

    return (
        <>
            {!state ? (
                <button
                    onClick={handleToogleState}
                    className="btn btn-sm btn-success"
                >
                    <svg
                        className="d-flex"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.1rem"
                        height="1.1rem"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="white"
                            d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                        />
                    </svg>
                </button>
            ) : (
                <button
                    className="btn btn-sm btn-primary"
                    onClick={handleToogleState}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill="white"
                            d="M1.22 6.28a.75.75 0 0 1 0-1.06l3.5-3.5a.749.749 0 1 1 1.06 1.06L3.561 5h7.188l.001.007L10.749 5q.088 0 .171.019A4.501 4.501 0 0 1 10.5 14H8.796a.75.75 0 0 1 0-1.5H10.5a3 3 0 1 0 0-6H3.561L5.78 8.72a.749.749 0 1 1-1.06 1.06z"
                        />
                    </svg>
                </button>
            )}
        </>
    );
};

export default ButtonStatus;

