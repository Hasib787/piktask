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
            Related tags
          </Typography>
          <div>
            {allTags?.map((tag, index) => (
              <Button
                className={classes.tagButton}
                key={index}
                tag={tag}
                component={Link}
                to={`/tag/${tag}`}
              >
                {tag}
              </Button>
            ))}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default TagButtons;
