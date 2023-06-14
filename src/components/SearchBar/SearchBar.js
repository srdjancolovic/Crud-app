import classes from './SearchBar.module.scss';
import { usersActions } from '../../store/reducers/usersReducer';
import { useDispatch, useSelector } from 'react-redux';
const SearchBar = (props) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);

    const searchUsersHandler = (e) => {
        e.preventDefault();
        const searchedUsers = users.filter((user) => {
            return user.name
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
        });

        const isEmpty = e.target.value === 0;

        props.onSearchUser(searchedUsers, isEmpty);
    };

    return (
        <div
            className={`${classes['search-bar']} ${
                props.max450 ? classes['search-bar--max-450'] : ''
            }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input onChange={searchUsersHandler} />
        </div>
    );
};

export default SearchBar;
