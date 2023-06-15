import classes from './SearchSort.module.scss';
import SearchBar from '../SearchBar/SearchBar';
import { usersActions } from '../../store/reducers/usersReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
const SearchSort = ({ max450, onSearchUser }) => {
    const [ascActive, setAscActive] = useState(false);
    const [descActive, setDescActive] = useState(false);
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const sortAscHandler = () => {
        dispatch(usersActions.sortAscending());
        setAscActive(false);
        setDescActive(true);
    };

    const sortDescHandler = () => {
        dispatch(usersActions.sortDescending());
        setAscActive(true);
        setDescActive(false);
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
                    className={`btn btn--secondary ${
                        ascActive ? 'btn--active' : ''
                    }`}
                    onClick={sortDescHandler}
                    disabled={users.length < 2}
                >
                    Latest
                </button>
                <button
                    className={`btn btn--secondary ${
                        descActive ? 'btn--active' : ''
                    }`}
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
