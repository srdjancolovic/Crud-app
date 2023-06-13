import classes from './Textarea.module.scss';
import { useState, useRef } from 'react';
import { Field } from 'formik';
const Textarea = ({ label, id, name }) => {
    const [isEmpty, setIsEmpty] = useState(true);

    const textareaRef = useRef(null);

    const focusTextarea = () => {
        textareaRef.current.focus();
    };

    return (
        <div
            className={`${classes.textarea} ${
                !isEmpty ? classes['textarea__focused'] : ''
            }`}
            onClick={focusTextarea}
        >
            <label htmlFor={id} className={classes['textarea__label']}>
                {label}
            </label>
            <Field as="textarea" name={name} />
            {/* <textarea
                ref={textareaRef}
                name={name}
                id={id}
                onBlur={onBlurHandler}
                cols="30"
                rows="10"
            ></textarea> */}
        </div>
    );
};

export default Textarea;
