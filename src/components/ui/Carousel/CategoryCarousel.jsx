import { Container } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Category from "../Category";
import useStyles from "./Carousel.styles";

function NavigateNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <NavigateNextIcon />
    </div>
  );
}

function NavigatePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <NavigateBeforeIcon />
    </div>
  );
}

export const CategoryCarousel = () => {
  const classes = useStyles();

  const [popularCategories, setPopularCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/categories/popular`)
        .then(({ data }) => {
          if (data?.status) {
            setPopularCategories(data?.categories);
            setLoading(false);
          }
        });
    } catch (error) {
      setLoading(false);
      console.log("Popular categories error: ", error);
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: <NavigateNextArrow />,
    prevArrow: <NavigatePrevArrow />,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <Container>
        {/* <Grid container spacing={2}> */}
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            {
              <Slider {...settings} className={classes.carouselWrapper}>
                {popularCategories?.map((photo) => (
                  <Category key={photo.id} photo={photo} />
                ))}
              </Slider>
            }
          </>
        )}
        {/* </Grid> */}
      </Container>
    </>
  );
};
