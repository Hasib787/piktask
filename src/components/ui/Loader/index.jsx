import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';

const Loader = () => {
    return (
        <Grid container wrap="nowrap">
        <Box  width={210} marginRight={0.5} my={5}>
            <Skeleton variant="rect" width={210} height={118} />
            <Box pt={0.5}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
        </Box>
    </Grid>
    );
  }
 
  export default Loader;