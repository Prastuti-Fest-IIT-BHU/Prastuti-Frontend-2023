import { useState } from "react";
import "./Modal.css"
const Modal = () => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }
    return (
        <>
            <button
                onClick={toggleModal}
                className="btn-modal">OPEN</button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal}
                        className="overlay">
                    </div>
                    <div className="modal-content">
                        lorem-ipsum
                    </div>

                    <button onClick={toggleModal}>
                        CLOSE
                    </button>
                </div>
            )}
        </>
    );
}

export default Modal;