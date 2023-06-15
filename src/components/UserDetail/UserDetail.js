import { useSelector, useDispatch } from 'react-redux';
import classes from './UserDetail.module.scss';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { deleteUsers } from '../../store/thunks/usersThunk';
import { useEffect } from 'react';
import { fetchUsers } from '../../store/thunks/usersThunk';
import Notification from '../Notification/Notification';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineCalendar } from 'react-icons/ai';
import { SlGlobe } from 'react-icons/sl';
import { CgNotes } from 'react-icons/cg';
const UserDetail = () => {
    const params = useParams();
    const users = useSelector((state) => state.users.users);
    const paramsId = params.userId;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const user = users.find((user) => user.id === paramsId);

    const deleteUserHandler = () => {
        dispatch(deleteUsers(user.id));
        navigate('/');
    };

    return (
        <>
            {users.length > 0 ? (
                <div className={classes['user-detail']}>
                    <div className={classes['user-detail__controls']}>
                        <button
                            className="btn btn--delete"
                            onClick={deleteUserHandler}
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
