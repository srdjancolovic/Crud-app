import classes from './NoteDetail.module.scss';
import { Link, useParams, useRouteLoaderData } from 'react-router-dom';
import { useState } from 'react';

const NoteDetail = () => {
    const data = useRouteLoaderData('note-detail');
    const params = useParams();
    const id = params.noteId;
    console.log(data[id]);

    const title = data[id].title;
    const text = data[id].text;
    const date = data[id].date;

    return (
        <div className={classes['note-detail']}>
            <div className={classes['note-detail__controls']}>
                <button className="btn btn--delete">Delete </button>
                <Link to="edit" className="btn btn--primary">
                    Edit
                </Link>
            </div>
            <div className={classes['note-detail__content']}>
                <h2 className={classes['note-detail__heading']}>{title}</h2>
                <span className={classes['note-detail__date']}>{date}</span>
                <p className={classes['note-detail__text']}>{text}</p>
            </div>
        </div>
    );
};

export default NoteDetail;

export const noteDetailFn = async ({ request, params }) => {
    const id = params.noteId;
    console.log(id);
    const response = await fetch(
        `https://63e608117eef5b22337d7d39.mockapi.io/notes`
    );

    return response;
};
