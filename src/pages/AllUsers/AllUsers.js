import { useEffect, useState } from 'react';
import User from '../../components/User/User';
import SearchSort from '../../components/SearchSort/SearchSort';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
});

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('/');

            const data = response.data;

            let usersData = [];

            for (const key in data) {
                usersData.push({
                    name: data[key].name,
                    id: data[key].id,
                    web: data[key].website,
                    email: data[key].email,
                    city: data[key].address.city,
                });
            }

            setUsers(usersData);
        };

        fetchData();
    }, []);

    console.log(users);

    return (
        <>
            {/* <button onClick={addNew}>Add</button> */}
            <SearchSort max450={true} />
            {users.length === 0 ? <p>Prazno, nema nista</p> : ''}
            <ul>
                {users.map((user) => {
                    return (
                        <User
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            city={user.city}
                            web={user.web}
                        />
                    );
                })}
            </ul>
        </>
    );
};

export default AllUsers;
