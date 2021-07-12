import axios from "axios";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import Category from "../Category";
import { Container } from "./Carousel.styles";


export const CategoryCarousel = ({ categories }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(
          // `https://api.unsplash.com/search/photos?query=Meeting room&per_page=12&client_id=${ACCESS_KEY}`
          // "https://piktask.com/api/categories?query=Meeting room&per_page=12"
          "https://piktask.com/api/categories"
        )
        .then(({ data }) => {
          setPhotos(data.categories);
          console.log(data.categories[0]);
        });

      // setPhotos(data);
    } 
    catch (error) {
      console.log(error.message);
    }
  }, []);

  // console.log(photos);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
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
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <>
      <Container {...settings}>
        {photos?.map((photo) => (
          <Category key={photo?.id} photo={photo} />
        ))}
      </Container>
    </>
  );
};
