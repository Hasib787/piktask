import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);
  const setUserToken = window.localStorage.getItem("token") || "";

  // const contributor = useSelector((state) => state.contributor);
  // const setContributorToken = window.localStorage.getItem("token") || "";


  return (
    <Route
      {...rest}
      render={(props) =>
        setUserToken && user.role ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
