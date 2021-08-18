import { Button, Container, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import authorPhoto from "../../assets/author.png";
import bannerImg from "../../assets/banner/banner.png";
import copyIcon from "../../assets/icons/copy.svg";
// import downArrow from "../../assets/icons/downArrow.svg";
import downArrowIconWhite from "../../assets/icons/downArrowIconWhite.svg";
import likeIcon from "../../assets/icons/likeIcon.svg";
import shareIcon from "../../assets/icons/share.svg";
import Spacing from "../../components/Spacing";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import SectionHeading from "../../components/ui/Heading";
import HeroSection from "../../components/ui/Hero";
// import HeroSection from "../../components/ui/Hero";
// import Products from "../../components/ui/Products";
import Product from "../../components/ui/Products/Product";
import TagButtons from "../../components/ui/TagButtons";
import SignUpModal from "../Authentication/SignUpModal";
import useStyles from "./SingleCategory.styles";

const SingleCategory = () => {
  const classes = useStyles();
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [follower, setFollower] = useState(false);
  const [like, setLike] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [imageDetails, setImageDetails] = useState({});
  const [relatedImage, setRelatedImage] = useState([]);
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 150);

    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/images/${id}`)
        .then(({ data }) => {
          if (data?.success) {
            setImageDetails(data.detail);
            if (data?.detail.tags) {
              const words = data.detail.tags.split(",");
              setAllTags(words.slice(1));
            }

            if (user?.token) {
              axios
                .get(
                  `${process.env.REACT_APP_API_URL}/sellers/follow_status/${data.detail?.user_id}`,
                  {
                    headers: { Authorization: user.token },
                  }
                )
                .then((response) => {
                  if (response.data.status) {
                    setFollower(true);
                  } else {
                    setFollower(false);
                  }
                });
            }

            if (user?.token) {
              axios
                .get(
                  `${process.env.REACT_APP_API_URL}/images/${id}/like_status`,
                  {
                    headers: { Authorization: user.token },
                  }
                )
                .then((response) => {
                  if (response.data.status) {
                    setLike(true);
                  } else {
                    setLike(false);
                  }
                });
            }
          }
        });
    } catch (error) {
      console.log(error);
    }

    // related product API
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/images/${id}/related_image`)
        .then(({ data }) => {
          if (data?.status) {
            setRelatedImage(data.images);
            setLoading(false);
          }
        });
    } catch (error) {
      console.log("error", error);
    }
  }, [id, user.token]);

  const handleFollower = () => {
    if (!user.token) {
      setOpenAuthModal(true);
    } else {
      const followerAPI = `${process.env.REACT_APP_API_URL}/sellers/followers/${imageDetails?.user_id}`;
      axios
        .post(
          followerAPI,
          {},
          {
            headers: { Authorization: user.token },
          }
        )
        .then((response) => {
          if (response?.status === 200) {
            setFollower(!follower);
          }
        });
    }
  };

  const handleLikeBtn = () => {
    if (!user.token) {
      setOpenAuthModal(true);
    } else {
      const likeUnlikeAPI = `${process.env.REACT_APP_API_URL}/images/${id}/like`;
      axios
        .post(
          likeUnlikeAPI,
          {},
          {
            headers: { Authorization: user.token },
          }
        )
        .then((response) => {
          if (response?.status === 200) {
            setLike(like);
          }
        });
    }
  };

  return (
    <>
      <Header />
      <HeroSection background={bannerImg} size="medium" />
      <Container className={classes.containerWrapper}>
        <Grid
          container
          spacing={4}
          classes={{ container: classes.itemDetailsContainer }}
        >
          <Grid item md={7} sm={6} xs={12} className={classes.productColumn}>
            <div className={classes.imageWrapper}>
              <img
                className={classes.image}
                src={imageDetails?.preview}
                alt={imageDetails?.original_name}
              />
            </div>
          </Grid>
          <Grid item md={5} sm={6} xs={12} className={classes.productColumn}>
            <div className={classes.productDetails}>
              <Typography className={classes.title} variant="h2">
                {imageDetails?.title}
              </Typography>

              <div className={classes.buttons}>
                <Typography className={classes.creationDate}>
                  {imageDetails?.creation_ago}
                </Typography>
                <Button className={classes.button}>
                  <img
                    className={classes.buttonIcon}
                    src={shareIcon}
                    alt="Share"
                  />
                  Share
                </Button>
                <Button className={classes.button}>
                  <img
                    className={classes.buttonIcon}
                    src={copyIcon}
                    alt="Copy Link"
                  />
                  Copy Link
                </Button>
              </div>

              <Grid container className={classes.detailsContainer}>
                <Grid item xs={6} className={classes.gridItem}>
                  <div className={classes.singleItem}>
                    <Typography>
                      <strong>Image ID: </strong>
                      {imageDetails?.id}
                    </Typography>
                    <Typography>
                      <strong>Image Size </strong>
                      {imageDetails?.height} x {imageDetails?.width}
                    </Typography>
                  </div>
                  <div className={classes.singleItem}>
                    <Typography>
                      <strong>Copyright Information Copyright:</strong>
                      Designhill
                    </Typography>
                  </div>
                </Grid>

                <Grid item xs={6} className={classes.gridItem}>
                  <div className={classes.singleItem}>
                    <Typography>
                      <strong>Created: </strong>
                      {moment(imageDetails?.createdAt).format("LL")}
                    </Typography>
                    <Typography>
                      <strong>Category: </strong>
                      {imageDetails?.category?.name}
                    </Typography>
                  </div>
                  <div className={classes.singleItem}>
                    <Typography>
                      <strong>Scope of authorization: </strong>
                      personal/enterprise
                    </Typography>
                  </div>
                </Grid>
              </Grid>

              {/* <Typography className={classes.description} variant="body1">
                {imageDetails?.description}
              </Typography> */}
              {/* <Typography className={classes.subHeading} variant="subtitle1">
                <span>bdtask License</span>
                Free for personal and commercial purpose with attribution
              </Typography> */}

              <Grid container>
                <Grid item className={classes.authorArea}>
                  <div className={classes.authorProfile}>
                    <Link to={`/${imageDetails?.user?.username}`}>
                      {imageDetails?.user?.avatar ? (
                        <img
                          className={classes.authorImg}
                          src={imageDetails?.user?.avatar}
                          alt={imageDetails?.user?.username}
                        />
                      ) : (
                        <img
                          className={classes.authorImg}
                          src={authorPhoto}
                          alt="AuthorPhoto"
                        />
                      )}
                    </Link>

                    <div>
                      <Typography
                        className={classes.profileName}
                        variant="h3"
                        component={Link}
                        to={`/${imageDetails?.user?.username}`}
                      >
                        {imageDetails?.user?.username}
                      </Typography>
                      <Typography
                        className={classes.resourceInfo}
                        variant="body2"
                      >
                        {imageDetails?.user?.total_resources} Resources
                      </Typography>
                    </div>
                  </div>
                  {!follower ? (
                    <Button
                      className={`${classes.authorBtn} ${classes.followBtn}`}
                      onClick={handleFollower}
                    >
                      Follow
                    </Button>
                  ) : (
                    <Button
                      className={`${classes.authorBtn} ${classes.unFollowBtn}`}
                      onClick={handleFollower}
                    >
                      Unfollow
                    </Button>
                  )}
                </Grid>
              </Grid>

              <div className={classes.premiumInfo}>
                <Typography variant="h4">
                  Premium User:
                  <Button 
                    className={classes.premiumViewBtn}
                    component={Link}
                    to={`/subscription`}
                  >
                    View Plans</Button>
                </Typography>
                <Typography>- High-Speed Unlimited Download</Typography>
                <Typography>
                  - For commercial use{" "}
                  <Link to={"#"} className={classes.moreInfoBtn}>
                    More info
                  </Link>
                </Typography>
                <Typography>
                  Images license agreement
                  <Button className={classes.licenseBtn}>
                    Download License
                  </Button>
                </Typography>
                <Typography>@ Copyright : Piktask</Typography>
              </div>

              <div className={classes.buttonGroup}>
                <div className={classes.downloadWrapper}>
                  <Button className={classes.downloadBtn}>
                    <img src={downArrowIconWhite} alt="Download" />
                    Download
                  </Button>
                  <div className={classes.downloadedImage}>
                    {imageDetails?.user?.images?.total_downloads}
                  </div>
                </div>
                {!like ? (
                  <Button
                    className={classes.likeBtn}
                    onClick={handleLikeBtn}
                  >
                    <img src={likeIcon} alt="likeBtn" />
                  </Button>
                ) : (
                  <Button
                    className={classes.activeLikeBtn}
                    onClick={handleLikeBtn}
                  >
                    Unlike
                    {/* <img src={likeIcon} alt="Download" /> */}
                  </Button>
                )}
              </div>
            </div>
          </Grid>
        </Grid>

        {/* Sign up modal section*/}
        <SignUpModal
        openAuthModal={openAuthModal}
        setOpenAuthModal={setOpenAuthModal}
      />

        <Spacing space={{ height: "2.5rem" }}></Spacing>
        <SectionHeading
          title="Related Products"
          subtitle="Top website templates with the highest sales volume."
          size="large"
        />

        {/* <Products /> */}
        <Grid classes={{ container: classes.container }} container spacing={2}>
          {isLoading ? (
            <h2>Loading......</h2>
          ) : (
            relatedImage?.map((photo) => (
              <Grid
                key={photo.image_id}
                item
                xs={6}
                sm={4}
                md={3}
                className={classes.productItem}
              >
                <Product photo={photo} />
              </Grid>
            ))
          )}
        </Grid>

        {/* BUTTONS OF TAGS */}
        <TagButtons allTags={allTags} />
      </Container>
      <Footer />
    </>
  );
};

export default SingleCategory;
