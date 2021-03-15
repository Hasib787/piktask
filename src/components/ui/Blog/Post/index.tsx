import { Grid, Typography } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { getWords } from "../../../../helpers";
import useStyles from "./Post.styles";

type Props = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const Post: FC<Props> = ({ title, description, image, id }) => {
  const classes: ClassNameMap = useStyles();

  return (
    <Grid item xs={8} sm={6} md={3} className={classes.root}>
      <div className={classes.postWrapper}>
        <img src={image} alt={title} />
        <div className={classes.contentWrapper}>
          <Link to={`/blog/${id}`} className={classes.titleLink}>
            <Typography className={classes.title} variant="h2">
              {title}
            </Typography>
          </Link>
          <Typography className={classes.description} variant="body1">
            {getWords(10, description)}
          </Typography>
        </div>
      </div>
    </Grid>
  );
};

export default Post;
