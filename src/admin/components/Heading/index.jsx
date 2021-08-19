import { Typography } from "@material-ui/core";
import React from "react";

const Heading = ({ tag, children, ...rest }) => {
  return (
    <Typography variant={tag} {...rest}>
      {children}
    </Typography>
  );
};

export default Heading;
