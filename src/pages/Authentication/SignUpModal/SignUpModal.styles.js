import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

  // New user authentication modal
  leftPanel: {
    backgroundColor: "#117A00",
    padding: "2.5rem 2.5rem 5.4rem 2.5rem",
    width: "100%",

    "& p": {
      color: theme.palette.common.white,
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 2,
    },
    "& img": {
      width: "100%",
    },
    [theme.breakpoints.up(1441)]: {
      padding: "2.5rem 2.5rem 7rem 2.5rem",
     },
  },
  authLogo: {
    maxWidth: 120,
    marginBottom: "1.5rem",
  },
  checkbox: {
    "& svg": {
      fontSize: "2.5rem",
    },
  },
  checkboxLabel: {
    "& .MuiFormControlLabel-label": {
      fontSize: 13,
    },
  },

  // Auth right panel
  rightPanel: {
    paddingTop: 25,
    paddingRight: 30,
    paddingBottom: 30,
    // minWidth: 531,
    height: "100%",
  },
  tabsWrapper: {
    "& .MuiTabs-flexContainer": {
      justifyContent: "center",
      borderBottom: "2px solid #E8E8E8",
    },
  },
  tabItem: {
    color: "#CCCCCC",
  },
  selected: {
    color: "#117A00",
  },
  passwordResetLink: {
    fontSize: 17,
    color: "#469439",
    textAlign: "center",
    display: "block",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  socialsButtons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1.5rem",
  },
  googleBtn: {
    backgroundColor: "#fff !important",
    fontSize: "30px !important",
    textAlign: "center",
    padding: "0.2rem 5rem !important",
    width: "49%",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "rgb(28 81 103)",
    },
  },
  facebookBtn: {
    backgroundColor: "#425993",
    padding: "1.2rem 2rem",
    fontSize: "26px !important",
    width: "49%",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "rgb(48 72 132)",
    },
    [theme.breakpoints.down(1025)]: {
      fontSize: "17px !important",
      padding: "20px !important",
     },
    [theme.breakpoints.up(2039)]: {
      padding: "20px !important",
     },
  },
  // socialLoginBtns: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // socialLogin: {
  //   flex: 1,
  //   height: 48,
  // },
  // googleBtn: {
  //   backgroundColor: "#1B3F4E",
  //   "&:hover": {
  //     backgroundColor: "#214e61",
  //   },
  // },
  // facebookBtn: {
  //   backgroundColor: "#425993",
  //   "&:hover": {
  //     backgroundColor: "#374b7d",
  //   },
  // },

  horizontalLine: {
    backgroundColor: "#CBCBCB",
    height: 1,
    position: "relative",
    "& span": {
      position: "absolute",
      backgroundColor: theme.palette.common.white,
      left: "50%",
      transform: "translate(-50%, -41%)",
      padding: "0 5px",
      fontStyle: "italic",
      fontSize: 13,
    },
  },
  authText: {
    fontSize: 17,
    color: "#469439",
    textAlign: "center",
    cursor: "pointer",
  },
  passwordField: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    "& img": {
      position: "absolute",
      top: ".8rem",
      right: "3rem",
      width: "3rem",
      cursor: "pointer",
    },

    "@media (max-width: 768px)": {
      "& img": {
        width: "2rem",
      },
    },
  },
  signUpLink: {
    marginTop: "17%",
    fontSize: 17,
    textAlign: "center",
    "& span": {
      cursor: "pointer",
      color: "#469439",
    },
  },
}));

export default useStyles;
