import { Container } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Product from "../Products/Product";
// import { Container } from "./Carousel.styles";

export const ProductCarousel = ({ query = "office", count = 12 }) => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/images/recent`)
        .then(({ data }) => {
          if (data?.success) {
            setPhotos(data.images);
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
    arrows: false,

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
        <Slider {...settings}>
        {photos.map((photo) => (
            <Product key={photo.id} photo={photo} />
          ))}
        </Slider>
         
      </Container>
    </>
  );
};
