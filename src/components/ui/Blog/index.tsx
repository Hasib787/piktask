import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import postData from "../../../data/blog.json";
import useStyles from "./Blog.styles";
import Post from "./Post";

interface Guidline {
  _id: string;
  title: string;
  description: string;
  image: string;
  author: string;
}

const Blog = (): JSX.Element => {
  const classes = useStyles();
  const posts: Guidline[] = postData.posts;

  return (
    <div className={classes.wrapper}>
      <Container>
        <Grid container className={classes.headingWrapepr}>
          <Typography className={classes.heading} variant="h2">
            Designhill Guidline
          </Typography>
          <Typography className={classes.subheading} variant="subtitle1">
            Tens of millions of designers are using png tree
          </Typography>
        </Grid>

        <Grid container spacing={3} className={classes.postsWrapper}>
          {posts.length > 0 &&
            posts.map((post) => (
              <Post
                key={post._id}
                title={post.title}
                description={post.description}
                image={post.image}
                id={post._id}
              />
            ))}
        </Grid>
        <Button className={classes.moreButton}>See More</Button>
      </Container>
    </div>
  );
};

export default Blog;
