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
      background: "#D5D5D5",
      color: "#1B3F4E",
      fontSize: 24,
      zIndex: "1",
      height: 30,
      width: 30,
      borderRadius:"50%",
    },
    "& .slick-prev": {
      left: 20,
    },
    "& .slick-next": {
      right: 20,
    }
  },
  
}));

export default useStyles;