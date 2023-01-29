import { Link, useParams } from 'react-router-dom';

const NoteDetail = () => {
    const params = useParams();
    return (
        <>
            <h2>this is Note Detail page ID {params.noteId} </h2>
            <Link to="edit">Edit Note</Link>
        </>
    );
};

export default NoteDetail;
