import { Container, Grid, List, ListItem } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../../assets/icons/leftArrow.svg";
import rightArrow from "../../../assets/icons/rightArrow.svg";
import useStyles from "./Pagination.styles";

const Pagination = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid item className={classes.paginationWrapper}>
          <List className={classes.listWrapper}>
            <ListItem className={classes.listItem}>
              <Link to="#">
                <img src={leftArrow} className={classes.icon} alt="Previous" />
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link to="#">1</Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link to="#">2</Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link to="#">3</Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link to="#">4</Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link to="#">
                {/* <object
                  type="image/svg+xml"
                  data={rightArrow}
                  className={classes.icon}
                >
                  Next
                </object> */}
                <img src={rightArrow} className={classes.icon} alt="Next" />
              </Link>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Pagination;
