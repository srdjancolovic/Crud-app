import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../store/thunks/usersThunk';
import User from '../../components/User/User';
import SearchSort from '../../components/SearchSort/SearchSort';
import Notification from '../../components/Notification/Notification';

const AllUsers = () => {
    const dispatch = useDispatch();
    const usersData = useSelector((state) => state.users.users);
    const loading = useSelector((state) => state.ui.loadingData);
    const [searchRes, setSearchRes] = useState([]);
    const [emptySearch, setEmptySearch] = useState(true);
    const [initalUsers, setInitalUsers] = useState([usersData]);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const searchUsersHandler = (users, isEmpty) => {
        setSearchRes(users);
        setEmptySearch(isEmpty);
    };

    return (
        <>
            <SearchSort max450={true} onSearchUser={searchUsersHandler} />
            {usersData.length === 0 && !loading ? (
                <p className="message">Prazno, nema nista</p>
            ) : (
                ''
            )}
            <ul>
                <div>
                    {loading ? (
                        <Notification message="Loading users" />
                    ) : (
                        searchRes.length === 0 &&
                        emptySearch &&
                        usersData.map((user) => {
                            return (
                                <User
                                    key={user.id}
                                    id={user.id}
                                    name={user.name}
                                    email={user.email}
                                    phone={user.phone}
                                    web={user.web}
                                    notes={user.notes}
                                />
                            );
                        })
                    )}
                    {searchRes.length === 0 && !emptySearch ? (
                        <Notification message="Nema rezultata" />
                    ) : (
                        searchRes.length > 0 &&
                        !emptySearch &&
                        searchRes.map((user) => {
                            return (
                                <User
                                    key={user.id}
                                    id={user.id}
                                    name={user.name}
                                    email={user.email}
                                    phone={user.phone}
                                    web={user.web}
                                    notes={user.notes}
                                />
                            );
                        })
                    )}
                </div>
            </ul>
        </>
    );
};

export default AllUsers;
