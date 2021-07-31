// import Slider from "react-slick";
// import styled from "styled-components";

// export const Container = styled(Slider)`
//   .slick-slider {
//     margin: 3rem 0 2rem;
//   }
//   .slick-slide {
//     padding: 0 0.8rem;
//     outline: none;
//   }
// `;

import { makeStyles } from "@material-ui/core";

 const useStyles = makeStyles((theme) => ({
  carousel: {
    "& .slick-arrow": {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: "1",
      background: "#fff",
      height: "100%",

      "& svg":{
        color: "red",
      }
    },
    "& .slick-prev": {
      left: 0,
    },
    "& .slick-next": {
      right: 0,
    },
  },
  
  
}));

export default useStyles;