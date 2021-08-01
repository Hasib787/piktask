import { Container } from "@material-ui/core";
import React from "react";
import useStyles from "./NotFoundPage.styles"

export const NotFoundPage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.pageNotFound}>
        <Container>
          <h3>404</h3>
          <h1>Page Not Found</h1>
        </Container>
      </div>
    </>
  )
};
