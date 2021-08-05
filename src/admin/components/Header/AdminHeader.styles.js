import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appbarHeader: {
    boxShadow: "none",
  },
  fullwidth: {
    width: "100%",
    height: "8rem",
    // backgroundColor: "#1B3F4E",
  },
  root: {
    height: "100%",
    paddingTop: "1.5rem",
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
    [theme.breakpoints.down(769)]: {
      display: "none",
     },
  },
  uploadBtn: {
    ...theme.typography.button,
    backgroundColor: "#117A00",
    paddingRight: "2.5rem",
    paddingLeft: "2.5rem",
    marginRight: "2rem",
    border: "2px solid",
    borderColor: "transparent",

    "&:hover": {
      borderColor: "white",
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
  },
  avatar: {
    fontSize: "4.8rem",
    width: "4.8rem",
    height: "4.8rem",
    borderRadius: "100%",
    position: "relative",
    right: "-0.6rem",
    color: "#FB5252",
}, 
  arrowDown: {
    fontSize: "3.5rem",
    color: "#376579",
  },
  // Mobile Menu
  paper: {
    backgroundColor: theme.palette.primary.main,

    [theme.breakpoints.down(426)]: {
      width: "100%",
    },
},
menuWrapper: {
    width: "30rem",
    flexDirection: "column",
  },
  mobileMenuLogo: {
    "&:hover": {
      background: "transparent",
    },
  },
  mobileTabWrapper: {},
  navItems: {
    width: "100%",
    
    "& a": {
      color: theme.palette.common.white,
      textDecoration: "none",
      transition: "all 0.3s linear",
      "&:hover": {
        color: "#FFCE00",
      },
    },
  },
  selected: {
    color: "#FFCE00",
  },
  mobileBtn: {
    ...theme.typography.button,
    justifyContent: "flex-start",
    width: "100%",
    paddingLeft: "1.8rem",
    alignItems: "center",

    "& img": {
      marginRight: "1rem",
    },
  },

  menuButton: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },

}));

export default useStyles;
