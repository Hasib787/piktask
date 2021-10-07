import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Spacing from "../../../components/Spacing";
import Footer from "../../../components/ui/Footer";
import Header from "../../../components/ui/Header";
import SectionHeading from "../../../components/ui/Heading";
import Layout from "../../../Layout";
import UserSideBar from "../../components/UserSideBar";
import authorImg from "../../../assets/user/userProfile.jpg";
import useStyles from "./UserFollowing.style";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductNotFound from "../../../components/ui/ProductNotFound";
// import { Pagination } from "@material-ui/lab";

const UserFollowing = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.user);

  const [followersItem, setFollowersItem] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios
      .get(
        `${process.env.REACT_APP_API_URL}/user/following_list?limit=10&page=1`,
        {
          headers: { Authorization: user?.token },
        }
      )
      .then(({ data }) => {
        if (data?.status) {
          setFollowersItem(data?.following);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log("Category products error:", error);
        setLoading(false);
      });
  }, [user]);

  return (
    <Layout title="Followings || Piktask">
      <Header />
      <Spacing space={{ height: "5rem" }} />
      <Container>
        <Grid container spacing={2}>
          <Grid item md={3} sm={3} xs={12} className={classes.cardItem}>
            <UserSideBar />
          </Grid>
          <Grid item md={9} sm={9} xs={12} className={classes.cardItem}>
            <SectionHeading title="My Follower" large />
            <Grid>
              {isLoading || followersItem?.length ? (
                followersItem?.map((followItem) => (
                  <Grid key={followItem?.user_id} item xs={12} sm={12} md={12}>
                    <Card className={classes.followerProfileContent}>
                      <CardContent>
                        <div className={classes.followerProfile}>
                          <div className={classes.viewFollowerInfo}>
                            <div className={classes.followerImage}>
                              {followItem?.avatar ? (
                                <img
                                  src={followItem?.avatar}
                                  alt={followItem?.username}
                                />
                              ) : (
                                <img src={authorImg} alt={"author"} />
                              )}
                            </div>
                            <div className={classes.followerInfo}>
                              <Typography
                                className={classes.followerName}
                                variant="h3"
                              >
                                {followItem?.username}
                              </Typography>
                              <div className={classes.followerDetails}>
                                <Typography
                                  className={classes.followerInfoItem}
                                  variant="body2"
                                >
                                  Resources
                                  <span>{followItem?.total_images}</span>
                                </Typography>
                                <Typography
                                  className={classes.followerInfoItem}
                                  variant="body2"
                                >
                                  Followers
                                  <span>{followItem?.total_follower}</span>
                                </Typography>
                                <Typography
                                  className={classes.followerInfoItem}
                                  variant="body2"
                                >
                                  Downloads
                                  <span>{followItem?.total_download}</span>
                                </Typography>
                              </div>
                            </div>
                          </div>
                          <div className={classes.viewProfileBtn}>
                            <Button
                              component={Link}
                              to={`/${followItem?.username}`}
                              className={classes.viewMoreBtn}
                            >
                              View Profile
                            </Button>
                          </div>
                        </div>
                        <Spacing space={{ height: "2rem" }} />
                        <div className={classes.followerContent}>
                          <div className={classes.followerResources}>
                            {followItem?.images.map((followerResource) => (
                              <Card
                                key={followerResource?.id}
                                className={classes.followerFiles}
                              >
                                <img src={followerResource?.thumbnail} alt="" />
                              </Card>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              ) : (
                <ProductNotFound noCollection="User Following" />
              )}
            </Grid>
            <Spacing space={{ height: "2rem" }} />
            {/* <div style={{display: "flex", justifyContent: "flex-end"}}>
              <Pagination count={100} variant="outlined" shape="rounded" color="primary" />
            </div> */}
          </Grid>
        </Grid>
      </Container>
      <Spacing space={{ height: "5rem" }} />
      <Footer />
    </Layout>
  );
};

export default UserFollowing;
