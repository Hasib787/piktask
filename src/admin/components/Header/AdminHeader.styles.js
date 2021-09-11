import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({ 
  paper: {
    width: '45%',
    [theme.breakpoints.down(480)]: {
      width: '70%',
     },
  },
  appbarHeader: {
    backgroundColor: "white",
    // backgroundColor: "#1B3F4E",
    boxShadow: "none",
  },
  fullwidth: {
    width: "100%",
    height: "7rem",
    // backgroundColor: "#1B3F4E",
    boxShadow: "0 8px 12px 3px rgb(0 0 0 / 6%)",
  },
  root: {
    height: "100%",
    paddingTop: "1rem",
  },
  container: {
    height: "100%",
  },
  item: {
    height: "100%",
    display: "flex",
    padding: "0 !important",
    alignItems: "center",
  },
  adminLogo: {
    width: "13rem",
  },
  logo: {
    width: "10rem",
  },
  headerInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
  },
  earningAmount: {
    fontSize: "1.8rem",
    fontWeight: 500,
    marginRight: "4rem",
    color: "#1B3F4E",
  },
  uploadBtn: {
    ...theme.typography.button,
    backgroundColor: "#0387EA",
    padding: "0.5rem 1.4rem",
    marginRight: "2rem",
    fontSize: "1.4rem",
    border: "2px solid",
    borderColor: "transparent",

    "&:hover": {
      backgroundColor:"#2b5d21",
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
  },
  adminPhoto: {
    width: "4.8rem",
    height: "4.8rem",
    borderRadius: "100%",
    marginRight: "1.5rem",
  },
  userName: {
    paddingLeft: "1.5rem",
    fontSize: "1.8rem",
    fontWeight: 500,
    color: "#1B3F4E", 
  },
  avatar: {
    fontSize: "4.8rem",
    width: "4.8rem",
    height: "4.8rem",
    borderRadius: "100%",
    position: "relative",
    right: "-0.6rem",
    color: "#000",
}, 
  arrowDown: {
    fontSize: "3.5rem",
    color: "#376579",
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
