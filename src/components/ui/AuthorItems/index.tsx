import { Container, Grid, Tab, Tabs, Typography } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import Product from "../Products/Product";
import useStyles from "./AuthorItems.styles";
import axios from "axios";
import { useHistory } from "react-router";

const AuthorItems = ({ imageSummery, id }) => {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [authorAllResource, setAuthorAllResource] = useState([0]);
  // console.log("imageSummery", imageSummery[0].extension);


  const handleActiveButton = (e: ChangeEvent<{}>, index: number) => {
    setValue(index);
  };



  const handleAuthorResource = (tag) => {

    if (tag !== undefined) {
      try {
        axios
        .get(`${process.env.REACT_APP_API_URL}/user/${id}/images/${tag}?limit=4`)
        .then(({ data }) => {
          if (data?.status) {
            setAuthorAllResource(data?.images);
            // history.push(`/author/${id}/${tag}`);
            setLoading(false);
          }
        })
      } catch (error) {
        console.log("All author resources", error);
      }
    } else {
      console.log("Sorry no extension found");
    }
  };

  return (
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
            {/* {authorAllResource.filter((index) => authorAllResource === index.tag) && authorAllResource?.length ? ( */}
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
              <Typography variant="body1">Sorry, no products found</Typography>
            )}
          </>
        )}
      </Grid>
    </Container>
  );
};

export default AuthorItems;
