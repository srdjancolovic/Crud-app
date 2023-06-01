import classes from './UserDetail.module.scss';
import { Link, useParams } from 'react-router-dom';

const UserDetail = () => {
    const params = useParams();
    return (
        <div className={classes['user-detail']}>
            <div className={classes['user-detail__controls']}>
                <button className="btn btn--delete">Delete </button>
                <Link
                    to={`/${params.userId}/edit`}
                    className="btn btn--primary"
                >
                    Edit
                </Link>
            </div>
            <div className={classes['user-detail__content']}>
                <h2 className={classes['user-detail__heading']}>Heading</h2>
                <span className={classes['user-detail__date']}>web</span>
                <p className={classes['user-detail__text']}>Desc</p>
            </div>
        </div>
    );
};

export default UserDetail;
