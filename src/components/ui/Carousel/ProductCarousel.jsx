import React from 'react';
import "slick-carousel/slick/slick.css";
import Product from '../Products/Product';
import { Container } from './Carousel.styles';

export const ProductCarousel = ({ products }) => {    
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
                centerPadding: "0rem",
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "0",
              }
            }
          ]
      };

    return (
        <>
            <Container {...settings}>
                {products.length > 0 && products.map(product => (
                    <Product key={product._id} product={product} />
                ))}
            </Container>
      </>
    )
};