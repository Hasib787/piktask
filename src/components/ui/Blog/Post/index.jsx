import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { getWords } from "../../../../helpers";
import useStyles from "./Post.styles";


const Post = ({ post, recentBlog }) => {
  const classes = useStyles();

  return (
    <>
    {recentBlog ? (
      <div style={{marginBottom: "2rem", width: "100%"}}>
        <Grid item xs={12} sm={12} md={12} className={classes.root}>
          <div className={classes.postWrapper}>
            <div className={classes.imageWrapper}>
              <Link to={`/blog/${post?.id}`} className={classes.singlePost} />
              <img src={post?.thumbnail} alt={post?.title} />
            </div>
            <div className={classes.contentWrapper}>
              <Link to={`/blog/${post?.id}`} className={classes.titleLink}>
                <Typography className={classes.title}>
                  {post?.category}
                </Typography>
              </Link>
              {/* <Typography className={classes.description} variant="h2">{getWords(4, post?.title)}...</Typography> */}
              <Typography className={classes.description} variant="h2">{post?.title} Lorem ipsum dolor sit amet.</Typography>
              <Typography className={classes.authorInfo}>By {post?.username} <span>2 weeks ago</span></Typography>
            </div>
          </div>
        </Grid>
      </div>
    ) : (
      <Grid item xs={6} sm={6} md={3} className={classes.root}>
        <div className={classes.postWrapper}>
          <div className={classes.imageWrapper}>
            <Link to={`/blog/${post?.id}`} className={classes.singlePost} />
            <img src={post?.thumbnail} alt={post?.title} />
          </div>
          <div className={classes.contentWrapper}>
            <Link to={`/blog/${post?.id}`} className={classes.titleLink}>
              <Typography className={classes.title}>
                {post?.category}
              </Typography>
            </Link>
            <Typography className={classes.description} variant="h2">{getWords(10, post?.title)}...</Typography>
            <Typography className={classes.authorInfo}>By {post?.username} <span>2 weeks ago</span></Typography>
          </div>
        </div>
      </Grid>
    )}
    
    </>
  );
};

export default Post;
