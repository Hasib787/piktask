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
  author: string;
};

const Post: FC<Props> = ({ title, description, image, id, author }) => {
  const classes: ClassNameMap = useStyles();

  return (
    <Grid item xs={6} sm={6} md={3} className={classes.root}>
      <div className={classes.postWrapper}>
        <div className={classes.imageWrapper}>
          <Link to={`/blog/${id}`} className={classes.singlePost} />
          <img src={image} alt={title} />
        </div>
        <div className={classes.contentWrapper}>
          <Link to={`/blog/${id}`} className={classes.titleLink}>
            <Typography className={classes.title}>
              {title}
            </Typography>
          </Link>
          <Typography className={classes.description} variant="h2">{getWords(10, description)}...</Typography>
          <Typography className={classes.authorInfo}>By {author} <span>2 weeks ago</span></Typography>
        </div>
      </div>
    </Grid>
  );
};

export default Post;
