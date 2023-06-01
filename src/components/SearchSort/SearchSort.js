import classes from './SearchSort.module.scss';
import Input from '../Input/Input';
import { useState } from 'react';
const SearchSort = ({ max450, users }) => {
    const [filteredusers, setFilteredusers] = useState([users]);

    // const searchHandler = (e) => {
    //     const keyword = e.target.value;
    //     const filtered = filteredusers.filter((item) => {
    //         console.log('item=>', item);
    //         console.log('keyowrd=>', keyword);
    //         // return item.title.includes(keyword);
    //     });

    //     console.log('Filtered', filtered);
    //     setFilteredusers(filtered);
    // };

    return (
        <div className={classes['search-sort']}>
            <Input
                // onChange={(e) => searchHandler(e)}
                label="Search User"
                max450={max450}
            />

            <div className={classes['search-sort__sort-btns']}>
                <button className="btn btn--secondary">Latest</button>
                <button className="btn btn--secondary">Oldest</button>
            </div>
        </div>
    );
};

export default SearchSort;
