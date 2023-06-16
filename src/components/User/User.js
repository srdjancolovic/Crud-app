import classes from './User.module.scss';

import { Link } from 'react-router-dom';
const userItem = ({ id, name, email, phone, web }) => {
    return (
        <li className={classes['user-item']}>
            <Link to={`/${id}`}>
                <div className={classes['user-item__title-text']}>
                    <h2>{name} </h2>
                    <p>{email} </p>
                </div>
                <div className={classes['user-item__web-email']}>
                    <span className={classes['user-item__date']}>
                        {web ? web : 'No website'}
                    </span>
                    <span className={classes['user-item__date']}>
                        {phone ? phone : 'No phone number'}
                    </span>
                </div>
            </Link>
        </li>
    );
};

export default userItem;
