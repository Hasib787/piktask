import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {
    const user = useSelector((state) => state.user);

    return (
        <Route
            {...rest}
            render={(props) => ( 
                    user && user.token ? (
                        <Component {...rest} /> 
                ) : (
                    <Redirect to={{ pathname: "/login", state: { from: props.location } }}/>
                )
            )} 
        />
    );
};

export default PrivateRoute;