import { useSelector } from 'react-redux';
import classes from './UserDetail.module.scss';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUsers } from '../../store/thunks/usersThunk';

const UserDetail = () => {
    const params = useParams();
    const users = useSelector((state) => state.users.users);
    const paramsId = params.userId;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //Find user that has same id as params ID
    const user = users.find((user) => user.id === paramsId);
    console.log(typeof user.date);

    const deleteUserHandler = () => {
        dispatch(deleteUsers(user.id));
        navigate('/');
    };

    return (
        <div className={classes['user-detail']}>
            <div className={classes['user-detail__controls']}>
                <button className="btn btn--delete" onClick={deleteUserHandler}>
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
                    User added on: {user.date}
                </p>
                <p className={classes['user-detail__text']}>
                    Email: {user.email}
                </p>
                <p className={classes['user-detail__text']}>
                    Phone:{' '}
                    {user.phone ? user.phone : 'Phone number is not added!'}
                </p>
                <span className={classes['user-detail__text']}>
                    Website: {user.web ? user.web : 'No website link'}
                </span>
                <p className={classes['user-detail__text']}>
                    Additional notes:{' '}
                    {user.notes ? user.notes : 'No additional notes!'}
                </p>
            </div>
        </div>
    );
};

export default UserDetail;
