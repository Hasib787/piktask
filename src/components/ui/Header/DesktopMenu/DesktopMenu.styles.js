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
    width: "13.5rem",
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
    fontSize: "16px",
    "&:last-child": {
      marginRight: "3rem",
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
    paddingLeft: "2.4rem",
    paddingRight: "2.4rem",
    fontSize: "16px",
    "@media (max-width: 1024px)": {
      paddingRight: "1rem",
      paddingLeft: "1rem",
      fontSize: "1.4rem",
    },
  },
  premium: {
    ...theme.typography.button,
    backgroundColor: theme.palette.secondary.main,
    fontSize: "16px",
    paddingLeft: "2.4rem",
    paddingRight: "2.4rem",
    border: ".2rem solid",
    marginLeft: "1rem",
    marginRight: "1rem",
    borderColor: "transparent",
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
    marginRight: ".8rem",
    height: "20px",
  },
  sellContentBtn: {
    ...theme.typography.button,
    border: `.2rem solid`,
    borderColor: theme.palette.secondary.main,
    paddingRight: "2.4rem",
    paddingLeft: "2.4rem",
    marginRight: "1.5rem",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
    "@media (max-width: 1024px)": {
      marginRight: "1rem",
      paddingRight: "1rem",
      paddingLeft: "1rem",
      fontSize: "1.4rem",
    },
  },
  signInBtn: {
    ...theme.typography.button,
    ...theme.typography.darkButton,
    marginLeft: "1rem",
    fontSize: "16px",
    padding: ".8rem 2.4rem",

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

  // New user authentication modal
  leftPanel: {
    backgroundColor: "#117A00",
    padding: "2.5rem",
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
    minWidth: 531,
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
  socialLoginBtns: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  socialLogin: {
    flex: 1,
    height: 48,
  },
  googleBtn: {
    backgroundColor: "#1B3F4E",
    "&:hover": {
      backgroundColor: "#214e61",
    },
  },
  facebookBtn: {
    backgroundColor: "#425993",
    "&:hover": {
      backgroundColor: "#374b7d",
    },
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
