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
  },
  menuItem: {
    opacity: 1,
    minWidth: "1rem",
    fontSize: "13px",
    transition: "all 0.3s ease",
    "&.active": {
      color: "#76C71A",
    },
    "&:last-child": {
      marginRight: "3rem",
    },
    "&:hover": {
      color: "#76C71A",
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
    backgroundColor: theme.palette.secondary.light,
    fontSize: "1.4rem",
    padding: "0.3rem 1rem",
    marginLeft: "1rem",
    marginRight: "1rem",
    border: ".2rem solid",
    borderColor: "transparent",
    transition: "all 0.3s linear",
    "&:hover": {
      borderColor: `${theme.palette.common.white}`,
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
    border: `.2rem solid`,
    borderColor: theme.palette.secondary.light,
    padding: "0.3rem 1rem",
    marginRight: "1rem",
    fontSize: "1.3rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down(1100)]: {
      width: "11rem",
      fontSize: "1.1rem",
      paddingLeft: "0.7rem",
      paddingRight: "0.7rem",
    },
  },

  signInBtn: {
    ...theme.typography.button,
    ...theme.typography.darkButton,
    // backgroundColor: theme.palette.secondary.light,
    border:".2rem solid transparent",
    fontSize: "1.4rem",
    padding: "0.3rem 1rem",

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
    fontSize: "5rem",
    color: "#244e5f",
  },
}));

export default useStyles;
