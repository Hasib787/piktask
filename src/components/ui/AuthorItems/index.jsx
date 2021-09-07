import { Container, Grid, Tab, Tabs } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./AuthorItems.styles";
import Product from "../Products/Product";
import axios from "axios";
import Loader from "../Loader";
import ProductNotFound from "../ProductNotFound";
import { useSelector } from "react-redux";

const AuthorItems = ({ imageSummery, userId }) => {
  const classes = useStyles();
  const user = useSelector(state => state.user);

  const [authorAllResource, setAuthorAllResource] = useState();
  const [isLoading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  const handleActiveButton = (index) => { setValue(index); };

  useEffect(() => {
    setLoading(true);
    
    if (imageSummery[0]?.extension) {

      let authorResourcesURL;

      if(user && user?.id){
        authorResourcesURL = `${process.env.REACT_APP_API_URL}/user/${userId}/images/${imageSummery[0]?.extension}?userId=${user?.id}`
      } else {
        authorResourcesURL = `${process.env.REACT_APP_API_URL}/user/${userId}/images/${imageSummery[0]?.extension}`
      }

      try {
        axios
        .get(authorResourcesURL)
        .then(({ data }) => {
          if (data?.status) {
            setAuthorAllResource(data?.images);
            setLoading(false);
          }
        });
      } catch (error) { console.log("All author resources", error); }
    } else { console.log("Sorry no extension found"); }
  }, [userId, imageSummery, user])

  const handleAuthorResource = (tag) => {
    if (tag) {

      let authorResourcesURL;

      if(user && user?.id){
        authorResourcesURL = `${process.env.REACT_APP_API_URL}/user/${userId}/images/${tag}?userId=${user?.id}`
      } else {
        authorResourcesURL = `${process.env.REACT_APP_API_URL}/user/${userId}/images/${tag}`
      }

      try {
        axios
        .get(authorResourcesURL)
        .then(({ data }) => {
          if (data?.status) {
            setAuthorAllResource(data?.images);
            setLoading(false);
          }
        });
      } catch (error) { console.log("All author resources", error); }
    } else { console.log("Sorry no extension found"); }
  };

  return (
    <>
      <Container>
        <Grid container className={classes.authorItemTags}>
          <Tabs
            value={value}
            onChange={handleActiveButton}
            aria-label="Author item count"
            classes={{
              root: classes.root,
              flexContainer: classes.flexContainer,
              indicator: classes.indicator,
            }}
          >
            {imageSummery.length > 0 &&
              imageSummery.map((tag, index) => (
                <Tab
                  key={index}
                  label={`${tag.extension} (${tag.images})`}
                  className={classes.tagButton}
                  classes={{ selected: classes.selected }}
                  onClick={() => handleAuthorResource(tag.extension)}
                />
              ))}
          </Tabs>
        </Grid>

        <Grid classes={{ container: classes.container }} container spacing={2}>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {authorAllResource?.length ? (
                authorAllResource?.map((photo) => (
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
               <ProductNotFound/>
              )}
            </>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default AuthorItems;
