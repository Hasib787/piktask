import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  carouselWrapper: {
    marginBottom: "3rem",

    "& .slick-arrow": {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: "1",
      color: "#1B3F4E",
      height: "100%",
      width: 100,
      cursor: "pointer",
      
      "& .MuiSvgIcon-root": {
        color: "red",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "5.5rem",
      },
    },
    "& .slick-prev": {
      left: 0,
      background: "linear-gradient(90deg, rgba(128,128,128,1) 0%, rgba(128,128,128,0) 100%)",
    },
    "& .slick-next": {
      right: 0,
      background: "linear-gradient(-90deg, rgba(128,128,128,1) 0%, rgba(128,128,128,0) 100%)",
    },
  },

  prevIconWrapper: {
    backgroundColor: "#444",
  },
}));

export default useStyles;
