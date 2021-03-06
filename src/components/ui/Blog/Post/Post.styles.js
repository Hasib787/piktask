import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",

    "@media (max-width: 576px)": {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
  postWrapper: {
    backgroundColor: theme.palette.common.white,
    "&:hover": {
      "& $imageWrapper img": {
        transform: "scale(1.1) rotate(2deg)",
      },
      "& $singlePost": {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      },
    },
  },
  imageWrapper: {
    position: "relative",
    height: "230px",
    overflow: "hidden",

    "& img": {
      transition: "all 0.3s linear",
      width: "100%",
      height: "100%",
    },
  },
  singlePost: {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 1,
    transition: "all 0.3s linear",
  },
  contentWrapper: {
    padding: "1.6rem 2.5rem",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 10%)",
    "& a:hover": {
      "& $title": {
        color: theme.palette.secondary.main,
      },
    },
  },
  titleLink: {
    textDecoration: "none",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "700",
    marginBottom: "0.8rem",
    transition: "color 0.3s linear",
  },
  description: {
    fontSize: "2rem",
    marginBottom: "0.8rem",
    transition: "color 0.3s linear",
  },
  authorInfo: {
    fontSize: "1.3rem",
    marginTop: "0.8rem",
    transition: "color 0.3s linear",
  },
}));

export default useStyles;
