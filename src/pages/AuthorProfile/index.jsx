import { Button, Container, Grid, Typography } from "@material-ui/core";
import CallToAction from "../../components/ui/CallToAction";
import AuthorItems from "../../components/ui/AuthorItems";
import SocialShare from "../../components/ui/SocialShare";
import heroBanner from "../../assets/banner/lucas-wesney-s-y2HJElONo-unsplash.jpg";
import SignUpModal from "../Authentication/SignUpModal";
import React, { useEffect, useState } from "react";
import authorImg from "../../assets/author.png";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import useStyles from "./AuthorProfile.styles";
import { useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router";
import Layout from "../../Layout";
import axios from "axios";
import { toast } from "react-toastify";

const AuthorProfile = () => {
  const classes = useStyles();
  const { username } = useParams();
  const history = useHistory();
  const location = useLocation();
  const user = useSelector((state) => state.user);

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [imageSummery, setImageSummery] = useState([]);
  const [isFollowing, setFollowing] = useState(false);
  const [profileInfo, setProfileInfo] = useState({});


  useEffect(() => {
    setLoading(true);
    try {
      axios
      .get(`${process.env.REACT_APP_API_URL}/user/${username}/statistics`)
      .then(({ data }) => {
        if (data?.status) {
          setProfileInfo(data?.profile);
          setImageSummery(data?.images_summary);
          setLoading(false);

          if (user?.token) {
            axios
              .get(
                `${process.env.REACT_APP_API_URL}/sellers/follow_status/${data.profile.id}`,
                {
                  headers: { Authorization: user.token },
                }
              )
              .then((response) => {
                if (response.data.status) {
                  setFollowing(true);
                } else {
                  setFollowing(false);
                }
              });
          }

        }
      })
    } catch (error) {
      console.log(error);
    }
  }, [username, user])

  const handleJoinUsButton = () =>{
    if (!user.token) {
      setOpenAuthModal(true);
    }
  }

  const handleFollower = () => {
    if (!user.token && window.innerWidth > 900) {
      setOpenAuthModal(true);
    } else if (!user.token && window.innerWidth < 900) {
      history.push(`/login?url=${location.pathname}`);
    } else if (user.token) {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/sellers/followers/${profileInfo?.id}`,
          {},
          {
            headers: { Authorization: user.token },
          }
        )
        .then((response) => {
          if (response?.status === 200) {
            setFollowing(!isFollowing);
          }
        });
    } else {
      toast.error("You can't follow yourself");
    }
  };

  console.log("profileInfo", profileInfo?.id);

  
  return (
    <Layout title={`${profileInfo?.username} | Piktask`}>
      <Header />
      <div
        className={classes.authorHero}
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <Container>
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              {profileInfo ? (
                <Grid container className={classes.profileWrapper}>
                  <div className={classes.authorImg}>
                    {profileInfo?.avatar ? (
                      <img src={profileInfo?.avatar} alt={profileInfo?.username} />
                    ) : (
                      <img src={authorImg} alt={profileInfo?.username} />
                    )}
                  </div>
                  <div className={classes.authorInfo}>
                    <Typography className={classes.authorName} variant="h3">
                      {profileInfo?.username}
                    </Typography>
                    <div className={classes.resourceDetails}>
                      <Typography className={classes.infoItem} variant="body2">
                        Resources
                        <span>{profileInfo?.total_images}</span>
                      </Typography>
                      <Typography className={classes.infoItem} variant="body2">
                        Followers
                        <span>{profileInfo?.total_followers}</span>
                      </Typography>
                      <Typography className={classes.infoItem} variant="body2">
                        Downloads
                        <span>{profileInfo?.total_downloads}</span>
                      </Typography>
                      {user.id !== profileInfo?.id && (
                        <div>
                          <Button
                            className={classes.followBtn}
                            onClick={handleFollower}
                          >
                            {!isFollowing ? <>Follow</> : <>Following</>}
                          </Button>
                        </div>
                      )}
                    </div>
                    <div className={classes.authorSocials}>
                      {profileInfo.facebook || profileInfo.instagram || profileInfo.twitter ? (
                        <>
                          <SocialShare
                            title="Follow this author:"
                            profileInfo={profileInfo}
                          />
                        </>
                      ) : ( null )}
                    </div>
                  </div>
                </Grid>
                ) : (
                  <h1>No information found</h1>
                )
              }
            </>
          )
        }
        </Container>
      </div>
      <AuthorItems userId={profileInfo.id} imageSummery={imageSummery} />
      
      {!user.token ? (
        <CallToAction
          title="Join Piktask team"
          subtitle="Upload your first copyrighted design. Get $5 designer coupon packs"
          buttonText="Join Us"
          buttonClicked={()=>handleJoinUsButton()}
        />
      ) : (
        <CallToAction
          title="Go Premium"
          subtitle="Upload your first copyrighted design. Get $5 designer coupon packs"
          buttonLink="/subscription"
          buttonText="See Plans"
        />
      )}
      
      {/* Sign up modal section*/}
        <SignUpModal
        openAuthModal={openAuthModal}
        setOpenAuthModal={setOpenAuthModal}
      />
      <Footer />
    </Layout>
  );
};

export default AuthorProfile;