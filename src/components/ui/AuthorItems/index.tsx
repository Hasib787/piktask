import { Container, Grid, Tab, Tabs, Typography } from "@material-ui/core";
import React, { ChangeEvent, useState, useEffect } from "react";
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
  const [firstLoad, setFirstLoad] = useState({});

  const [isActive, setActive] = useState(false);

  // const toggleClass = () => {
  //   setActive(!isActive);
  // };

  useEffect(() => {
    setFirstLoad(imageSummery[0])
  }, [imageSummery])

  console.log("firstLoad", firstLoad);

  const handleActiveButton = (e: ChangeEvent<{}>, index: number) => {
    setValue(index);
  };

  const tabProps = (id: string) => {
    return {
      id,
      "aria-controls": `simple-tabpanel-${id}`,
    };
  };


  // useEffect(() => {
   
  // }, [])


  const handleAuthorResource = (e) => {
    const extension = e.currentTarget.dataset.extension;

    if (extension !== undefined) {
      try {
        axios
        .get(`${process.env.REACT_APP_API_URL}/user/${id}/images/${extension}?limit=4`)
        .then(({ data }) => {
          if (data?.status) {
            setAuthorAllResource(data?.images);
            setActive(!isActive);
            history.push(`/author/${id}/${extension}`);
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
                {...tabProps(tag.id)}
                className={classes.tagButton}
                // className={`${authorAllResource === [0] ? 'active' : ""} ${classes.tagButton}`}
                // className={isActive ? 'your_className': null} 
                classes={{ selected: classes.selected }}
                onClick={handleAuthorResource}
                data-extension={tag.extension}
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
              <Typography variant="body1">Sorry, no products found</Typography>
            )}
          </>
        )}
      </Grid>
    </Container>
  );
};

export default AuthorItems;
