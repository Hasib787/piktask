
import { makeStyles } from "@material-ui/core";

// const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
   // Mobile Menu
   paper: {
    backgroundColor: theme.palette.primary.main,

    [theme.breakpoints.down(426)]: {
      width: "100%",
    },
},
mobileSidebarMenu: {
    backgroundColor: "white",
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

  userAvatarArea: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
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
  fontSize: "5rem",
  color: "#244e5f",
},
}));

export default useStyles;