import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {
    const user = useSelector((state) => state.user);

    return (
        <Route
            {...rest}
            render={(props) => ( 
                !user.token || !user.email || !user.username ? (
                    <Redirect to={{ pathname: "/login", state: { from: props.location } }}/>
                    ) : (
                    <Component {...props} /> 
                )
            )} 
        />
    );
};

export default PrivateRoute;
