import classes from './Input.module.scss';
import { useRef, useState } from 'react';
const Input = ({
    htmlfFor,
    label,
    type,
    onChange,
    id,
    name,
    className,
    value,
    defaulValue,
    max450,
}) => {
    const inputRef = useRef(null);
    const [isEmpty, setIsEmpty] = useState(true);

    const focusInputField = () => {
        inputRef.current.focus();
    };

    const onBlurHandler = (e) => {
        const enteredVal = e.target.value;

        if (enteredVal.length !== 0) {
            setIsEmpty(false);
        } else {
            setIsEmpty(true);
        }
    };

    return (
        <div
            className={`${classes.input} ${
                max450 ? classes['input--max-450'] : ''
            } ${
                !isEmpty || defaulValue !== undefined
                    ? classes['input__focused']
                    : ''
            } ${defaulValue === null ? classes['input__not-focused'] : ''} `}
            onClick={focusInputField}
        >
            <input
                type={type}
                onChange={onChange}
                ref={inputRef}
                onBlur={onBlurHandler}
                name={name}
                value={value}
                defaultValue={defaulValue}
            />
            <label
                htmlFor={htmlfFor}
                id={id}
                className={classes['input__label']}
            >
                {label}
            </label>
        </div>
    );
};

export default Input;
