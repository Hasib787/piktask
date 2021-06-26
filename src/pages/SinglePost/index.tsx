import { Container, Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/ui/Footer";
import postData from "../../data/blog.json";
import useStyles from "./SinglePost.styles";

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
    <>
      <Container>
        <img src={getPostByID?.image} alt={getPostByID?.title} />
        <Typography variant="h2">{getPostByID?.title}</Typography>
        <Typography>{getPostByID?.author}</Typography>
        <Typography>{getPostByID?.description}</Typography>
      </Container>
      <Footer />
    </>
  );
};

export default SingleBlogPost;
