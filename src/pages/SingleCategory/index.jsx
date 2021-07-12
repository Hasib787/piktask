import { Button, Container, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import bannerImg from "../../assets/banner/banner.png";
import copyIcon from "../../assets/icons/copy.svg";
import downArrow from "../../assets/icons/downArrow.svg";
import downArrowIconWhite from "../../assets/icons/downArrowIconWhite.svg";
import shareIcon from "../../assets/icons/share.svg";
import Blog from "../../components/ui/Blog";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import SectionHeading from "../../components/ui/Heading";
import HeroSection from "../../components/ui/Hero";
import Products from "../../components/ui/Products";
import TagButtons from "../../components/ui/TagButtons";
import useStyles from "./SingleCategory.styles";
import moment from 'moment';
import { useSelector } from "react-redux";


const SingleCategory = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [imageDetails, setImageDetails] = useState({});
  const [follower, setFollower] = useState(false);

  const user = useSelector((state) => state.user);
  console.log(user.token);

  const history = useHistory();

 
  useEffect(() => {
    window.scrollTo(0, 500);
    try {
      axios
        .get(
          `https://piktask.com/api/images/1`
        )
        .then(({ data }) => {
          console.log(data.detail);
          if(data?.success) {
          // const singleImage = data?.detail.find(item => item.id === Number(id));
          setImageDetails(data.detail);
          console.log("user-token",user.token);
          if (user.token) {
            axios.get(`https://piktask.com/api/sellers/follow_status/${data.detail.user_id}`, {
              headers: {"Authorization" : user.token}
            })
            .then((response) => {
              console.log(response);
              if(response.data.status){
                setFollower(true);
              } 
              else{
                setFollower(false);
              }
            })
            console.log("Login");
            console.log("userLogin-token",user.token);
          }
          }
          
        });
    }
    catch (error) {
      console.log(error.message);
    }

  }, [id, user.token]);

  

  const handleFollower = () => {
    if (!user.token) {
      history.push("/login")
    } else{
      const followerAPI = `https://piktask.com/api/sellers/followers/${imageDetails.user_id}`;
      axios.post(followerAPI, {},{
        headers: {"Authorization" : user.token}
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setFollower(!follower);
        }
      })
    }
    
  }

  return (
    <>
      <Header />
      <HeroSection
        background={bannerImg}
        size="medium"
        title="Graphic Resource for Free Download"
        subtitle="Royalty Free PNG Images, Vectors, Backgrounds, Templates, Text Effect"
      />

      <Container className={classes.containerWrapper}>
        <Grid
          container
          spacing={4}
          classes={{ container: classes.itemDetailsContainer }}
        >
          <Grid item md={6} xs={6} className={classes.productColumn}>
            <div className={classes.imageWrapper}>
              <img
                className={classes.image}
                src={imageDetails?.thumbnail}
                alt={imageDetails?.original_name}
              />
              <div className={classes.buttons}>
                <div className={classes.buttonGroup}>
                  <Button className={classes.button}>Save</Button>
                  <Button className={classes.button}>
                    <img
                      className={classes.buttonIcon}
                      src={downArrow}
                      alt="Down arrow"
                    />
                    Try
                  </Button>
                </div>
                <div className={classes.buttonGroup}>
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
                
              </div>
            </div>
          </Grid>

          <Grid item md={6} xs={6} className={classes.productColumn}>
            <Typography className={classes.title} variant="h2">
              {imageDetails?.title}
            </Typography>
            <Typography>{imageDetails?.creation_ago}</Typography>
            <Typography className={classes.description} variant="body1">
              {imageDetails?.description}
            </Typography>
            <Typography className={classes.subHeading} variant="subtitle1">
              <span>Designhill License</span>
              Free for personal and commercial purpose with attribution
            </Typography>

            <Grid container className={classes.detailsContainer}>
              <Grid item xs={6} className={classes.gridItem}>
                <div className={classes.singleItem}>
                  <Typography>
                    <strong>Image ID: </strong>{imageDetails?.id}
                  </Typography>
                  <Typography>
                    <strong>Image Size </strong>{imageDetails?.height}*{imageDetails?.width}
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
                    <strong>Created: </strong>{moment(imageDetails?.createdAt).format("LL")}
                  </Typography>
                  <Typography>
                    <strong>Category: </strong>{imageDetails?.category?.name}
                  </Typography>
                </div>
                <div>
                  <Typography>
                    <strong>Scope of authorization: </strong>personal/enterprise
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item className={classes.authorArea}>
                <div className={classes.authorProfile}>
                  <img
                    className={classes.authorImg}
                    src={imageDetails?.user?.avatar}
                    alt={imageDetails?.user?.username}
                  />
                  <div>
                    <Typography className={classes.profileName} variant="h3">
                      {imageDetails?.user?.username}
                    </Typography>
                    <Typography
                      className={classes.resourceInfo}
                      variant="body2"
                    >
                      {imageDetails?.user?.total_resources}
                    </Typography>
                  </div>
                </div>
                {
                  !follower ? 
                    <Button 
                      className={`${classes.authorBtn} ${classes.followBtn}`}
                      onClick={handleFollower}
                    >
                      Follow
                    </Button>
                    : 
                    <Button 
                      className={`${classes.authorBtn} ${classes.unFollowBtn}`}
                      onClick={handleFollower}
                    >
                      UnFollow
                    </Button>
                }
                
                <Button className={`${classes.authorBtn} ${classes.downloadBtn}`}>
                  <img src={downArrowIconWhite} alt="Download" />
                  Download
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* BUTTONS OF TAGS */}
        <TagButtons />

        <SectionHeading
          title="Related Products"
          subtitle="Top website templates with the highest sales volume."
          size="large"
        />
        <Products />
      </Container>
      <Blog />
      <Footer />
    </>
  );
};

export default SingleCategory;
