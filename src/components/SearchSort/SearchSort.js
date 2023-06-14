import classes from './SearchSort.module.scss';
import SearchBar from '../SearchBar/SearchBar';
import { usersActions } from '../../store/reducers/usersReducer';
import { useDispatch, useSelector } from 'react-redux';
const SearchSort = ({ max450, onSearchUser }) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const sortAscHandler = () => {
        dispatch(usersActions.sortAscending());
    };

    const sortDescHandler = () => {
        dispatch(usersActions.sortDescending());
    };

    const defaultSortHandler = () => {
        dispatch(usersActions.defaultSort());
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
                    disabled={users.length < 2}
                >
                    Latest
                </button>
                <button
                    className="btn btn--secondary"
                    onClick={sortAscHandler}
                    disabled={users.length < 2}
                >
                    Oldest
                </button>
            </div>
        </div>
    );
};

export default SearchSort;
