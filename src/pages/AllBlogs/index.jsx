import { Container, Grid, makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spacing from '../../components/Spacing';
import Post from '../../components/ui/Blog/Post';
import Footer from '../../components/ui/Footer';
import Header from '../../components/ui/Header';
import HeroSection from '../../components/ui/Hero';
import Layout from '../../Layout';

const useStyles = makeStyles((theme) => ({
  postsWrapper: {
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "@media (max-width: 768)": {
      justifyContent: "flex-start",
    },
  },
}));

const AllBlogs = () => {
  const classes = useStyles();
  const [blogsPost, setBlogsPost] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
    .get(`${process.env.REACT_APP_API_URL}/blogs/`)
    .then(({data}) => {
      if(data?.status){
        setBlogsPost(data?.blogs);
        setLoading(false);
      }
    })
  }, []);

  return (
    <Layout title={"AllBlogs || Piktask"}>
      <Header />
      <HeroSection
        size="medium"
        blogsTitle
        isSearch
      />
      <Spacing space={{height: "3rem"}} />
      <Container>
        <Grid container spacing={2} className={classes.postsWrapper}>
          {blogsPost?.length > 0 &&
            blogsPost?.map((post) => (
              <Post key={post?.id} post={post}/>
            ))}
        </Grid>
      </Container>
      <Footer/>
    </Layout>
  );
};

export default AllBlogs;