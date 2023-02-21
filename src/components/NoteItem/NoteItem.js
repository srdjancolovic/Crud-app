import classes from './NoteItem.module.scss';

import { Link } from 'react-router-dom';
const NoteItem = ({ id, title, text, date }) => {
    return (
        <li className={classes['note-item']}>
            <Link to={id}>
                <div className={classes['note-item__title-text']}>
                    <h2>{title} </h2>
                    <p>{text}</p>
                </div>
                <span className={classes['note-item__date']}>{date}</span>
            </Link>
        </li>
    );
};

export default NoteItem;
