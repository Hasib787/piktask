import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./TagButtons.styles";

const TagButtons = ({ allTags }) => {
  const classes = useStyles();
  
  return (
    <>
      <Grid container>
        <Grid item className={classes.tagsContainer}>
          <Typography className={classes.tagTitle} variant="h3">
            Related Tags
          </Typography>
          {
            allTags.map((tag) => 
            <Button className={classes.tagButton} tag={tag} component={Link} to={`/tag/2`}>
              {tag}
            </Button>)
          }
          {/* <Button className={classes.tagButton} component={Link} to={`/tag/2`}>
            Business Card
          </Button>
          <Button className={classes.tagButton} component={Link} to={`/tag/3`}>
            Card
          </Button>
          <Button className={classes.tagButton} component={Link} to={`/tag/4`}>
            Business
          </Button>
          <Button className={classes.tagButton} component={Link} to={`/tag/2`}>
            Modern Business Card
          </Button>
          <Button className={classes.tagButton} component={Link} to={`/tag/2`}>
            Business Card
          </Button>
          <Button className={classes.tagButton} component={Link} to={`/tag/2`}>
            Card
          </Button>
          <Button className={classes.tagButton} component={Link} to={`/tag/2`}>
            Business
          </Button> */}
        </Grid>
      </Grid>
    </>
  );
};

export default TagButtons;
