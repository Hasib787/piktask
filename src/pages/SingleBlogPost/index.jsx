import { Box, Container, Grid, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import HeroSection from "../../components/ui/Hero";
import Layout from "../../Layout";
import useStyles from "./SinglePost.styles";
import Spacing from "../../components/Spacing";
import axios from "axios";
import RelatedBlogs from "../../components/ui/Blog/RelatedBlogs";
import Post from "../../components/ui/Blog/Post";
import SectionHeading from "../../components/ui/Heading";

const SingleBlogPost = () => {
  const classes = useStyles();
  const {id} = useParams();

  const [blogDetails, setBlogDetails] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const [recentBlogsPost, setRecentBlogsPost] = useState([]);

  useEffect(() => {
    setLoading(true);

    // All Blogs API integration
    axios
    .get(`${process.env.REACT_APP_API_URL}/blogs/${id}`)
    .then(({data}) => {
      if(data?.status){
        setBlogDetails(data?.blog);
        setLoading(false);
      }
    })


    // Recent Blogs API integration
    axios
    .get(`${process.env.REACT_APP_API_URL}/blogs/`)
    .then(({data}) => {
      if(data?.status){
        setRecentBlogsPost(data?.blogs);
        setLoading(false);
      }
    })
  }, [id]);

  const [commentsData, setCommentsData] = useState({
    comment: "",
  });

  const handleAuthData = (e) => {
    const { name, value } = e.target;
    setCommentsData({ ...commentsData, [name]: value });
  };

  const handleCommentPost = () => {
    
  };

  return (
    <Layout>
      <Header />
      <HeroSection size="medium" />
      <Spacing space={{height: "5rem"}} />
      <Container>
        <Grid 
          container
          spacing={3}
          className={classes.blogContainer}
        >
          <Grid item sm={8}>
            <div className={classes.blogImageWrapper}>
              <img src={blogDetails?.thumbnail} alt={blogDetails?.category} />
            </div>

            <Spacing space={{height: "2rem"}} />
            <div className={classes.blogAuthorInfo}>
              <Typography variant="h2">{blogDetails?.category}</Typography>
              <Typography>{blogDetails?.title}</Typography>
              <Typography>{blogDetails?.description}</Typography>
              <Typography>By {blogDetails?.username} <span>2 weeks ago</span></Typography>
            </div>

            <Spacing space={{height: "4rem"}} />
            <div className={classes.blogContent}>
              <Typography>{blogDetails?.description}</Typography>
            </div>
            <Spacing space={{height: "3rem"}} />

            <div className={classes.blogImageWrapper}>
              <img src={blogDetails?.thumbnail} alt={blogDetails?.category} />
            </div>
            <Spacing space={{height: "4rem"}} />
            <div className={classes.blogContent}>
              <Typography>{blogDetails?.description}</Typography>
            </div>
            <Spacing space={{height: "4rem"}} />
            <div className={classes.blogContent}>
              <Typography>{blogDetails?.description}</Typography>
            </div>
          </Grid>

          <Grid item sm={4}>
            <Grid container spacing={0} className={classes.postsWrapper}>
              <SectionHeading title="Recent Blog" large></SectionHeading>
              {recentBlogsPost?.length > 0 &&
                recentBlogsPost?.slice(0, 3).map((post) => (
                  <Post recentBlog key={post?.id} post={post}/>
                ))}
            </Grid>
          </Grid>
        </Grid>

        <Spacing space={{height: "5rem"}} />
        <div className={classes.blogContainer}>
          <form onSubmit={handleCommentPost}>
            <TextField
              label="Comment"
              name="userName"
              value={commentsData.comment}
              onChange={handleAuthData}
              autoComplete="off"
            />
          </form>
          {/* <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '5 0%' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
              />
            </div>
          </Box> */}
        </div>

        <Spacing space={{height: "5rem"}} />
        <div className={classes.blogContainer}>
          <RelatedBlogs blogID={id} />
        </div>

      </Container>
      <Spacing space={{height: "2rem"}} />
      <Footer />
    </Layout>
  );
};

export default SingleBlogPost;
