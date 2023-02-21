import { useEffect, useState } from 'react';
import { json, Link, useLoaderData } from 'react-router-dom';
import NoteItem from '../../components/NoteItem/NoteItem';
import SearchSort from '../../components/SearchSort/SearchSort';
import axios from 'axios';
const DUMMY_DATA = [
    { id: 'n1', title: 'Note 1', text: 'Text 1', date: 21.11 },
    {
        id: 'n2',
        title: 'Note 2',
        text: 'Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2 Text 2',
        date: 22.11,
    },
    { id: 'n3', title: 'Note 3', text: 'Text 3', date: 23.11 },
    { id: 'n4', title: 'Note 3', text: 'Text 3', date: 23.11 },
    { id: 'n5', title: 'Note 3', text: 'Text 3', date: 23.11 },
    { id: 'n6', title: 'Note 3', text: 'Text 3', date: 23.11 },
    { id: 'n7', title: 'Note 3', text: 'Text 3', date: 23.11 },
    { id: 'n8', title: 'Note 3', text: 'Text 3', date: 23.11 },
];

const api = axios.create({
    baseURL: 'https://63e608117eef5b22337d7d39.mockapi.io/notes',
});

const AllNotes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('/');

            const data = response.data;

            let notesData = [];

            for (const key in data) {
                notesData.push({
                    title: data[key].title,
                    id: key,
                    text: data[key].text,
                    date: data[key].date,
                });
            }

            setNotes(notesData);
        };

        fetchData();
    }, []);

    const addNew = () => {
        api.post('/', {
            title: 'Dodatno 112221',
            text: 'asdasd',
            id: 11,
            date: '11.11.111',
        });
    };

    console.log(notes);

    // const data = useLoaderData();
    // const notes = data;
    // console.log(data);
    return (
        <>
            <button onClick={addNew}>Add</button>
            <SearchSort max450={true} />
            {notes.length === 0 ? <p>Prazno, nema nista</p> : ''}
            <ul>
                {notes.map((note) => {
                    return (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            text={note.text}
                            date={note.date}
                        />
                    );
                })}
            </ul>
        </>
    );
};

export default AllNotes;

export const allNotes = async () => {
    const response = await fetch(
        'https://63e608117eef5b22337d7d39.mockapi.io/notes'
    );

    if (!response.ok) {
        throw json({ message: 'Nije se moglo ucitati' }, { status: 500 });
    }

    return response;
};
