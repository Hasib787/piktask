import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  carouselWrapper: {
    marginBottom: "3rem",

    "& .slick-arrow": {
      position: "absolute",
      top: "50%",
      transform: "translateY(-60.4%)",
      zIndex: "1",
      color: "#1B3F4E",
      height: "83%",
      width: 150,
      cursor: "pointer",

      "& .MuiSvgIcon-root": {
        color: "rgb(20 51 64 / 94%)",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "3.5rem",
        background: "#ddd",
        borderRadius: "50%",
      },
    },
    "& .slick-prev": {
      left: 5,
      transition: "all 0.6s linear",
      background:
        "linear-gradient(90deg, rgb(0 0 0) 30%, rgb(0 0 0 / 0%) 100%)",
      "&:hover .MuiSvgIcon-root": {
        backgroundColor: "#117A00",
        color: "white",
      },
    },
    "& .slick-next": {
      right: 5,
      transition: "all 0.6s linear",
      background:
        "linear-gradient(-90deg, rgb(0 0 0) 30%, rgb(0 0 0 / 0%) 100%)",
      "&:hover .MuiSvgIcon-root": {
        backgroundColor: "#117A00",
        color: "white",
      },
    },
  },
}));

export default useStyles;
