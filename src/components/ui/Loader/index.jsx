import React from "react";
import { Box, Grid, CardContent } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import useStyles, { CardFooter } from "./Loader.style";

const Loader = () => {
  const classes = useStyles();
  return (
    <Grid container wrap="nowrap">
      <Box width={210} marginRight={0.5} my={5}>
        <Skeleton variant="rect" width={360} height={250} />
        <Box pt={0.5}>
          <Skeleton className={classes.title} />

          <CardContent className={classes.cardFooter}>
            <CardFooter className={classes.authorInfo}>
              <Skeleton
                className={classes.avatar}
                variant="circle"
                width={40}
                height={40}
              />
              <Skeleton
                className={classes.userName}
                animation="wave"
                width="50%"
              />
            </CardFooter>

            <Skeleton
              className={classes.downloadBtn}
              animation="wave"
              width="50%"
          />
          </CardContent>
        </Box>
      </Box>
    </Grid>
  );
};

export default Loader;
