import { useEffect } from 'react';
import { json, Link, useLoaderData } from 'react-router-dom';

const DUMMY_DATA = [
    { id: 'n1', title: 'Note 1', text: 'Text 1', date: 21.11 },
    { id: 'n2', title: 'Note 2', text: 'Text 2', date: 22.11 },
    { id: 'n3', title: 'Note 3', text: 'Text 3', date: 23.11 },
];

const AllNotes = () => {
    const data = useLoaderData();
    console.log(data.cartItems);

    const notes = data.cartItems;

    return (
        <ul>
            {DUMMY_DATA.map((note) => {
                return (
                    <li key={note.id}>
                        {/* <Link to={`/${note.id}`}> */}
                        <Link to={note.id}>
                            <h2>{note.title} </h2>
                            <p>{note.text}</p>
                            <span>{note.date}</span>
                        </Link>
                    </li>
                );
            })}
        </ul>

        // <ul>
        //     {notes.map((item) => {
        //         return <li key={item.id}>{item.name} </li>;
        //     })}
        // </ul>
    );
};

export default AllNotes;

export const allNotes = async () => {
    const response = await fetch(
        'https://tasks-53a33-default-rtdb.firebaseio.com/cart.json'
    );

    console.log(response.ok);

    if (!response.ok) {
        throw json({ message: 'Nije se moglo ucitati' }, { status: 500 });
    }

    return response;
};
