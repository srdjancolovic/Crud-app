import classes from './UserForm.module.scss';
import Input from '../Input/Input';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { basicSchema } from '../../schemas/schema';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, editUsers } from '../../store/thunks/usersThunk';
import { useState } from 'react';
import Textarea from '../Textarea/Textarea';
const UserForm = ({ user }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formMessage = useSelector((state) => state.ui.formMessage);

    //Date and timestamp

    //Timestamp used for sorting because of redux toolkit limitations
    const timestamp = Date.now();
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let time = `${date.getHours()}:${date.getMinutes()}`;
    let currentDate = `${day}.${month}.${year}. at ${time}`;

    const cancelBtnHandler = (e) => {
        e.preventDefault();
        navigate('/');
    };

    const onSubmit = (values) => {
        if (!user) {
            dispatch(
                addUsers({
                    name: values.name,
                    website: values.website,
                    email: values.email,
                    phone: values.phone,
                    notes: values.notes,
                    timestamp: timestamp,
                    date: currentDate,
                })
            );
            navigate('/');
        }

        if (user) {
            console.log('USER', user.id);
            dispatch(
                editUsers(user.id, {
                    name: values.name,
                    website: values.website,
                    id: user.id,
                    email: values.email,
                    phone: values.phone,
                    notes: values.notes,
                })
            );
        }
    };

    return (
        <Formik
            initialValues={
                user
                    ? {
                          name: user.name,
                          email: user.email,
                          phone: user.phone,
                          website: user.web,
                          notes: user.notes,
                      }
                    : { name: '', email: '', phone: '', website: '', notes: '' }
            }
            validationSchema={basicSchema}
            onSubmit={onSubmit}
        >
            {(props) => (
                <Form className={classes.form}>
                    <Input id="name" name="name" label="Name" type="text" />
                    <Input id="email" name="email" label="Email" type="email" />
                    <Input id="phone" name="phone" label="Phone" type="phone" />
                    <Input
                        id="website"
                        name="website"
                        label="Website"
                        type="text"
                    />
                    <Textarea label="Additional notes" name="notes" />

                    <div className={classes['form__controls']}>
                        <div className={classes['form__message']}>
                            <p
                                className={`${
                                    formMessage
                                        ? classes['form__success-msg--show']
                                        : classes['form__success-msg--hide']
                                } form__success-msg`}
                            >
                                User successfully edited!
                            </p>
                        </div>

                        <div className={classes['form__actions']}>
                            <button
                                className="btn btn--secondary"
                                onClick={cancelBtnHandler}
                            >
                                Cancel
                            </button>
                            <button className="btn btn--primary" type="submit">
                                Save
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default UserForm;

// export const eventUpdate = async ({ request, params }) => {
//     const data = await request.formData();
// };

//********************* ISPOD JE PRIJE FORMIKA

// import { useState, useEffect, useRef } from 'react';
// import Input from '../Input/Input';
// import Textarea from '../Textarea/Textarea';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const api = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/users/',
// });

// const UserForm = ({ user }) => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [web, setWeb] = useState('');

//     const nameRef = useRef();

//     // const userID = user.id.toString();
//     const handleNameChange = (e) => {
//         setName(e.target.value);
//     };
//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };
//     const handlePhoneChange = (e) => {
//         setPhone(e.target.value);
//     };
//     const handleWebChange = (e) => {
//         setWeb(e.target.value);
//     };
//     const navigate = useNavigate();

//     const cancelBtnHandler = (e) => {
//         e.preventDefault();
//         navigate('/');
//     };

//     const hasError = name.length < 3 || name === '';

//     // console.log(typeof userID);

//     // const handleSubmit = async () => {
//     //     const response = await api.patch(
//     //         userID,
//     //         {
//     //             name: name,
//     //         },
//     //         {
//     //             headers: { 'Content-type': 'application/json; charset=UTF-8' },
//     //         }
//     //     );

//     //     console.log(response);
//     // };

//     // console.log(user);
//     return (
//         <form className="form">
//             <Input
//                 label="Name"
//                 htmlfFor="name"
//                 name="name"
//                 type="text"
//                 onChange={(e) => handleNameChange(e)}
//                 className="input__full-width"
//                 defaulValue={user ? user.name : name}
//                 errMsg="Name is required field!"
//                 hasError={hasError}
//             />

//             <Input
//                 label="Email"
//                 htmlfFor="email"
//                 name="email"
//                 type="email"
//                 onChange={(e) => handleEmailChange(e)}
//                 className="input__full-width"
//                 defaulValue={user ? user.email : email}
//                 errMsg="Please enter valid email!"
//             />

//             <Input
//                 label="Phone"
//                 htmlfFor="phone"
//                 name="phone"
//                 type="phone"
//                 onChange={(e) => handlePhoneChange(e)}
//                 className="input__full-width"
//                 defaulValue={user ? user.phone : phone}
//                 errMsg="Please enter valid phone!"
//             />

//             <Input
//                 label="Website"
//                 htmlfFor="website"
//                 name="website"
//                 type="text"
//                 onChange={(e) => handleWebChange(e)}
//                 className="input__full-width"
//                 defaulValue={user ? user.web : web}
//                 errMsg="Please enter valid web address!"
//             />

//             {/* <Textarea label="Description" /> */}

//             <div className="form__controls">
//                 <button
//                     className="btn btn--secondary"
//                     onClick={cancelBtnHandler}
//                 >
//                     Cancel
//                 </button>
//                 <button
//                     className="btn btn--primary"
//                     type="submit"
//                     disabled={!user || !user.name ? hasError : false}
//                 >
//                     Save
//                 </button>
//             </div>
//         </form>
//     );
// };

// export default UserForm;

// // export const eventUpdate = async ({ request, params }) => {
// //     const data = await request.formData();
// // };
