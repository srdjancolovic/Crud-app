import { useState, useEffect } from 'react';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users/',
});

const UserForm = ({ user }) => {
    // const [name, setName] = useState('');
    // const userID = user.id.toString();
    // const handleTitleChange = (e) => {
    //     setName(e.target.value);
    // };
    const navigate = useNavigate();

    const cancelBtnHandler = (e) => {
        e.preventDefault();
        navigate('/');
    };

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
                label="Title"
                htmlfFor="title"
                name="title"
                type="text"
                // onChange={(e) => handleTitleChange(e)}
                className="input__full-width"
                // defaulValue={user ? user.name : name}
            />

            <Input
                label="Date"
                htmlfFor="date"
                name="date"
                type="date"
                className="input__full-width"
            />

            <Textarea label="Description" />

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
        </form>
    );
};

export default UserForm;

// export const eventUpdate = async ({ request, params }) => {
//     const data = await request.formData();
// };
