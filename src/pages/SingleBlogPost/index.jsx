import {
  Button,
  Container,
  FormControl,
  Grid,
  TextareaAutosize,
  Typography,
} from "@material-ui/core";
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
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import SignUpModal from "../Authentication/SignUpModal";
import moment from "moment";

const SingleBlogPost = () => {
  const classes = useStyles();
  const { id } = useParams();
  const shareUrl = window.location.href;
  const user = useSelector((state) => state.user);
  const [openAuthModal, setOpenAuthModal] = useState(false);

  const [blogDetails, setBlogDetails] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const [recentBlogsPost, setRecentBlogsPost] = useState([]);

  useEffect(() => {
    setLoading(true);

    // All Blogs API integration
    axios
      .get(`${process.env.REACT_APP_API_URL}/blogs/${id}`)
      .then(({ data }) => {
        if (data?.status) {
          setBlogDetails(data?.blog);
          setLoading(false);
        }
      });

    // Recent Blogs API integration
    axios.get(`${process.env.REACT_APP_API_URL}/blogs/`).then(({ data }) => {
      if (data?.status) {
        setRecentBlogsPost(data?.blogs);
        setLoading(false);
      }
    });
  }, [id]);

  const [comment, setComment] = useState("");

  const handleCommentPost = (e) => {
    e.preventDefault();

    if (!comment) {
      toast.error("Comment field is required");
      return;
    }
    if (!user?.token) {
      setOpenAuthModal(true);
    } else {
      const formData = new FormData();
      formData.append("comment", comment);
      const url = `${process.env.REACT_APP_API_URL}/blogs/${id}/blog_comment`;
      axios({
        method: "post",
        url,
        data: formData,
        headers: { Authorization: user.token },
      })
        .then((res) => {
          if (res?.status) {
            toast.success(res.data.message);
            setComment("");
            setLoading(false);
          }
        })
        .catch((error) => {
          const { errors } = error.response.data;
          for (let key in errors) {
            toast.error(errors[key]);
          }
          setLoading(false);
        });
    }
  };

  return (
    <Layout>
      <Header />
      <HeroSection size="medium" />
      <Spacing space={{ height: "5rem" }} />
      <Container>
        <Grid container spacing={3} className={classes.blogContainer}>
          <Grid item sm={8} md={8} xs={12} className={classes.blogsItem}>
            <div className={classes.blogImageWrapper}>
              <img src={blogDetails?.thumbnail} alt={blogDetails?.category} />
            </div>

            <Spacing space={{ height: "2rem" }} />
            <div className={classes.blogAuthorInfo}>
              <div className={classes.shareSocialMedia}>
                <div>
                  <Typography
                    variant="h2"
                    style={{ fontWeight: "500", fontSize: "1.8rem" }}
                  >
                    {blogDetails?.category}
                  </Typography>
                </div>
                <div style={{ display: "flex" }}>
                  <EmailShareButton url={shareUrl}>
                    <EmailIcon
                      size={25}
                      style={{ margin: "0.4rem" }}
                      round={true}
                    />
                  </EmailShareButton>

                  <FacebookShareButton url={shareUrl}>
                    <FacebookIcon
                      size={25}
                      style={{ margin: "0.4rem" }}
                      round={true}
                    />
                  </FacebookShareButton>

                  <FacebookMessengerShareButton url={shareUrl}>
                    <FacebookMessengerIcon
                      size={25}
                      style={{ margin: "0.4rem" }}
                      round={true}
                    />
                  </FacebookMessengerShareButton>

                  <TwitterShareButton url={shareUrl}>
                    <TwitterIcon
                      size={25}
                      style={{ margin: "0.4rem" }}
                      round={true}
                    />
                  </TwitterShareButton>

                  <LinkedinShareButton url={shareUrl}>
                    <LinkedinIcon
                      size={25}
                      style={{ margin: "0.4rem" }}
                      round={true}
                    />
                  </LinkedinShareButton>

                  <TelegramShareButton url={shareUrl}>
                    <TelegramIcon
                      size={25}
                      style={{ margin: "0.4rem" }}
                      round={true}
                    />
                  </TelegramShareButton>
                </div>
              </div>
              <Typography variant="h2">{blogDetails?.title}</Typography>
              <Typography>
                By {blogDetails?.username} <span>{moment(blogDetails?.createdAt).format("LL")}</span>
              </Typography>
            </div>

            <Spacing space={{ height: "3rem" }} />
            <div className={classes.blogContent}>
              <Typography>{blogDetails?.description}</Typography>
            </div>
            <Spacing space={{ height: "3rem" }} />

            <div className={classes.blogImageWrapper}>
              <img src={blogDetails?.thumbnail} alt={blogDetails?.category} />
            </div>
            <Spacing space={{ height: "4rem" }} />
            <div className={classes.blogContent}>
              <Typography>{blogDetails?.description}</Typography>
            </div>
            <Spacing space={{ height: "4rem" }} />
            <div className={classes.blogContent}>
              <Typography>{blogDetails?.description}</Typography>
            </div>

            <Spacing space={{ height: "5rem" }} />
            <div>
              <form onSubmit={handleCommentPost}>
                <FormControl fullWidth className={classes.fieldWrapper}>
                  <label htmlFor="description">Description</label>
                  <TextareaAutosize
                    id="description"
                    autoComplete="off"
                    className={classes.formDescription}
                    aria-label="minimum height"
                    minRows={6}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </FormControl>
                <Button
                  variant="contained"
                  className={classes.sentBtn}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send"}
                </Button>
              </form>
            </div>
          </Grid>

          <Grid item sm={4} md={4} xs={12} className={classes.blogsItem}>
            <Grid container spacing={0} className={classes.postsWrapper}>
              <SectionHeading title="Recent Blog" large></SectionHeading>
              {recentBlogsPost?.length > 0 &&
                recentBlogsPost
                  ?.slice(0, 3)
                  .map((post) => (
                    <Post recentBlog key={post?.id} post={post} />
                  ))}
            </Grid>
          </Grid>
        </Grid>

        <Spacing space={{ height: "5rem" }} />
        <div className={classes.blogContainer}>
          <RelatedBlogs blogID={id} />
        </div>
      </Container>
      <Spacing space={{ height: "2rem" }} />
      <SignUpModal
        openAuthModal={openAuthModal}
        setOpenAuthModal={setOpenAuthModal}
      />
      <Footer />
    </Layout>
  );
};

export default SingleBlogPost;
