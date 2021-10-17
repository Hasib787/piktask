import React from "react";
import { Box, Grid, CardContent } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import useStyles, { CardFooter } from "./Loader.style";

const Loader = ({item}) => {
  const classes = useStyles();
  return (
    <Grid container wrap="nowrap">
      {Array(4).fill()
        .map((item, index) => (
          <Box className={classes.boxRoot} width={360} my={5} key={index}>
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
                />
              </CardContent>
            </Box>
          </Box>
        ))}
    </Grid>
  );
};

export default Loader;
