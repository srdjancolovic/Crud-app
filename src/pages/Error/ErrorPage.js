import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    let title = 'Error occured';
    let description = 'Something went wrong';

    if (error.status === 500) {
        description = error.data.message;
    }

    if (error.status === 404) {
        description = 'Page not found';
    }

    return (
        <>
            <h2>{title}</h2>
            <p>{description}</p>
        </>
    );
};

export default ErrorPage;
