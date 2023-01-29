import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AllNotes from './pages/AllNotes';
import Root from './pages/Root';
import NoteDetail from './pages/NoteDetail';
import EditNote from './pages/EditNote';
import NewNote from './pages/NewNote';
import { allNotes } from './pages/AllNotes';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <AllNotes />, loader: allNotes },
            { path: 'new', element: <NewNote /> },
            {
                path: ':noteId',
                children: [
                    { index: true, element: <NoteDetail /> },
                    { path: 'edit', element: <EditNote /> },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
