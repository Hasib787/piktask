import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

  // New user authentication modal
  dialogModal: {
    "& .MuiDialog-paperWidthSm": {
      maxWidth: 800,
    }
  },
  leftPanel: {
    backgroundColor: "#0387EA",
    // backgroundColor: "#117A00",
    padding: "2.5rem 2.5rem 5.4rem 2.5rem",
    width: "100%",
    height: "100%",

    "& p": {
      color: theme.palette.common.white,
      fontWeight: 500,
      fontSize: 13,
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
      marginBottom: -14,
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
    color: "#0387EA",
    // color: "#117A00",
  },
  passwordResetLink: {
    fontSize: 17,
    // color: "#469439",
    color: "#0387EA",
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
    fontSize: "25px !important",
    textAlign: "center",
    padding: "0.1rem 3rem 0.1rem 3.5rem !important",
    "&:hover": {
      backgroundColor: "rgb(28 81 103)",
    },
  },
  facebookBtn: {
    backgroundColor: "#425993",
    borderRadius: 0,

    "& .kep-login-facebook": {
      fontWeight: 700,
      fontSize: 13,
    },

    "&:hover": {
      backgroundColor: "rgb(48 72 132)",
    },
    [theme.breakpoints.up(2000)]: {
      "& .kep-login-facebook": {
        fontWeight: 700,
        fontSize: 13,
      },
     },
    [theme.breakpoints.down(1025)]: {
      "& .kep-login-facebook": {
        fontWeight: 700,
        fontSize: 13,
      },
     },
    [theme.breakpoints.up(2039)]: {
      padding: "14px !important",
     },
  },
  closeModal: {
    float: "right",
    marginTop: -15,
    color: "#0387EA",
    cursor: "pointer",
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
    color: "#0387EA",
    // color: "#469439",
    textAlign: "center",
    cursor: "pointer",
    marginTop: "1rem",
  },
  passwordField: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    "& img": {
      position: "absolute",
      top: ".8rem",
      right: "3rem",
      width: "2rem",
      cursor: "pointer",
    },

    "@media (max-width: 768px)": {
      "& img": {
        width: "2rem",
      },
    },
  },
  signUpLink: {
    marginTop: "19%",
    fontSize: 17,
    textAlign: "center",
    "& span": {
      cursor: "pointer",
      // color: "#469439",
      color: "#0387EA",
    },
  },
}));

export default useStyles;
