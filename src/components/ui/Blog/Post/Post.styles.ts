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
    "& img": {
      width: "100%",
    },
  },
  contentWrapper: {
    padding: "2.5rem",
    "& a:hover h2": {
      color: theme.palette.secondary.main,
    },
  },
  titleLink: {
    textDecoration: "none",
  },
  title: {
    fontSize: "2.2rem",
  },
  description: {
    fontSize: "1.6rem",
  },
}));

export default useStyles;
