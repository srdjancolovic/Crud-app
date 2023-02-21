import { useState, useEffect } from 'react';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import axios from 'axios';
import { Form } from 'react-router-dom';

const api = axios.create({
    baseURL: 'https://notes-20be2-default-rtdb.firebaseio.com/notes.json',
});

const NoteForm = ({ note }) => {
    return (
        <Form className="form">
            <Input
                label="Title"
                htmlfFor="title"
                name="title"
                type="text"
                className="input__full-width"
                defaulValue={note ? note.title : null}
            />

            <Input
                label="Date"
                htmlfFor="date"
                name="date"
                type="date"
                className="input__full-width"
            />

            <Textarea label="Description" />

            <div className="form__controls">
                <button className="btn btn--secondary">Cancel</button>
                <button className="btn btn--primary" type="submit">
                    Save
                </button>
            </div>
        </Form>
    );
};

export default NoteForm;

// export const eventUpdate = async ({ request, params }) => {
//     const data = await request.formData();
// };
