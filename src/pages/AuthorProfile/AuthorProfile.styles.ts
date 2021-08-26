import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  authorHero: {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    position: "relative",
    minHeight: "18rem",
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
    height: "9rem",
    width: "9rem",

    "& img": {
      width: "100%",
      borderRadius: "100%",
      padding: "0.4rem",
      backgroundColor: "#707070",
    },
    "@media (max-width: 595px)": {
      width: "7rem",
      height: "7rem",
      marginTop: "2rem",
      marginBottom: "2rem",
      marginRight: 0,

      "& img": {
        padding: "0.4rem",
      },
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
    fontSize: "2rem",
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
    fontSize: "1.4rem",
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
      fontSize: "1.8rem",
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
      width: "2.6rem",
      height: "2.6rem",
      borderRadius: "100%",      
    [theme.breakpoints.down(480)]: {
      width: "2rem",
      height: "2rem",
    },
    },
  },
}));

export default useStyles;
