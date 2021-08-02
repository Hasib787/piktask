import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  carouselWrapper: {
    marginBottom: "3rem",

    "& .slick-arrow": {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: "1",
      backgroundColor: "#D5D5D5",
      color: "#1B3F4E",
      height: "100%",
      width: 70,
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
    },
    "& .slick-next": {
      right: 0,
    },
  },

  prevIconWrapepr: {
    backgroundColor: "#444",
  },
  nextIconWrapepr: {},
}));

export default useStyles;
