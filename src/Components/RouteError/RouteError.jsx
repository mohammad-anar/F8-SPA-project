import { Link, useRouteError } from "react-router-dom";

const RouteError = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Oops!!!</h1>
            <p>error data --------------------🥱</p>
            <h1>{error.data}</h1>
            <p>error error. stack --------------------🥱</p>
            <h1>{error.error.stack}</h1>
            <p>error error.message --------------------🥱</p>
            <h1>{error.error.message}</h1>
            <p>error status --------------------🥱</p>
            <h1>{error.status}</h1>
            <p>error status text--------------------🥱</p>
            <h1>{error.statusText}</h1>
            <div className="text-center">
                <Link to='/'>
                    <button className="btn btn-sm bg-gray-300">Go home</button>
                </Link>
            </div>
        </div>
    );
};

export default RouteError;