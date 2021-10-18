import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
  },
  headerBottomToolbar: {
    height: "100%",
  },
  logoWrapper: {
    width: 153,
    marginRight: "2rem",
    padding: 0,
    "&:hover": {
      background: "transparent",
    },

    "@media (max-width: 1024px)": {
      width: "12rem",

      "& img": {
        width: "100%",
      },
    },
  },
  logo: {
    width: "100%",
    display: "block",
  },
  menuUnderline: {
    height: 0,
    backgroundColor: "transparent",
  },
  menuTab: {
    marginLeft: 25,
    [theme.breakpoints.down(769)]: {
      display: "none",
    },
  },
  menuItem: {
    opacity: 1,
    minWidth: "1rem",
    fontSize: "13px",
    transition: "all 0.3s ease",
    "&.active": {
      color: theme.palette.secondary.main,
    },
    "&:last-child": {
      marginRight: "3rem",
    },
    "&:hover": {
      color: theme.palette.secondary.main,
    },

    "@media (max-width: 1024px)": {
      marginRight: 0,
      paddingLight: ".5rem",
      paddingLeft: ".5rem",
      fontSize: "1.4rem",

      "&:last-child": {
        marginRight: ".5rem",
      },
    },
  },
  subMenu: {
    transition: "all 0.2s linear",

    // "& .MuiMenu-paper": {
    //   top: "7.5rem !important",
    //   // left: "7.5rem !important",
    // }
  },
  subMenuItem: {
    height: "15rem",
    width: "50rem",
    // padding: "5rem",
    // backgroundColor: "#000"
  },
  toolBarContainer: {
    marginLeft: "auto",
    display: "flex",
    justifyContent: "flex-end",
    height: "100%",

    "@media (max-width: 768px)": {
      justifyContent: "flex-end",
      "& a": {
        paddingRight: "2rem",
        paddingLeft: "2rem",
        marginLeft: "0.5rem",
      },
    },
    "@media (max-width: 480px)": {
      "& a": {
        paddingRight: ".6rem",
        paddingLeft: ".6rem",
        marginLeft: "0rem",
        fontSize: "1.4rem",
        minWidth: "fit-content",
      },
    },
  },
  enterprise: {
    color: "#FDAF01",
    border: "0.2rem solid #FDAF01",
    fontSize: "1.4rem",
    padding: "0.3rem 1rem",
    borderRadius: "3rem",
    "@media (max-width: 1024px)": {
      paddingRight: "1rem",
      paddingLeft: "1rem",
      fontSize: "1.4rem",
    },
  },
  premium: {
    ...theme.typography.button,
    backgroundColor: "#0088f2",
    fontSize: "1.4rem",
    padding: "0.3rem 1rem",
    marginLeft: "1rem",
    marginRight: "1rem",
    border: ".2rem solid #0088f2",
    transition: "all 0.3s linear",
    "&:hover": {
      borderColor: "#0088f2",
    },
    "@media (max-width: 1024px)": {
      paddingRight: "1rem",
      paddingLeft: "1rem",
      fontSize: "1.4rem",
    },
  },
  crownIcon: {
    marginRight: ".5rem",
    height: "1.4rem",
  },
  sellContentBtn: {
    ...theme.typography.button,
    fontSize: "1.4rem",
    padding: "0.3rem 1rem",
    borderColor: "#0088f2",
    marginLeft: "1rem",
    marginRight: "1rem",
    border: ".2rem solid #0088f2",
    transition: "all 0.3s linear",
    "&:hover": {
      backgroundColor: "#0088f2",
      borderColor: "#0088f2",
    },
    "@media (max-width: 1024px)": {
      paddingRight: "1rem",
      paddingLeft: "1rem",
      fontSize: "1.4rem",
    },
  },

  signInBtn: {
    ...theme.typography.button,
    backgroundColor: "#0088f2",
    border:".2rem solid #0088f2",
    fontSize: "1.4rem",
    padding: "0.3rem 1rem",
    transition: "all 0.3s linear",

    "&:hover": {
      backgroundColor: "#0773c5",
      border:".2rem solid #fff",
    },

    "@media (max-width: 480px)": {
      padding: ".8rem 1.5rem !important",
    },
  },
  userAvatarArea: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    fontSize: "4.8rem",
    width: "3.6rem",
    height: "3.6rem",
    borderRadius: "100%",
    position: "relative",
    right: "-0.6rem",
    color: "#FB5252",
  },
  arrowDown: {
    fontSize: "3.5rem",
    color: "#244e5f",
  },
}));

export default useStyles;
