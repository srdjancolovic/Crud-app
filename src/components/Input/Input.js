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

// import classes from './Input.module.scss';
// import { useRef, useState } from 'react';
// const Input = ({
//     htmlfFor,
//     label,
//     type,
//     onChange,
//     id,
//     name,
//     className,
//     value,
//     defaulValue,
//     max450,
//     errMsg,
// }) => {
//     const inputRef = useRef(null);
//     const [isEmpty, setIsEmpty] = useState(true);
//     const [error, setError] = useState(false);

//     const focusInputField = () => {
//         inputRef.current.focus();
//     };

//     const onBlurHandler = (e) => {
//         const enteredVal = e.target.value;

//         //*Validation
//         const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//         if (type === 'email' && !enteredVal.match(mailFormat)) {
//             setError(true);
//         } else {
//             setError(false);
//         }

//         if (
//             enteredVal === '' ||
//             (enteredVal.length === 0 && type !== 'email')
//         ) {
//             setError(true);
//         } else {
//             setError(false);
//         }
//         //*Validation

//         if (enteredVal.length !== 0) {
//             setIsEmpty(false);
//         } else {
//             setIsEmpty(true);
//         }
//     };

//     return (
//         <div
//             className={`${classes.input} ${
//                 max450 ? classes['input--max-450'] : ''
//             } ${
//                 !isEmpty || defaulValue !== undefined
//                     ? classes['input__focused']
//                     : ''
//             } ${defaulValue === '' ? classes['input__not-focused'] : ''} ${
//                 error && label !== 'Search User' ? classes['input__error'] : ''
//             } `}
//             onClick={focusInputField}
//         >
//             <input
//                 type={type}
//                 onChange={onChange}
//                 ref={inputRef}
//                 onBlur={onBlurHandler}
//                 name={name}
//                 value={value}
//                 defaultValue={defaulValue}
//             />
//             {error && <p className={classes['input__err-msg']}>{errMsg}</p>}
//             <label
//                 htmlFor={htmlfFor}
//                 id={id}
//                 className={classes['input__label']}
//             >
//                 {label}
//             </label>
//         </div>
//     );
// };

// export default Input;
