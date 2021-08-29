import { Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../../Layout';
import { useDebounce } from '../../../lib/hooks/debounceHook';
import Spacing from '../../Spacing';
import Footer from '../Footer';
import Header from '../Header';
import Product from '../Products/Product';
import useStyles from './SearchResults.styles';

const SearchResults = () => {
  const {queryParams} = useParams();
  console.log("queryParams", queryParams);
  const classes = useStyles();
  const [isLoading, setLoading] = useState(false);
  const [searchCategoryID, setSearchCategoryID] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const prepareSearchQuery = () => {
      let url;
      console.log("searchCategoryID", searchCategoryID);
      if (searchCategoryID) {
        url = `${process.env.REACT_APP_API_URL}/client/search/?title=${queryParams}&category_id=${searchCategoryID}&limit=12`;
      } else {
        url = `${process.env.REACT_APP_API_URL}/client/search/?title=${queryParams}&limit=12`;
      }
  
      console.log("search url", url);
  
      // search/?title=nature&category_id=22&limit=30&page=1
      return encodeURI(url);
    };

    useEffect(() => {
      
      const URL = prepareSearchQuery();

      axios
      .get(URL)
      .then(({data}) => {
        console.log("data", data.results);
        if(data?.status){
          setSearchResults(data.results);
          setLoading(false);
        }
      })

    }, []);

    console.log("searchResults", searchResults);

  return (
    <Layout title="kjgfuygfuytf">
        <Header></Header>
        <Spacing space={{height: "5rem"}} />
        <Grid classes={{ container: classes.container }} container spacing={2}>
            {isLoading ? (
            <h2>Loading now......</h2>
            ) : (
            <>
                {searchResults.length ? (
                searchResults?.map((photo) => (
                    <Grid
                    key={photo.image_id}
                    item
                    xs={6}
                    sm={4}
                    md={3}
                    className={classes.productItem}
                    >
                    <Product photo={photo} />
                    </Grid>
                ))
                ) : (
                <Typography variant="body1">Sorry, no products found</Typography>
                )}
            </>
            )}
        </Grid>
        <Spacing space={{height: "5rem"}} />
        <Footer></Footer>
    </Layout>
  );
};

export default SearchResults;