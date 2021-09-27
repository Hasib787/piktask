import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  headingWrapper: {
    marginBottom: "3.5rem",
  },
  seperator: {
    marginLeft: "3%",
    borderWidth: 0,
    height: ".1rem",
    backgroundColor: "rgb(112 112 112 / 38%)",
    width: "94%",
  },
  settingsFormTitle: {
    color: "#114960",
    fontWeight: 700,
    padding: "3rem",
  },
  personalInfoTitle: {
    color: "#114960",
    fontWeight: 700,
    padding: "0 0 3rem 3rem",
  },
  cardRoot: {
    marginBottom: "2.5rem",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
  },
  cardWrapper: {
    padding: ".6rem 2rem 0rem",
  },
  srOnly: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0,
  },
  fieldsGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2rem",
    "& legend": {
      display: "none",
      width: 0,
      height: 0,
    },

    "@media (max-width: 960px)": {
      width: "100%",
      flexDirection: "column",
      marginBottom: "2rem",

    },
  },
  linkField: {
    "@media (max-width: 960px)": {
      marginBottom: "inherit",
      "&:last-child": {
        marginBottom: 0,
      },
    },
  },
  fullWidth: {
    marginRight: "1rem",
    marginLeft: "1rem",
    "@media (max-width: 960px)": {
      marginBottom: "2rem",
      "&:last-child": {
        marginBottom: 0,
      },
    },
  },
  inputField: {
    "& label": {
      color: "#114960",
      fontSize: "1.6rem",
    },
    "& .MuiInputLabel-shrink": {
      transform: "translate(14px, 2px) scale(0.90)",
      backgroundColor: "transparent",
    },
  },
  inputImage: {
    position: "relative",
    "& img": {
      position: "absolute",
      right: "1rem",
      top: 0,
    },
  },

  // Portfolio Links
  portfolioLink: {
    position: "relative",
    paddingLeft: "8rem",

    "& fieldset": {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderLeftColor: "transparent",
    },
  },
  portfolioIconWrapper: {
    position: "absolute",
    left: 0,
    top: "-.5rem",
    width: "8rem",
    height: "5.85rem",
    display: "flex",
    justifyContent: "center",
    border: "1px solid rgba(0, 0, 0, 0.23)",

    "& img": {
      width: "2.5rem",
      height: "auto",
    },
  },
  facebookIcon: {
    width: "1.6rem !important",
  },

  buttonGroup: {
    display: "flex",
    justifyContent: "flex-end",
    padding:" 0 2rem 2rem 0",
  },
  settingsBtn: {
    // ...theme.typography.button,
    padding: "1rem 2rem",
    color: theme.palette.common.white,
    fontSize: "1.4rem",
    borderRadius: ".5rem",
  },
  restoreBtn: {
    backgroundColor: "#ACB0C8",
    marginRight: "2rem",
    "&:hover": {
      backgroundColor: "rgb(149 154 185)",
    },
  },
  saveBtn: {
    backgroundColor: "#0088f2",
    transition: "all 0.3s linear",
    "&:hover": {
      backgroundColor: "#0773c5",
    },
  },
  selectArea: {
    "& svg": {
      width: "3rem",
      fontSize: "4rem",
      top: "5px",
    },
  },

  lastField: {
    "@media (max-width: 960px)": {
      marginBottom: "2rem !important",
    },
  },
}));
export default useStyles;
