import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import AllNotes from './pages/AllNotes/AllNotes';
import Root from './pages/Root/Root';
import NoteDetail from './pages/NoteDetail/NoteDetail';
import EditNote from './pages/EditNote/EditNote';
import NewNote from './pages/NewNote/NewNote';
import { allNotes } from './pages/AllNotes/AllNotes';
import ErrorPage from './pages/Error/Error';
import { noteDetailFn } from './pages/NoteDetail/NoteDetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <AllNotes />, loader: allNotes },
            {
                path: ':noteId',
                id: 'note-detail',
                loader: noteDetailFn,
                children: [
                    { index: true, element: <NoteDetail /> },
                    { path: 'edit', element: <EditNote /> },
                ],
            },
            { path: 'new', element: <NewNote /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
