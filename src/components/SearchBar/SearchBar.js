import classes from './SearchBar.module.scss';
import { useSelector } from 'react-redux';
const SearchBar = (props) => {
    const users = useSelector((state) => state.users.users);

    const searchUsersHandler = (e) => {
        e.preventDefault();
        const searchedUsers = users.filter((user) => {
            return (
                user.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase()) ||
                user.email
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase()) ||
                user.web.toLowerCase().includes(e.target.value.toLowerCase()) ||
                user.phone.includes(e.target.value)
            );
        });

        const isEmpty = e.target.value.length === 0;
        props.onSearchUser(searchedUsers, isEmpty);
    };

    return (
        <div
            className={`${classes['search-bar']} ${
                props.max450 ? classes['search-bar--max-450'] : ''
            }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input onChange={searchUsersHandler} disabled={users.length < 2} />
        </div>
    );
};

export default SearchBar;
