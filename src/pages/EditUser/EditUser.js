import { useParams } from 'react-router-dom';
import { useSelector, dispatch, useDispatch } from 'react-redux';
import UserForm from '../../components/Form/UserForm';
import { useEffect } from 'react';
import { fetchUsers } from '../../store/thunks/usersThunk';
import Notification from '../../components/Notification/Notification';
const EditUser = () => {
    const params = useParams();
    const users = useSelector((state) => state.users.users);
    const paramsId = params.userId;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    // const user = users.find((user) => user.id === paramsId);
    const user = users.find((user) => user.id === paramsId);

    return (
        <>
            <h2>Edit user</h2>
            {users.length > 0 ? (
                <UserForm user={user} />
            ) : (
                <Notification message="Loading form" />
            )}
        </>
    );
};

export default EditUser;
