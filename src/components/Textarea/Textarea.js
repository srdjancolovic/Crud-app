import classes from './Textarea.module.scss';
import { useState, useRef } from 'react';
const Textarea = ({ htmlfFor, label, id, name }) => {
    const [isEmpty, setIsEmpty] = useState(true);

    const textareaRef = useRef(null);

    const focusTextarea = () => {
        textareaRef.current.focus();
    };

    const onBlurHandler = (e) => {
        const value = e.target.value;

        if (value.length !== 0) {
            setIsEmpty(false);
        } else {
            setIsEmpty(true);
        }
    };

    return (
        <div
            className={`${classes.textarea} ${
                !isEmpty ? classes['textarea__focused'] : ''
            }`}
            onClick={focusTextarea}
        >
            <textarea
                ref={textareaRef}
                name={name}
                id={id}
                onBlur={onBlurHandler}
                cols="30"
                rows="10"
            ></textarea>
            <label htmlFor={htmlfFor} className={classes['textarea__label']}>
                {label}
            </label>
        </div>
    );
};

export default Textarea;
