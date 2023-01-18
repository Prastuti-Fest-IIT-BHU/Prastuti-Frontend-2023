import { useState } from "react";
import "./Modal.css"
const Modal = ({children, modal, handleModal}) => {

    const toggleModal = () => {
        handleModal(!modal)
    }
    return (
        <>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal}
                        className="overlay">
                    </div>
                    <div className="modal-content">
                       {children}
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