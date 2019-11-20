import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const PrivateRouteProfile = ({ component: Component, ...rest }: any) => (
    <Route {...rest}
        render={props => {
            const token =localStorage.getItem('token') || sessionStorage.getItem('token')
            return token ? <Component {...props} /> : <Redirect to={{ pathname: "/signin" }} />}
        }
    />
);
export const PrivateRouteUpdate = ({ component: Component, ...rest }: any) => (
    <Route {...rest}
        render={props => {
            const token =localStorage.getItem('token') || sessionStorage.getItem('token')
            return token ? <Component {...props} /> : <Redirect to={{ pathname: "/signin" }} />}
        }
    />
);
export const PrivateRouteFriend = ({ component: Component, ...rest }: any) => (
    <Route {...rest}
        render={props => {
            const token =localStorage.getItem('token') || sessionStorage.getItem('token')
            return token ? <Component {...props} /> : <Redirect to={{ pathname: "/signin" }} />}
        }
    />
);

export default PrivateRouteProfile;