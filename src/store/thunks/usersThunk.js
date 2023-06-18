import { usersActions } from '../reducers/usersReducer';
import { uiActions } from '../reducers/uiReducer';
import { db } from '../../firebase-config';
//Firebase imports
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    updateDoc,
} from 'firebase/firestore';

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

            return data;
        };

        dispatch(uiActions.loadingUsers(true));
        const userData = await fetchData();
        let selectedUserData = [];

        for (const key in userData) {
            selectedUserData.push({
                name: userData[key].name,
                id: userData[key].id,
                web: userData[key].website,
                email: userData[key].email,
                phone: userData[key].phone,
                notes: userData[key].notes,
                date: userData[key].date,
                timestamp: userData[key].timestamp,
            });
        }
        dispatch(
            usersActions.updatedUsers({
                users: selectedUserData || [],
            })
        );
        dispatch(uiActions.loadingUsers(false));
    };
};

//Add users
export const addUsers = (data) => {
    return async () => {
        const sendUserData = async () => {
            const usersColection = collection(db, 'users');
            await addDoc(usersColection, data);
        };
        await sendUserData();
    };
};

//Edit users
export const editUsers = (id, data) => {
    return async (dispatch) => {
        const editUserData = async () => {
            const userDoc = doc(db, 'users', id);
            await updateDoc(userDoc, data);
        };

        await editUserData();
        dispatch(uiActions.formMessage(true));

        setTimeout(() => {
            dispatch(uiActions.formMessage(false));
        }, 3000);
    };
};

//Delete users
export const deleteUsers = (id) => {
    return async () => {
        const deleteUserData = async () => {
            const userDoc = doc(db, 'users', id);
            await deleteDoc(userDoc);
        };

        await deleteUserData();
    };
};
