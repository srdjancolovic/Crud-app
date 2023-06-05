import Input from '../Input/Input';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { basicSchema } from '../../schemas/schema';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, editUser, editUsers } from '../../store/thunks/usersThunk';
import { useParams } from 'react-router-dom';

const UserForm = ({ user }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const params = useParams();
    const paramsId = parseInt(params.userId);

    const cancelBtnHandler = (e) => {
        e.preventDefault();
        navigate('/');
    };
    const onSubmit = (values, actions) => {
        dispatch(
            addUsers({
                name: values.name,
                id: Math.floor(Math.random() * 1000000),
                website: values.website,
                email: values.email,
                phone: values.phone,
            })
        );

        if (user) {
            dispatch(
                editUsers(
                    {
                        name: values.name,
                        id: Math.floor(Math.random() * 1000000),
                        website: values.website,
                        email: values.email,
                        phone: values.phone,
                    },
                    params.userId
                )
            );
        }

        navigate('/');
        console.log(users);

        actions.resetForm();
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
                      }
                    : { name: '', email: '', phone: '', website: '' }
            }
            validationSchema={basicSchema}
            onSubmit={onSubmit}
        >
            {(props) => (
                <Form className="form">
                    <Input id="name" name="name" label="Name" type="text" />
                    <Input id="email" name="email" label="Email" type="email" />
                    <Input id="phone" name="phone" label="Phone" type="phone" />
                    <Input
                        id="website"
                        name="website"
                        label="Website"
                        type="website"
                    />

                    <div className="form__controls">
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
