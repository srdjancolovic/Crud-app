import { useParams, useRouteLoaderData } from 'react-router-dom';
import UserForm from '../../components/Form/UserForm';

const EditUser = () => {
    // const data = useRouteLoaderData('user-detail');
    // const params = useParams();
    // const paramsId = parseInt(params.userId);

    // const user = data.find((user) => user.id === paramsId);

    return (
        <>
            <h2>Edit user</h2>
            <UserForm />
        </>
    );
};

export default EditUser;
