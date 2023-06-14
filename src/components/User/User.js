import classes from './User.module.scss';

import { Link, useParams } from 'react-router-dom';
const userItem = ({ id, name, email, phone, web }) => {
    return (
        <li className={classes['user-item']}>
            <Link to={`/${id}`}>
                <div className={classes['user-item__title-text']}>
                    <h2>{name} </h2>
                    <p>{email} </p>
                </div>
                <div className={classes['user-item__web-email']}>
                    <span className={classes['user-item__date']}>{web} </span>
                    <span className={classes['user-item__date']}>{phone} </span>
                </div>
            </Link>
        </li>
    );
};

export default userItem;
