import classes from './Notification.module.scss';
const Notification = ({ message }) => {
    return <p className={classes.message}>{message} </p>;
};

export default Notification;
