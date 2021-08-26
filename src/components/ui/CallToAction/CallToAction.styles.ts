import { makeStyles } from "@material-ui/core";
import banner from "../../../assets/banner/banner.png";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: " #1b3f4e",
    backgroundImage: `url(${banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    // marginTop: "8rem",
    position: "relative",
    textAlign: "center",

    "&:before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgb(27 63 78 / 90%)",
    },
  },
  container: {
    position: "relative",
    padding: "6rem 0rem 5rem",

    "@media (max-width: 576px)": {
      paddingRight: "3rem",
      paddingLeft: "3rem",
    },
  },
  title: {
    color: theme.palette.common.white,
    fontSize: "3rem",
    marginBottom: ".8rem",
    "@media (max-width: 768px)": {
      fontSize: "3rem",
    },
    "@media (max-width: 576px)": {
      fontSize: "2.5rem",
    },
  },
  subtitle: {
    color: theme.palette.common.white,
    fontSize: "1.5rem",
    fontWeight: 500,
    marginBottom: "3rem",

    "@media (max-width: 576px)": {
      fontSize: "1.5rem",
    },
  },
  moreButton: {
    ...theme.typography.button,
    backgroundColor: theme.palette.secondary.main,
    padding: "0.5rem 1.5rem",
    fontSize: "1.3rem",
    textDecoration: "none",
    border: "2px solid",
    borderColor: theme.palette.secondary.main,
    transition: "all 0.3s linear",
    display: "inline-block",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.secondary.main,
    },

    "@media (max-width: 768px)": {
      padding: ".8rem 3.5rem",
    },
  },
}));

export default useStyles;
