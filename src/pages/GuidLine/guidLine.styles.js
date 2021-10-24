import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  adminRoot: {
    // display: "flex",
  },
  adminSidebar: {
    marginTop: "0rem",
    [theme.breakpoints.down(769)]: {
      display: "none",
    },
  },
  content: {
    padding: 0,
    marginLeft: "28rem",
    [theme.breakpoints.down(769)]: {
      width: "100%",
      marginLeft: "0rem",
    },
  },
  guidelineGridContainer: {
    padding: "1.5rem 1rem 0rem 1rem",
    marginTop: "8rem",
  },
  guidLineMenu: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuUnderline: {
    height: 0,
    backgroundColor: "transparent",
  },
  guidLineMenuItem: {
      backgroundColor: "#0088f2",
      color: "#fff",
      margin: "0rem 1rem",
      borderRadius: 3,
      padding: "0.2rem 2rem",
  },
  guidLineWrapper: {
    padding: "0rem 10rem",
    [theme.breakpoints.down(1199)]: {
      padding: "0rem 0.5rem",
    },
  },
  guidLineImageWrapper: {
    display: "flex",
    [theme.breakpoints.down(577)]: {
      flexDirection: "column",
    },
  },
  guidLineImage: {
    width: "65rem",
    height: "20rem",
    margin: "1rem",

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

    [theme.breakpoints.down(769)]: {
      width: "100%",
      height: "100%",
      margin: "1rem 0",
    },
  },
  guidLineContent: {
    "& p": {
      lineHeight: "4rem",
      textAlign: "justify",
      [theme.breakpoints.down(769)]: {
        lineHeight: "3rem",
      },
    },

    "& span": {
      fontWeight: "500",
      fontSize: "1.5rem",
    },
  },
}));

export default useStyles;
