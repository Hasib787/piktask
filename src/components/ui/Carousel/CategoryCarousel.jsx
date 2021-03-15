import React from "react";
import "slick-carousel/slick/slick.css";
import Category from "../Category";
import { Container } from "./Carousel.styles";

export const CategoryCarousel = ({ categories }) => {
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
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerPadding: "0px",
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        }
      }
    ]
  };

  return (
    <>
      <Container {...settings}>
        {categories.length > 0 &&
          categories.map((category) => (
            <Category key={category._id} category={category} />
          ))}
      </Container>
    </>
  );
};
