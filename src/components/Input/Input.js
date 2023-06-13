import classes from './Input.module.scss';
import { useField } from 'formik';

const Input = ({ id, label, onChange, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className={classes.input}>
            <label htmlFor={id}>{label}</label>
            <input
                {...props}
                {...field}
                className={
                    meta.touched && meta.error ? classes['input__error'] : ''
                }
            />
            {meta.touched && meta.error ? (
                <p className={classes['input__err-msg']}>{meta.error}</p>
            ) : null}
        </div>
    );
};

export default Input;
