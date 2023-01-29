import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">All Notes</NavLink>
                </li>
                <li>
                    <NavLink to="/new">New Note</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
