import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  authorHero: {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    position: "relative",
    minHeight: "35.5rem",
    "&::before": {
      content: '""',
      position: "absolute",
      background: "#143340",
      opacity: "0.95",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
  },
  profileWrapper: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",

    "@media (max-width: 595px)": {
      flexDirection: "column",
    },
  },
  authorImg: {
    marginRight: "3rem",
    height: "16rem",
    width: "16rem",

    "& img": {
      width: "100%",
      borderRadius: "100%",
      padding: "1rem",
      backgroundColor: "#707070",
    },
    "@media (max-width: 595px)": {
      width: "12rem",
      height: "12rem",
      marginBottom: "2rem",
      marginRight: 0,
    },
  },
  authorInfo: {
    color: theme.palette.common.white,

    "@media (max-width: 595px)": {
      width: "auto",
      textAlign: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  authorName: {
    color: theme.palette.common.white,
    fontSize: "2.2rem",
    marginBottom: ".8rem",
    marginTop: "2rem",

    [theme.breakpoints.down(480)]: {
      marginTop: "0",
    },
  },
  resourceDetails: {
    display: "flex",
    alignItems: "center",
    marginBottom: ".4rem",
  },
  infoItem: {
    fontSize: "1.6rem",
    marginRight: "2.5rem",
    paddingRight: "2.5rem",
    position: "relative",
    "&:before": {
      content: '""',
      position: "absolute",
      backgroundColor: "white",
      width: ".16rem",
      height: "3.5rem",
      top: "0.5rem",
      right: 0,
    },
    "&:last-child:before": {
      backgroundColor: "transparent",
      width: 0,
    },
    "& span": {
      fontSize: "2.2rem",
      display: "block",
      fontWeight: 700,
    },
    "@media (max-width: 576px)": {
      marginRight: "1.5rem",
      paddingRight: "1.5rem",
    },
  },
  authorSocials: {
    "& img": {
      width: "4rem",
      height: "4rem",
      borderRadius: "100%",      
    [theme.breakpoints.down(480)]: {
      width: "2.5rem",
      height: "2.5rem",
    },
    },
  },
}));

export default useStyles;
