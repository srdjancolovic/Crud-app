import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import Root from './pages/Root/Root';
import Newuser from './pages/NewUser/NewUser';
import AllUsers from './pages/AllUsers/AllUsers';
import ErrorPage from './pages/Error/Error';
import EditUser from './pages/EditUser/EditUser';
import UserDetail from './components/UserDetail/UserDetail';
import { useSelector } from 'react-redux';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <AllUsers /> },
            {
                path: '/:userId',
                children: [
                    { index: true, element: <UserDetail /> },
                    { path: '/:userId/edit', element: <EditUser /> },
                ],
            },
            { path: '/new', element: <Newuser /> },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />;
        </>
    );
}

export default App;
