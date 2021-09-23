import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headerBottom: {
    "& > .MuiAppBar-colorPrimary": {
      // background: "#143340",
      background: "#001c30",
      height: 70,
    },

    [theme.breakpoints.down(425)]: {
      height: 60,
    },
  },

  logoWrapper: {
    width: 153,
    marginRight: "2rem",
    padding: 0,
    "& .MuiButton-label": {
      justifyContent: "flex-start",
    },
    "&:hover": {
      background: "transparent",
    },

    "@media (max-width: 1024px)": {
      width: "12rem",

      "& img": {
        width: "100%",
      },
    },
    "@media (max-width: 425px)": {
      width: "10rem",

      "& img": {
        width: "100%",
      },
    },

    [theme.breakpoints.down(357)]: {
      width: "8rem",
      marginTop: "6px",

      "& img": {
        width: "100%",
      },
    },
  },
  headerLogo: {
    width: 153,
    marginRight: "2rem",
    padding: 0,
    "& .MuiButton-label": {
      justifyContent: "flex-start",
    },
    "&:hover": {
      background: "transparent",
    },

    "@media (max-width: 1024px)": {
      width: "14rem",

      "& img": {
        width: "100%",
        marginTop: "0.6rem",
      },
    },
    "@media (max-width: 425px)": {
      width: "12rem",

      "& img": {
        width: "100%",
        marginTop: "1.2rem",
      },
    },

    [theme.breakpoints.down(357)]: {
      width: "12rem",
      
      "& img": {
        width: "100%",
        marginTop: "1.2rem",
        
      },
    },
  },
  logo: {
    width: "10.5rem",
    display: "block",
  },

  // Mobile Menu
  paper: {
    backgroundColor: theme.palette.primary.main,

    [theme.breakpoints.down(426)]: {
      width: "100%",
    },
  },
  wrapperMenu: {
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

    [theme.breakpoints.down(770)]: {
      width: "4rem",
      height: "4rem",
    },
  },
  arrowDown: {
    fontSize: "5rem",
    color: "#244e5f",
  },
}));

export default useStyles;
