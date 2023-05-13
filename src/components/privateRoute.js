import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoute = ({ isAuthentic }) => {
    const isAuth = isAuthentic; // your logic here

    return isAuth ? <Outlet /> : <Navigate to="/" />;
}
