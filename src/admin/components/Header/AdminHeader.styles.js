import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "45%",
    [theme.breakpoints.down(769)]: {
      width: "50%",
    },
    [theme.breakpoints.down(480)]: {
      width: "70%",
    },
  },
  appbarHeader: {
    backgroundColor: "#fff",
    boxShadow: "none",
    position: "fixed",
    width: "100%",
    height: "7rem",
    zIndex: 99,
    paddingRight: "28rem",
    top: 0,
    [theme.breakpoints.down(769)]: {
      width: "100%",
      paddingRight: "0rem",
    },
  },
  fullWidth: {
    width: "100%",
    height: "7rem",
    backgroundColor: "#fff",
    boxShadow: "0 8px 12px 3px rgb(0 0 0 / 6%)",
  },
  root: {
    height: "100%",
    display: "flex", 
    margin: "0rem 1.5rem",
    justifyContent: "space-between", 
    alignItems: "center"
  },
  item: {
    height: "100%",
    display: "flex",
    padding: "0 !important",
    alignItems: "center",
    marginLeft: "auto",
    [theme.breakpoints.down(769)]: {
      marginTop: "1.3rem",
    },
  },
  adminLogo: {
    width: "15rem",
    marginTop: "0.6rem",
    [theme.breakpoints.down(426)]: {
      width: "11rem",
      marginTop: "1rem",
    },
  },
  logo: {
    width: "10rem",
  },
  headerInfo: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginLeft: "auto",
  },
  notificationIcon: {
    height: "4rem",
    width: "4rem",
    borderRadius: "100%",
    backgroundColor: "#f1f1f1",
    marginRight: "1rem",
    cursor: "pointer",
    "& svg": {
      color: "#0088f2",
      margin: "0.5rem 0.6rem",
      fontSize: "2.8rem",
    },
  },
  earningAmount: {
    fontSize: "1.8rem",
    fontWeight: 500,
    marginRight: "4rem",
    color: "#1B3F4E",
  },
  uploadBtn: {
    ...theme.typography.button,
    backgroundColor: "#0088f2",
    padding: "0.5rem 1.4rem",
    float: "left",
    fontSize: "1.4rem",
    border: "2px solid",
    borderColor: "transparent",
    transition: "all 0.3s linear",
    "&:hover": {
      backgroundColor: "#0773c5",
    },
    [theme.breakpoints.down(769)]: {
      display: "none",
    },
  },
  menuIcon: {
    fontSize: "4rem",
    cursor: "pointer",
    color: "#FFF",
    [theme.breakpoints.up(769)]: {
      display: "none",
    },
  },
  ButtoncrownIcon: {
    width: "1.7rem",
    marginRight: ".8rem",
  },
  userProfile: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    [theme.breakpoints.down(426)]: {
      marginBottom: "-1rem",
    },
  },
  adminPhoto: {
    width: "4rem",
    height: "4rem",
    borderRadius: "100%",
    [theme.breakpoints.down(769)]: {
      width: "3.5rem",
      height: "3.5rem",
    },
  },
  userName: {
    paddingLeft: "1rem",
    fontSize: "1.8rem",
    fontWeight: 500,
    color: "#1B3F4E",
    [theme.breakpoints.down(426)]: {
      fontSize: "1.4rem",
      paddingLeft: "0.8rem",
    },
  },
  avatar: {
    fontSize: "4.8rem",
    // width: "4.8rem",
    // height: "4.8rem",
    borderRadius: "100%",
    position: "relative",
    right: "-0.6rem",
    color: "#000",
    [theme.breakpoints.down(769)]: {
      fontSize: "4.2rem",
    },
    [theme.breakpoints.down(426)]: {
      fontSize: "3.5rem",
    },
  },
  arrowDown: {
    fontSize: "3.5rem",
    color: "#376579",
    [theme.breakpoints.down(426)]: {
      fontSize: "2rem",
    },
  },
  loginBtn: {
    color: "#fff",
    fontSize: "1.8rem",
    fontWeight: 400,
    marginRight: "16px",

    [theme.breakpoints.down(425)]: {
      fontSize: "13px",
      marginRight: "8px",
    },
  },
  signUpBtn: {
    color: "#fff",
    fontSize: "1.8rem",
    fontWeight: 400,
    border: ".2rem solid #fff",
    marginRight: "16px",
    padding: "0px 14px",
    [theme.breakpoints.down(425)]: {
      fontSize: "13px",
      marginRight: "8px",
      padding: "0px 8px",
    },
  },
}));

export default useStyles;
