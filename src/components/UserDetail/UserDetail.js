import { useSelector, useDispatch } from 'react-redux';
import classes from './UserDetail.module.scss';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { deleteUsers } from '../../store/thunks/usersThunk';
import { useEffect } from 'react';
import { fetchUsers } from '../../store/thunks/usersThunk';
import Notification from '../Notification/Notification';
import { uiActions } from '../../store/reducers/uiReducer';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineCalendar } from 'react-icons/ai';
import { SlGlobe } from 'react-icons/sl';
import { CgNotes } from 'react-icons/cg';
import { BiArrowBack } from 'react-icons/bi';
import Modal from '../Modal/Modal';
const UserDetail = () => {
    const params = useParams();
    const users = useSelector((state) => state.users.users);
    const modalOpen = useSelector((state) => state.ui.showModal);
    const paramsId = params.userId;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const user = users.find((user) => user.id === paramsId);

    const openModalHandler = () => {
        dispatch(uiActions.openModal());
    };

    const handlePopupClose = () => {
        dispatch(uiActions.closeModal());
    };

    const deleteUserHandler = () => {
        dispatch(deleteUsers(user.id));
        dispatch(uiActions.closeModal());
        navigate('/');
    };

    return (
        <>
            <Modal
                openModal={modalOpen}
                closeModal={handlePopupClose}
                modalText="Are you sure you want to delete this user? You can not undo this action!"
                confirmBtnAction={deleteUserHandler}
            />

            {users.length > 0 ? (
                <div className={classes['user-detail']}>
                    <div className={classes['user-detail__buttons']}>
                        <Link to=".." className="btn btn--no-border">
                            <BiArrowBack /> Back
                        </Link>
                        <div className={classes['user-detail__controls']}>
                            <button
                                className="btn btn--delete"
                                onClick={openModalHandler}
                            >
                                Delete{' '}
                            </button>
                            <Link
                                to={`/${params.userId}/edit`}
                                className="btn btn--primary"
                            >
                                Edit
                            </Link>
                        </div>
                    </div>
                    <div className={classes['user-detail__content']}>
                        <div className={classes['user-detail__img-name']}>
                            <h2 className={classes['user-detail__heading']}>
                                {user.name}
                            </h2>
                        </div>

                        <p className={classes['user-detail__text']}>
                            <AiOutlineCalendar /> {user.date}
                        </p>
                        <p className={classes['user-detail__text']}>
                            <AiOutlineMail /> {user.email}
                        </p>
                        <p className={classes['user-detail__text']}>
                            <AiOutlinePhone />
                            {user.phone
                                ? user.phone
                                : 'Phone number is not added!'}
                        </p>
                        <span className={classes['user-detail__text']}>
                            <SlGlobe />{' '}
                            {user.web ? user.web : 'No website link'}
                        </span>
                        <p className={classes['user-detail__text']}>
                            <CgNotes />
                            {user.notes ? user.notes : 'No additional notes!'}
                        </p>
                    </div>
                </div>
            ) : (
                <Notification message="Loading user details" />
            )}
        </>
    );
};

export default UserDetail;
