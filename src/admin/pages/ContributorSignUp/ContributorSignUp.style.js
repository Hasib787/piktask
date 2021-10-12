import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // New user authentication modal
  dialogModal: {
    "& .MuiDialog-paperWidthSm": {
      maxWidth: 800,
    }
  },
  leftPanel: {
    backgroundColor: "#0088f2",
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
    color: "#0088f2",
  },
  passwordResetLink: {
    fontSize: 17,
    color: "#0088f2",
    textAlign: "center",
    display: "block",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  socialsButtons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
  },
  googleButton: {
    display: "flex",
    alignItems: "center",
    padding: "0.8rem 6rem",
    border: "1px solid #C74C37",
    borderRadius: "4px",
    color: "white",
    backgroundColor: "#C74C37",
    transition: "all 0.3s linear",
    "& span": {
      fontSize: "1.8rem",
      color: "#fff",
    },
    "&:hover": {
      backgroundColor: "#ab311d",
    },
  },
  googleIcon: {
    color: "white",
    fontSize: "1.6rem",
    marginRight: "0.8rem",
  },
  facebookBtn:{
    display: "flex",
    alignItems: "center",
    padding: "0.8rem 5rem",
    border: "1px solid #425993",
    borderRadius: "4px",
    color: "white",
    backgroundColor: "#425993",
    transition: "all 0.3s linear",
    "& span": {
      fontSize: "1.8rem",
      color: "#fff",
    },
    "&:hover": {
      backgroundColor: "#213567",
    },
  },
  facebookIconBtn:{
    color: "white",
    fontSize: "1.6rem",
    marginRight: "0.8rem !important",
  },
  closeModal: {
    float: "right",
    marginTop: -15,
    color: "#0088f2",
    cursor: "pointer",
  },
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
    color: "#0088f2",
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
      color: "#0088f2",
    },
  },
}));

export default useStyles;
