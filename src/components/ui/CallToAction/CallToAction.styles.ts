import { makeStyles } from "@material-ui/core";
import banner from "../../../assets/banner/banner.png";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: " #1b3f4e",
    backgroundImage: `url(${banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    marginTop: "8rem",
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
  },
  title: {
    color: theme.palette.common.white,
    marginBottom: ".8rem",
  },
  subtitle: {
    color: theme.palette.common.white,
    fontSize: "1.9rem",
    fontWeight: 500,
    marginBottom: "3rem",
  },
  moreButton: {
    ...theme.typography.button,
    backgroundColor: theme.palette.secondary.main,
    padding: "1.2rem 4.2rem",
    textDecoration: "none",
    border: "2px solid",
    borderColor: theme.palette.secondary.main,
    transition: "all 0.3s linear",
    display: "inline-block",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.secondary.main,
    },
  },
}));

export default useStyles;
