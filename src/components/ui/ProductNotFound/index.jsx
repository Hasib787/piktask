import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./ProductNotFound.style";

const ProductNotFound = ({ keywords, noCollection }) => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.notFoundWrap}>
        <Typography className={classes.title} variant="body1">
          {keywords
            ? `Sorry, did not find the "${keywords}" related images.`
            : <>
              {noCollection 
                ? `Sorry, did not find the "${noCollection}".`
                : `Sorry, did not find the related images.`
              }
            </>
            }
        </Typography>
        <Typography className={classes.helperText} variant="body1">
          You can <span>simplify</span>,<span>shorten</span>, or{" "}
          <span>reduce your filter criteria</span>.Or switch the language site
          and search again
        </Typography>
        <Button className={classes.headingButton} component={Link} to="/">
            Go Home
        </Button>
      </div>
    </Container>
  );
};

export default ProductNotFound;
