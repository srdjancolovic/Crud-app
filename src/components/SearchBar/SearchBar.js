import classes from './SearchBar.module.scss';
import { usersActions } from '../../store/reducers/usersReducer';
import { useDispatch } from 'react-redux';
const SearchBar = ({ id, label, max450 }) => {
    const dispatch = useDispatch();
    const searchUsersHandler = (e) => {
        console.log(e.target.value);
        dispatch(usersActions.searchUsers(e.target.value));
    };
    return (
        <div
            className={`${classes['search-bar']} ${
                max450 ? classes['search-bar--max-450'] : ''
            }`}
        >
            <label htmlFor={id}>{label}</label>
            <input onChange={searchUsersHandler} />
        </div>
    );
};

export default SearchBar;
