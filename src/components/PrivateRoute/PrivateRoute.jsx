import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);
  // const contributor = useSelector((state) => state.contributor);

  const [token, setToken] = useState("");
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    setToken(user.token);
    setUserRole(user.role);
  }, [user]);


//   if (!token || !userRole) {
//     return "loading...";
//   }

  return (
    <Route
      {...rest}
      render={(props) =>
        token && userRole === "user" ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
