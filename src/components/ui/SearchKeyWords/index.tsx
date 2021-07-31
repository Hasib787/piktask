import { Typography } from '@material-ui/core';
import React, { FC } from 'react';
import useStyles from "./SearchKeyWords.styles";
import {PropTypes} from "../Hero";


const SearchKeyWords: FC<PropTypes> = (props): JSX.Element => {
    const classes = useStyles();
    const { popularKeywords, creativeWorksDone } = props;
    return (
        <>
          {popularKeywords && (
            <div className={classes.popularSearch}>
              <Typography variant="h5" className={classes.searchTitle}>
                Example : banner, Background, Abstract Banner , Logo Design ,
                Business card , Post Card Design , web template
              </Typography>
            </div>
          )}

          {creativeWorksDone && (
            <div className={classes.popularSearch}>
              <Typography variant="h5" className={classes.searchTitle}>
                Over 500,000 creative templates help you get your work done in minutes!
              </Typography>
            </div>
          )}
        </>
    );
};

export default SearchKeyWords;