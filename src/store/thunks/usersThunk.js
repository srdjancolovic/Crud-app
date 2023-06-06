import { usersActions } from '../reducers/usersReducer';
import { uiActions } from '../reducers/uiReducer';
import axios from 'axios';
import { db } from '../../firebase-config';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    updateDoc,
} from 'firebase/firestore';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users/',
    // baseURL:
    //     'https://carts-c823c-default-rtdb.europe-west1.firebasedatabase.app/carts.json',
});

//Fetch user data
export const fetchUsers = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const usersColection = collection(db, 'users');
            const response = await getDocs(usersColection);

            const data = response.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));

            console.log('DATA ', data);

            return data;
        };

        try {
            dispatch(uiActions.showMessage(true));
            const userData = await fetchData();
            // console.log('FETCHED USER DATA', userData);
            let selectedUserData = [];

            console.log('SELECETED USER DATA', userData);

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
            //!Sredhiti erore gresku da prikazuje na ekranu
            console.log(err.message);
        }
    };
};

export const addUsers = (data) => {
    return async (dispatch) => {
        const sendUserData = async () => {
            const usersColection = collection(db, 'users');
            await addDoc(usersColection, data);
        };

        await sendUserData();
    };
};

export const editUsers = (id, data) => {
    return async (dispatch) => {
        const editUserData = async () => {
            const userDoc = doc(db, 'users', id);
            await updateDoc(userDoc, data);

            console.log('DATA from EDIT =>>>', data);

            console.log('ID FROM EDIT =>>>', id);
        };

        await editUserData();
    };
};

export const deleteUsers = (id) => {
    return async (dispatch) => {
        const editUserData = async () => {
            const userDoc = doc(db, 'users', id);
            console.log(id);
            await deleteDoc(userDoc);
        };

        await editUserData();
    };
};