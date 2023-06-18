import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import UserForm from '../../components/Form/UserForm';
import { useEffect } from 'react';
import { fetchUsers } from '../../store/thunks/usersThunk';
import Notification from '../../components/Notification/Notification';

const EditUser = () => {
    const params = useParams();
    const users = useSelector((state) => state.users.users);
    const paramsId = params.userId;
    const dispatch = useDispatch();

    //users fetch called again so fields are populated on refresh
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    //Specific user to be passed to edit form
    const user = users.find((user) => user.id === paramsId);

    return (
        <>
            {users.length > 0 ? (
                <div>
                    <h2>Edit user</h2>
                    <UserForm user={user} />
                </div>
            ) : (
                <Notification message="Loading edit form..." />
            )}
        </>
    );
};

export default EditUser;
