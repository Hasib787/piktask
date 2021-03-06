import {  Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./SearchKeyWords.styles";
import { Link } from "react-router-dom";
import axios from "axios";

const SearchKeyWords = (props) => {
  const classes = useStyles();
  const { popularKeywords, creativeWorksDone } = props;
  const [popularSearchKeywords, setPopularSearchKeywords] = useState([]);

  useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/client/search/popular_keyword?limit=10`)
        .then(({ data }) => {
          if (data?.status) {
            const popularKeyword = data.keywords;
            setPopularSearchKeywords(popularKeyword.filter((e) => e));
          }
        })
        .catch((error) => {
          console.log(error);
        })
  }, []);

  return (
    <>
      {popularKeywords && (
        <div className={classes.popularSearch}>
          <Typography variant="h5" className={classes.searchTitle}>
            Popular Search :
          </Typography>
          {popularSearchKeywords?.map((keyWord, index) => (
            <Link key={index} to={`/tag/${keyWord}`}>
              <Typography variant="h5" className={classes.searchTitle}>
                {keyWord},
              </Typography>
            </Link>
          ))}
        </div>
      )}

      {creativeWorksDone && (
        <div className={classes.popularSearch}>
          <Typography variant="h5" className={classes.searchTitle}>
            Over 500,000 creative templates help you get your work done in
            minutes!
          </Typography>
        </div>
      )}
    </>
  );
};

export default SearchKeyWords;
