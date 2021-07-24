import { Button, Container, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import productsData from "../../data/products.json";
import { ProductType } from "../../types";
import useStyles from "./SingleCategory.styles";

type Props = {
  products: ProductType[];
};

type Params = {
  category: string;
  id: string;
};

const ACCESS_KEY = "nw4TpvwFYuQYe5aw0eQ-oJxJoMy6px8yttv4vMWHQRM";

const SingleCategory: FC<Props> = (): JSX.Element => {
  const [photos, setPhotos] = useState([]);

  const classes = useStyles();
  const { products } = productsData;
  const { id } = useParams<Params>();

  useEffect(() => {
    try {
      const data = axios.get(`https://api.unsplash.com/photos`).then((res) => {
        console.log(res);
      });

      // setPhotos(data.results);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const product = products.find((product) => product._id === id);

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
                src={product?.image}
                alt={product?.name}
              />
              <div className={classes.buttons}>
                <Button className={classes.button}>Save</Button>
                <Button className={classes.button}>
                  <img
                    className={classes.buttonIcon}
                    src={downArrow}
                    alt="Down arrow"
                  />
                  Try
                </Button>
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
          </Grid>

          <Grid item md={6} xs={6} className={classes.productColumn}>
            <Typography className={classes.title} variant="h2">
              {product?.name}
            </Typography>
            <Typography>2 months ago</Typography>
            <Typography className={classes.description} variant="body1">
              This image is a legal copy and available for commercial use
              resource. <span>Upgrade to Premium</span> plan and get license
              authorization.
            </Typography>
            <Typography className={classes.subHeading} variant="subtitle1">
              <span>Designhill License</span>
              Free for personal and commercial purpose with attribution
            </Typography>

            <Grid container className={classes.detailsContainer}>
              <Grid item xs={6} className={classes.gridItem}>
                <div className={classes.singleItem}>
                  <Typography>
                    <strong>Image ID: </strong>5879860
                  </Typography>
                  <Typography>
                    <strong>Image Size </strong>2500*2500
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
                    <strong>Created: </strong>Jan 21, 2021
                  </Typography>
                  <Typography>
                    <strong>Category: </strong>Vector
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
                    src={product?.author?.profile_image}
                    alt={product?.author?.name}
                  />
                  <div>
                    <Typography className={classes.profileName} variant="h3">
                      {product?.author?.profile_name}
                    </Typography>
                    <Typography
                      className={classes.resourceInfo}
                      variant="body2"
                    >
                      20 Resources
                    </Typography>
                  </div>
                </div>
                <Button className={`${classes.authorBtn} ${classes.followBtn}`}>
                  Follow
                </Button>
                <Button
                  className={`${classes.authorBtn} ${classes.downloadBtn}`}
                >
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
