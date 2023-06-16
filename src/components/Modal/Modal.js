import Popup from 'reactjs-popup';
const Modal = ({ openModal, closeModal, modalText, confirmBtnAction }) => {
    return (
        <Popup
            className="popup-content"
            open={openModal}
            onClose={closeModal}
            lockScroll
        >
            <div className="popup-text-btns">
                <p>{modalText}</p>

                <div className="popup-btns">
                    <button className="btn btn--primary" onClick={closeModal}>
                        NO
                    </button>
                    <button
                        className="btn btn--secondary"
                        onClick={confirmBtnAction}
                    >
                        YES
                    </button>
                </div>
            </div>
        </Popup>
    );
};

export default Modal;
