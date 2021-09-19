import React from "react";
import ReactDOM from "react-dom";
import FocusTrap  from 'focus-trap-react';
import './Modal.scss';

const Modal = (modalRef,
    buttonRef,
    closeModal,) => {
    return ReactDOM.createPortal(
        <FocusTrap>
            <aside
                tag="aside"
                role="dialog"
                tabIndex="-1"
                aria-modal="true"
                className="modal-cover"
            >
                <div className="modal-area" ref={modalRef}>
                <button
                    ref={buttonRef}
                    aria-label="Close Modal"
                    aria-labelledby="close-modal"
                    className="_modal-close"
                    onClick={closeModal}
                >
                    <span id="close-modal" className="_hide-visual">
                    Close
                    </span>
                    <svg className="_modal-close-icon" viewBox="0 0 40 40">
                    <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                    </svg>
                </button>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="name@example.com"
                            />
                        </div>
                        <div className="form-group">
                            <button className="form-control btn btn-primary" type="submit">
                            Submit
                            </button>
                        </div>
                    </form>
                </div>
                </div>
            </aside>
        </FocusTrap>,document.body
    );
};

export default Modal;