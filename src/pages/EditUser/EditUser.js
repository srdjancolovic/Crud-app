import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserForm from '../../components/Form/UserForm';

const EditUser = () => {
    const params = useParams();
    const users = useSelector((state) => state.users.users);
    // const paramsId = params.userId;
    const paramsId = params.userId;

    // const user = users.find((user) => user.id === paramsId);
    const user = users.find((user) => user.id === paramsId);

    return (
        <>
            <h2>Edit user</h2>
            <UserForm user={user} />
        </>
    );
};

export default EditUser;
