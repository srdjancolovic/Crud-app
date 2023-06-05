import classes from './SearchBar.module.scss';
const SearchBar = ({ id, label, max450 }) => {
    return (
        <div
            className={`${classes['search-bar']} ${
                max450 ? classes['search-bar--max-450'] : ''
            }`}
        >
            <label htmlFor={id}>{label}</label>
            <input />
        </div>
    );
};

export default SearchBar;
