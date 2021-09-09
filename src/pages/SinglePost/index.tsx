import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import HeroSection from "../../components/ui/Hero";
import postData from "../../data/blog.json";
import Layout from "../../Layout";
import useStyles from "./SinglePost.styles";
// import bannerImg from "../../assets/banner/banner.png";
import Spacing from "../../components/Spacing";

interface Post {
  _id: string;
  title: string;
  description: string;
  author: string;
  image: string;
}

interface PostID {
  id: string;
}

const SingleBlogPost = () => {
  const classes = useStyles();
  const params = useParams<PostID>();
  const posts: Post[] = postData.posts;

  const getPostByID = posts.find((post) => post._id === params.id);

  return (
    <Layout>
      <Header />
      <HeroSection size="medium" />
      <Spacing space={{height: "5rem"}} />
      <Container>
        <Grid 
          container
          spacing={3}
        >
          <Grid item sm={8}>
            <div className={classes.blogImageWrapper}>
              <img src={getPostByID?.image} alt={getPostByID?.title} />
            </div>
            <div className={classes.blogAuthorInfo}>
              <Typography variant="h2">{getPostByID?.title}</Typography>
              <Typography>{getPostByID?.description}</Typography>
              <Typography>By {getPostByID?.author} <span>2 weeks ago</span></Typography>
            </div>
            <Spacing space={{height: "4rem"}} />
            <div className={classes.blogContent}>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi, consectetur, animi veritatis earum, placeat rem ex harum inventore odio molestiae officia libero tempore impedit accusantium porro nesciunt quaerat delectus perferendis cupiditate est. Tenetur dolor odit aut inventore at atque sint ipsam, beatae fugit deserunt alias amet repudiandae soluta eos!
              </Typography>
            </div>
            <Spacing space={{height: "4rem"}} />
            <div className={classes.blogContent}>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi, consectetur, animi veritatis earum, placeat rem ex harum inventore odio molestiae officia libero tempore impedit accusantium porro nesciunt quaerat delectus perferendis cupiditate est. Tenetur dolor odit aut inventore at atque sint ipsam, beatae fugit deserunt alias amet repudiandae soluta eos!
              </Typography>
            </div>
          </Grid>
          <Grid item sm={4}>
            <Typography variant="h2">{getPostByID?.title}</Typography>
            <Typography>{getPostByID?.author}</Typography>
            <Typography>{getPostByID?.description}</Typography>
            <Typography>By {getPostByID?.author} <span>2 weeks ago</span></Typography>
          </Grid>
        </Grid>
      </Container>
      <Spacing space={{height: "5rem"}} />
      <Footer />
    </Layout>
  );
};

export default SingleBlogPost;
