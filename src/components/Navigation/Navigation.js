import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import classes from './Navigation.module.scss';

const Navigation = () => {
    const location = useLocation();

    const newNotePage = location.pathname.includes('new');
    const allNotesPage = location.pathname === '/';

    return (
        <nav className={classes.navigation}>
            <h1>Notes</h1>
            <ul>
                {!allNotesPage ? (
                    <li>
                        <NavLink className="btn btn--primary" to="/">
                            All Notes
                        </NavLink>
                    </li>
                ) : (
                    ''
                )}
                {newNotePage ? (
                    ''
                ) : (
                    <li>
                        <NavLink className="btn btn--secondary" to="/new">
                            +
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
