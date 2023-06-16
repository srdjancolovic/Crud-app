import classes from './Textarea.module.scss';
import { useRef } from 'react';
import { Field } from 'formik';
const Textarea = ({ label, id, name }) => {
    const textareaRef = useRef(null);

    const focusTextarea = () => {
        textareaRef.current.focus();
    };

    return (
        <div className={`${classes.textarea} `} onClick={focusTextarea}>
            <label htmlFor={id} className={classes['textarea__label']}>
                {label}
            </label>
            <Field as="textarea" name={name} />
        </div>
    );
};

export default Textarea;
