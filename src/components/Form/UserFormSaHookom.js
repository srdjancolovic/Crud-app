import { useState, useEffect } from 'react';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useInputValidation from '../../hooks/useValidation';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users/',
});

const UserForm = ({ user }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [web, setWeb] = useState('');
    const [formIsValid, setFormIsValid] = useState(false);

    const {
        value: enteredName,
        isValid: nameIsValid,
        isInvalid: nameIsInvalid,
        valueChangeHandler: nameChangeHandler,
        blurChangeHandler: nameBlurHandler,
        reset: resetNameHandler,
        isTouched: nameFieldIsTouched,
    } = useInputValidation((value) => value.trim() !== '');

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        isInvalid: emailIsInvalid,
        valueChangeHandler: emailChangeHandler,
        blurChangeHandler: emailBlurHandler,
        reset: resetemailHandler,
        isTouched: emailFieldIsTouched,
    } = useInputValidation((value) =>
        value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    );

    const {
        value: enteredPhone,
        isValid: phoneIsValid,
        isInvalid: phoneIsInvalid,
        valueChangeHandler: phoneChangeHandler,
        blurChangeHandler: phoneBlurHandler,
        reset: resetphoneHandler,
        isTouched: phoneFieldIsTouched,
    } = useInputValidation((value) => value.trim() !== '');

    const {
        value: enteredWeb,
        isValid: webIsValid,
        isInvalid: webIsInvalid,
        valueChangeHandler: webChangeHandler,
        blurChangeHandler: webBlurHandler,
        reset: resetwebHandler,
        isTouched: webFieldIsTouched,
    } = useInputValidation((value) => value.trim() !== '');

    console.log(enteredEmail);

    // const userID = user.id.toString();

    // console.log(typeof userID);

    // const handleSubmit = async () => {
    //     const response = await api.patch(
    //         userID,
    //         {
    //             name: name,
    //         },
    //         {
    //             headers: { 'Content-type': 'application/json; charset=UTF-8' },
    //         }
    //     );

    //     console.log(response);
    // };

    // console.log(user);
    return (
        <form className="form">
            <Input
                label="Name"
                htmlfFor="name"
                name="name"
                type="text"
                // onChange={(e) => handleNameChange(e)}
                className="input__full-width"
                defaulValue={user ? user.name : enteredName}
                errMsg="Please enter valid name!"
                invalidInput={nameIsInvalid}
                isTouched={nameFieldIsTouched}
                onBlur={nameBlurHandler}
                value={enteredName}
                onChange={nameChangeHandler}
            />

            <Input
                label="Email"
                htmlfFor="email"
                name="email"
                type="emial"
                // onChange={(e) => handleNameChange(e)}
                className="input__full-width"
                defaulValue={user ? user.email : email}
                errMsg="Please enter valid name!"
                invalidInput={emailIsInvalid}
                isTouched={emailFieldIsTouched}
                onBlur={emailBlurHandler}
                value={enteredEmail}
                onChange={emailChangeHandler}
            />

            <Input
                label="Phone"
                htmlfFor="phone"
                name="phone"
                type="text"
                // onChange={(e) => handleNameChange(e)}
                className="input__full-width"
                defaulValue={user ? user.phone : phone}
                errMsg="Please enter valid phone!"
                invalidInput={phoneIsInvalid}
                isTouched={phoneFieldIsTouched}
                onBlur={phoneBlurHandler}
                value={enteredPhone}
                onChange={phoneChangeHandler}
            />

            <Input
                label="Website"
                htmlfFor="website"
                name="website"
                type="text"
                // onChange={(e) => handleNameChange(e)}
                className="input__full-width"
                defaulValue={user ? user.web : web}
                errMsg="Please enter valid web!"
                invalidInput={webIsInvalid}
                isTouched={webFieldIsTouched}
                onBlur={webBlurHandler}
                value={enteredWeb}
                onChange={webChangeHandler}
            />

            {/* <Textarea label="Description" /> */}

            <div className="form__controls">
                <button className="btn btn--secondary">Cancel</button>
                <button
                    className="btn btn--primary"
                    type="submit"
                    disabled={!formIsValid}
                >
                    Save
                </button>
            </div>
        </form>
    );
};

export default UserForm;

// export const eventUpdate = async ({ request, params }) => {
//     const data = await request.formData();
// };

{
    /* <Input
                label="Email"
                htmlfFor="email"
                name="email"
                type="email"
                // onChange={(e) => handleEmailChange(e)}
                className="input__full-width"
                defaulValue={user ? user.email : email}
                errMsg="Please enter valid email!"
            />

            <Input
                label="Phone"
                htmlfFor="phone"
                name="phone"
                type="phone"
                // onChange={(e) => handlePhoneChange(e)}
                className="input__full-width"
                defaulValue={user ? user.phone : phone}
                errMsg="Please enter valid phone!"
            />

            <Input
                label="Website"
                htmlfFor="website"
                name="website"
                type="text"
                // onChange={(e) => handleWebChange(e)}
                className="input__full-width"
                defaulValue={user ? user.web : web}
                errMsg="Please enter valid web address!"
            /> */
}
