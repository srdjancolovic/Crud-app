import { useParams, useRouteLoaderData } from 'react-router-dom';
import NoteForm from '../../components/Form/NoteForm';

const EditNote = () => {
    const data = useRouteLoaderData('note-detail');
    const params = useParams();
    const id = params.noteId;

    const submitEdit = () => {
        console.log('Editovanje');
    };

    return (
        <>
            <h2>Edit Note</h2>
            <NoteForm note={data[id]} editSubmit={submitEdit} />
        </>
    );
};

export default EditNote;
