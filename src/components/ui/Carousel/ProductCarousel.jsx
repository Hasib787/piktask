import axios from "axios";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import Product from "../Products/Product";
import { Container } from "./Carousel.styles";

const ACCESS_KEY = "nw4TpvwFYuQYe5aw0eQ-oJxJoMy6px8yttv4vMWHQRM";

export const ProductCarousel = ({ query = "office", count = 12 }) => {
  const [photos, setPhotos] = useState([]);
  const getPhotos = async () => {
    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=${count}&client_id=${ACCESS_KEY}`
      );
      setPhotos(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "130px",
    arrows: false,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerPadding: "0rem",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <>
      <Container {...settings}>
        {photos.length > 0 &&
          photos.map((photo) => <Product key={photo.id} photo={photo} />)}
      </Container>
    </>
  );
};
