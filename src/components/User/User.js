import classes from './User.module.scss';

import { Link, useParams } from 'react-router-dom';
const userItem = ({ id, name, email, city, web }) => {
    return (
        <li className={classes['user-item']}>
            <Link to={`/${id}`}>
                <div className={classes['user-item__title-text']}>
                    <h2>{name} </h2>
                    <p>{city} </p>
                </div>
                <div className={classes['user-item__web-email']}>
                    <span className={classes['user-item__date']}>{web} </span>
                    <span className={classes['user-item__date']}>{email} </span>
                </div>
            </Link>
        </li>
    );
};

export default userItem;
