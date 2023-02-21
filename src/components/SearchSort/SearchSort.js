import classes from './SearchSort.module.scss';
import Input from '../Input/Input';
const SearchSort = ({ max450 }) => {
    return (
        <div className={classes['search-sort']}>
            <Input label="Search notes" max450={max450} />

            <div className={classes['search-sort__sort-btns']}>
                <button className="btn btn--secondary">Asc</button>
                <button className="btn btn--secondary">Desc</button>
            </div>
        </div>
    );
};

export default SearchSort;
