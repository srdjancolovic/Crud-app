import { Outlet } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';

const Root = () => {
    return (
        <>
            <Navigation />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Root;
