import { Container } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Category from "../Category";
// import { Container } from "./Carousel.styles";

export const CategoryCarousel = () => {
  const [photos, setPhotos] = useState([]);

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
    autoplay: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: "130px",
    arrows: true,

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
          // centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          // centerPadding: "0px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <>
      <Container maxWidth="lg">
        <Slider {...settings}>
          {photos?.map((photo) => (
            <Category key={photo?.id} photo={photo} />
          ))}
        </Slider>
      </Container>
    </>
  );
};
