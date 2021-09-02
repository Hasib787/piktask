import { Container, Grid, Tab, Tabs, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Product from "../Products/Product";
import useStyles from "./AuthorItems.styles";
import axios from "axios";

const AuthorItems = ({ imageSummery, userId }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [authorAllResource, setAuthorAllResource] = useState();

  const handleActiveButton = (index) => {
    setValue(index);
  };

  useEffect(() => {
    if (imageSummery[0]?.extension !== undefined) {
      try {
        axios
          .get(
            `${process.env.REACT_APP_API_URL}/user/${userId}/images/${imageSummery[0]?.extension}`
          )
          .then(({ data }) => {
            if (data?.status) {
              setAuthorAllResource(data?.images);
              setLoading(false);
            }
          });
      } catch (error) {
        console.log("All author resources", error);
      }
    } else {
      console.log("Sorry no extension found");
    }
  }, [userId, imageSummery])

  const handleAuthorResource = (tag) => {
    if (tag !== undefined) {
      try {
        axios
          .get(`${process.env.REACT_APP_API_URL}/user/${userId}/images/${tag}`)
          .then(({ data }) => {
            if (data?.status) {
              setAuthorAllResource(data?.images);
              setLoading(false);
            }
          });
      } catch (error) {
        console.log("All author resources", error);
      }
    } else {
      console.log("Sorry no extension found");
    }
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
            <h2>Loading now......</h2>
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
                <Typography variant="body1">
                  Sorry, no products found
                </Typography>
              )}
            </>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default AuthorItems;
