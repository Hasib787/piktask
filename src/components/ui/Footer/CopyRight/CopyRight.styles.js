import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  copyrightWrapper: {
    // background: theme.palette.primary.main,
    padding: "1.8rem 0rem",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    position: "relative",
    height: 80,
    "&::before": {
      // background: "rgb(20 51 64 / 94%)",
      background: "rgba(0, 28, 48, 0.7)",
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },

    "@media (max-width: 768px)": {
      height: "auto",
    },
  },
  root: {
    height: "100%",
    zIndex: 9999
  },
  gridRoot: {
    display: "flex",
    alignItems: "center",
    justifyContent:"space-between",
    height: "100%",

    "@media (max-width: 768px)": {
      flexDirection: "column",
    },
  },
  logoWrapper: {
    display:"flex",
    justifyContent:"center",
    "@media (max-width: 992px)": {
      marginRight: "2rem",
    },
  },
  logo: {
    width: "13.5rem",
  },
  copyRightText: {
    fontSize: "1.6rem",
    fontWeight: 400,
    color: theme.palette.common.white,
  },
}));

export default useStyles;
