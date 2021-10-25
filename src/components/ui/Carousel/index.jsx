import { Container } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import CategoryItemLoader from "../Loader/CategoryItemLoader";
import PopularCategory from "../PopularCategory";
// import ProductNotFound from "../ProductNotFound";
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
  const categories = useSelector((state) => state.popularCategories);


  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
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
        <Slider {...settings} className={classes.carouselWrapper}>
          {categories?.length && categories?.map((photo) => (
            <PopularCategory key={photo.id} photo={photo} />
          ))}
        </Slider>
      </Container>
    </>
  );
};
