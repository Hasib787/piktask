import { Container } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Category from "../Category";
// import { Container } from "./Carousel.styles";
import useStyles from "./Carousel.styles";

export const CategoryCarousel = () => {
  const [photos, setPhotos] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/categories/popular`)
        .then(({ data }) => {
          if (data?.status) {
            setPhotos(data.categories);
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <div>
        <NavigateBeforeIcon />
      </div>
    ),
    nextArrow: <NavigateNextIcon />,

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
        <Slider {...settings} className={classes.carousel}>
          {photos?.map((photo) => (
            <Category key={photo?.id} photo={photo} />
          ))}
        </Slider>
      </Container>
    </>
  );
};
