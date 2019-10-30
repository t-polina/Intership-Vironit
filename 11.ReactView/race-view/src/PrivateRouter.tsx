import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// console.log(sessionStorage.getItem('token') !== null)
const PrivateRoute = ({ component: Component, ...rest }: any) => (
    <Route {...rest}
        render={props => {
            console.log('token', Component);
            return localStorage.getItem('token') ? <Component {...props} /> : <Redirect to={{ pathname: "/login" }} />}
        }
    />
);

export default PrivateRoute;