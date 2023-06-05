import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../store/thunks/usersThunk';
import User from '../../components/User/User';
import SearchSort from '../../components/SearchSort/SearchSort';
import Notification from '../../components/Notification/Notification';

const AllUsers = () => {
    const dispatch = useDispatch();
    const usersData = useSelector((state) => state.users.users);
    const loading = useSelector((state) => state.ui.loadingData);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <>
            <SearchSort max450={true} />
            {usersData.length === 0 && !loading ? (
                <p className="message">Prazno, nema nista</p>
            ) : (
                ''
            )}
            {loading ? <Notification message="Loading users" /> : null}
            <ul>
                {usersData.map((user) => {
                    return (
                        <User
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            phone={user.phone}
                            web={user.web}
                        />
                    );
                })}
            </ul>
        </>
    );
};

export default AllUsers;
