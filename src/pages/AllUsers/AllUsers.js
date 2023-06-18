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

    //Fetch all users
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    //Set searched users
    const searchUsersHandler = (users, isEmpty) => {
        setSearchRes(users);
        setEmptySearch(isEmpty);
    };

    return (
        <>
            <SearchSort max450={true} onSearchUser={searchUsersHandler} />
            {usersData.length === 0 && !loading ? (
                <Notification message="No users added! Please add some!" />
            ) : (
                ''
            )}

            <ul>
                <div>
                    {loading ? (
                        <Notification message="Loading users" />
                    ) : (
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
                        <Notification message="No search results!" />
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
