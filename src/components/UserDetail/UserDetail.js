import { useSelector } from 'react-redux';
import classes from './UserDetail.module.scss';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUsers } from '../../store/thunks/usersThunk';

const UserDetail = () => {
    const params = useParams();
    const users = useSelector((state) => state.users.users);
    const paramsId = params.userId;

    //Find user that has same id as params ID
    const user = users.find((user) => user.id === paramsId);

    const deleteUserHandler = () => {
        dispatchEvent(deleteUsers('TFrizXyolUistE5ygZf6'));
    };

    // console.log(user);

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
                <h2 className={classes['user-detail__heading']}>
                    {user.name}{' '}
                </h2>
                <span className={classes['user-detail__date']}>
                    {user.web}{' '}
                </span>
                <p className={classes['user-detail__text']}>{user.email}</p>
                <p className={classes['user-detail__text']}>{user.phone}</p>
            </div>
        </div>
    );
};

export default UserDetail;
