import { usersActions } from '../reducers/usersReducer';
import { uiActions } from '../reducers/uiReducer';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users/',
    // baseURL:
    //     'https://carts-c823c-default-rtdb.europe-west1.firebasedatabase.app/carts.json',
});

//Fetch user data
export const fetchUsers = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await api.get(
                'https://63e608117eef5b22337d7d39.mockapi.io/users/'
            );
            // const response = await fetch(
            //     'https://jsonplaceholder.typicode.com/users'
            // );

            const data = await response.data;
            console.log(data);
            return data;
        };

        try {
            dispatch(uiActions.showMessage(true));
            const userData = await fetchData();
            let selectedUserData = [];

            for (const key in userData) {
                selectedUserData.push({
                    name: userData[key].name,
                    id: userData[key].id,
                    web: userData[key].website,
                    email: userData[key].email,
                    phone: userData[key].phone,
                });
            }
            dispatch(
                usersActions.updatedUsers({
                    users: selectedUserData || [],
                })
            );
            dispatch(uiActions.showMessage(false));
        } catch (err) {
            console.log(err.message);
        }
    };
};

export const addUsers = (data) => {
    return async (dispatch) => {
        const sendUserData = async () => {
            const response = await fetch(
                'https://63e608117eef5b22337d7d39.mockapi.io/users',
                {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-type': 'application/json; ',
                    },
                }
            );

            const dataUser = await response.json();

            console.log('RESPONSE', dataUser);
            //*Treba dodati onaj uslov kada se salje
            // axios({
            //     method: 'post',
            //     url: 'https://carts-c823c-default-rtdb.europe-west1.firebasedatabase.app/carts.json',
            //     data: data,
            // });
        };

        await sendUserData();
    };
};

export const editUsers = (data, id) => {
    return async (dispatch) => {
        const editUserData = async () => {
            const response = await fetch(
                `https://63e608117eef5b22337d7d39.mockapi.io/users/${id}`,
                {
                    method: 'PATCH',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                }
            );

            const dataUser = await response.json();

            console.log('RESPONSE PATCH', dataUser);
            //*Treba dodati onaj uslov kada se salje
            // axios({
            //     method: 'post',
            //     url: 'https://carts-c823c-default-rtdb.europe-west1.firebasedatabase.app/carts.json',
            //     data: data,
            // });
        };

        await editUserData();
    };
};
