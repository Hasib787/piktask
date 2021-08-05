import { Typography } from '@material-ui/core';
import React, { FC } from 'react';
import useStyles from "./SearchKeyWords.styles";
import {PropTypes} from "../Hero";
import { Link } from 'react-router-dom';


const SearchKeyWords: FC<PropTypes> = (props): JSX.Element => {
    const classes = useStyles();
    const { popularKeywords, creativeWorksDone } = props;
    return (
        <>
          {popularKeywords && (
            <div className={classes.popularSearch}>
              <Typography variant="h5" className={classes.searchTitle}>
                Example :  
              </Typography>
              <Link to={"/banner"}>
                <Typography variant="h5" className={classes.searchTitle}>
                  Banner, 
                </Typography>
              </Link>
              <Link to={"/background"}>
                <Typography variant="h5" className={classes.searchTitle}>
                  Background, 
                </Typography>
              </Link>
              <Link to={"/abstract Banner"}>
                <Typography variant="h5" className={classes.searchTitle}>
                  Abstract Banner, 
                </Typography>
              </Link>
              <Link to={"/logo Design"}>
                <Typography variant="h5" className={classes.searchTitle}>
                  Logo Design, 
                </Typography>
              </Link>
              <Link to={"/business card"}>
                <Typography variant="h5" className={classes.searchTitle}>
                  Business card, 
                </Typography>
              </Link>
              <Link to={"/post Card Design"}>
                <Typography variant="h5" className={classes.searchTitle}>
                  Post Card Design, 
                </Typography>
              </Link>
              <Link to={"/web template"}>
                <Typography variant="h5" className={classes.searchTitle}>
                  web template 
                </Typography>
              </Link>
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