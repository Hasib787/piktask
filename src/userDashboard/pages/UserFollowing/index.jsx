import { Button, Card, CardContent, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Spacing from "../../../components/Spacing";
import Footer from "../../../components/ui/Footer";
import Header from "../../../components/ui/Header";
import SectionHeading from "../../../components/ui/Heading";
import Layout from "../../../Layout";
import UserSideBar from "../../components/UserSideBar";
import authorImg from "../../../assets/user/userProfile.jpg";
import useStyles from "./UserFollowing.style";
import image1 from "../../../assets/image6.jpg"
import image2 from "../../../assets/image7.jpg"


const UserFollowing = () => {
  const classes = useStyles();

  return (
    <Layout title="Followings || Piktask">
      <Header />

      <Spacing space={{ height: "5rem" }} />
      <Container>
        <Grid container spacing={4}>
          <Grid item md={3} sm={3} xm={12}>
            <UserSideBar />
          </Grid>
          <Grid item md={9} sm={9} xm={12}>
            <SectionHeading title="My Follower" large />
            <Grid
            // classes={{ container: classes.container }}
            >
              <Grid item xs={12} sm={12} md={12}>
                <Card className={classes.followerProfileContent}>
                  <CardContent>
                    <div className={classes.followerProfile}>
                      <div className={classes.viewFollowerInfo}>
                        <div className={classes.followerImage}>
                          {/* {profileInfo?.avatar ? (
                            <img
                              src={profileInfo?.avatar}
                              alt={profileInfo?.username}
                            />
                          ) : (
                            <img src={authorImg} alt={"author"} />
                            // )} */}
                            <img src={authorImg} alt={"author"} />
                        </div>
                        <div className={classes.followerInfo}>
                          <Typography
                            className={classes.followerName}
                            variant="h3"
                          >
                            Piktask
                            {/* {profileInfo?.username} */}
                          </Typography>
                          <div className={classes.followerDetails}>
                            <Typography
                              className={classes.followerInfoItem}
                              variant="body2"
                            >
                              Resources
                              {/* <span>{profileInfo?.total_images}</span> */}
                              <span>100</span>
                            </Typography>
                            <Typography
                              className={classes.followerInfoItem}
                              variant="body2"
                            >
                              Followers
                              {/* <span>{profileInfo?.total_followers}</span> */}
                              <span>24</span>
                            </Typography>
                            <Typography
                              className={classes.followerInfoItem}
                              variant="body2"
                            >
                              Downloads
                              {/* <span>{profileInfo?.total_downloads}</span> */}
                              <span>150</span>
                            </Typography>
                          </div>
                          {/* <div className={classes.authorSocials}>
                            {profileInfo.facebook ||
                            profileInfo.instagram ||
                            profileInfo.twitter ? (
                              <>
                                <SocialShare
                                  title="Follow this author:"
                                  profileInfo={profileInfo}
                                />
                              </>
                            ) : null}
                          </div> */}
                        </div>
                      </div>
                      <div className={classes.viewProfileBtn}>
                        <Button className={classes.viewMoreBtn}>View Profile</Button>
                      </div>
                    </div>
                    <Spacing space={{ height: "2rem" }} />
                    <div className={classes.followerContent}>
                      <div className={classes.followerResources}>
                        <Card className={classes.followerFiles}>
                          <img src={image1} alt="" />
                        </Card>
                        <Card className={classes.followerFiles}>
                          <img src={image2} alt="" />
                        </Card>
                        <Card className={classes.followerFiles}>
                          <img src={image1} alt="" />
                        </Card>
                        <Card className={classes.followerFiles}>
                          <img src={image2} alt="" />
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Spacing space={{ height: "5rem" }} />
      <Footer />
    </Layout>
  );
};

export default UserFollowing;
