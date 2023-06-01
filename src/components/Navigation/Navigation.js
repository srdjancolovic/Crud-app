import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import classes from './Navigation.module.scss';
import { BsPlus } from 'react-icons/bs';

const Navigation = () => {
    const location = useLocation();

    const newUserPage = location.pathname.includes('new');
    const allUsersPage = location.pathname === '/';

    return (
        <nav className={classes.navigation}>
            <h1>CRUD</h1>
            <ul>
                {!allUsersPage ? (
                    <li>
                        <NavLink className="btn btn--primary" to="/">
                            All users
                        </NavLink>
                    </li>
                ) : (
                    ''
                )}
                {newUserPage ? (
                    ''
                ) : (
                    <li>
                        <NavLink
                            className="btn btn--secondary btn--with-icon"
                            to="/new"
                        >
                            <span>
                                <BsPlus />
                            </span>
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
