import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
const Modal = ({ openModal, closeModal }) => {
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate('/');
    };

    return (
        <Popup
            className="popup-content"
            open={openModal}
            onClose={closeModal}
            lockScroll
            // trigger={<button> Trigger</button>}
        >
            <div className="popup-text-btns">
                <p>
                    Are you sure you want to cancel? All unsaved changes will be
                    lost!
                </p>

                <div className="popup-btns">
                    <button className="btn btn--primary" onClick={closeModal}>
                        NO
                    </button>
                    <button
                        className="btn btn--secondary"
                        onClick={navigateHandler}
                    >
                        YES
                    </button>
                </div>
            </div>
        </Popup>
    );
};

export default Modal;
