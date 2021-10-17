import { Grid, makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from '../Post';
import SectionHeading from '../../Heading';

const useStyles = makeStyles((theme) => ({
  postsWrapper: {
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap",
    "@media (max-width: 768)": {
      justifyContent: "flex-start",
    },
  },
}));

const RelatedBlogs = ({blogID}) => {
  const classes = useStyles();

  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
    .get(`${process.env.REACT_APP_API_URL}/blogs/${blogID}/related_blog`)
    .then(({data}) => {
      if(data?.status){
        setRelatedBlogs(data?.related_blogs);
        setLoading(false);
      }
    })
  }, [blogID]);

  return (
    <div>
      {isLoading}
      <Grid container spacing={2} className={classes.postsWrapper}>
        {relatedBlogs?.length > 0 &&
          relatedBlogs?.map((post) => (
            <>
              <SectionHeading title="Related Blog" large></SectionHeading>
              <Post key={post?.id} post={post}/>
            </>
          ))}
      </Grid>
    </div>
  );
};

export default RelatedBlogs;