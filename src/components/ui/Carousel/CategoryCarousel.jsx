import { Container } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import useStyles from "./Carousel.styles";

export const CategoryCarousel = () => {
  const classes = useStyles();

  const [popularCategories, setPopularCategories] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(`https://piktask.com/api/categories/popular`)
        .then(({ data }) => {
          if (data?.status) {
            setPopularCategories(data?.categories);
          }
        });
    } catch (error) {
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
    arrows: true,
    prevArrow: "next",
    nextArrow: "Prev",

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

  console.log("popularCategories", popularCategories);
  return (
    <>
      <Container>
        <Slider {...settings} className={classes.carouselWrapper}>
          {popularCategories?.map((photo) => (
            // <Category key={photo?.id} photo={photo} />
          ))}
        </Slider>
      </Container>
    </>
  );
};
