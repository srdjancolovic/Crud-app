import { Link, useRouteError } from 'react-router-dom';
import classes from './Error.module.scss';
const ErrorPage = () => {
    const reloadPageHandler = () => {
        window.location.reload(true);
    };

    return (
        <>
            <div className={classes['error-page']}>
                <h2>Something went wrong!</h2>
                <p>Try reloading a page or go to homepage!</p>

                <div className={classes['error-page__buttons']}>
                    <Link to="/" className="btn btn--primary">
                        Homepage
                    </Link>
                    <button
                        className="btn btn--secondary"
                        onClick={reloadPageHandler}
                    >
                        Reload page
                    </button>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;
