import classes from './SearchSort.module.scss';
import SearchBar from '../SearchBar/SearchBar';
import { usersActions } from '../../store/reducers/usersReducer';
import { useDispatch, useSelector } from 'react-redux';
const SearchSort = ({ max450, users, onSearchUser }) => {
    const dispatch = useDispatch();
    const userss = useSelector((state) => state.users.users);
    const sortAscHandler = () => {
        dispatch(usersActions.sortAscending());
        console.log(userss);
    };

    const sortDescHandler = () => {
        dispatch(usersActions.sortDescending());
        console.log(userss);
    };

    return (
        <div className={classes['search-sort']}>
            <SearchBar
                max450={max450}
                label="Search User"
                onSearchUser={onSearchUser}
            />

            <div className={classes['search-sort__sort-btns']}>
                <button
                    className="btn btn--secondary"
                    onClick={sortDescHandler}
                >
                    Latest
                </button>
                <button className="btn btn--secondary" onClick={sortAscHandler}>
                    Oldest
                </button>
            </div>
        </div>
    );
};

export default SearchSort;
