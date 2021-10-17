import { makeStyles } from "@material-ui/core";
import profileBanner from "../../../assets/banner/profile-banner.jpg";

const useStyles = makeStyles((theme) => ({
  adminRoot: {
    // display: "flex",
  },
  adminSidebar: {
    marginTop: "0rem",
    [theme.breakpoints.down(769)]: {
      display: "none",
    },
  },
  content: {
    padding: 0,
    marginLeft: "28rem",
    [theme.breakpoints.down(769)]: {
      width: "100%",
      marginLeft: "0rem",
    },
  },
  profileContentWrapper: {
    marginTop: "10rem",
    margin: "2rem",
  },
  noItemsFound: {
    marginLeft: "1.5rem",
  },
  settingsHero: {
    backgroundImage: `url(${profileBanner})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
    height: "20rem",
    marginBottom: "2.5rem",
    "& h1": {
      color: theme.palette.common.white,
      fontSize: "3.5rem",
      fontWeight: 500,
      zIndex: 999,
    },
    "&::before": {
      background: "rgba(0, 28, 48, 0.6)",
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
  },
  headingWrapper: {
    marginBottom: "3.5rem",
  },
  // Form
  seperator: {
    borderWidth: 0,
    height: ".1rem",
    backgroundColor: "rgb(112 112 112 / 38%)",
    width: "100%",
  },
  settingsFormTitle: {
    color: "#114960",
    fontWeight: 700,
    padding: "3rem",
  },

  cardRoot: {
    marginBottom: "2.5rem",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
  },
  cardWrapper: {
    padding: ".6rem 2rem 2rem",
    marginBottom: "2rem",
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
      marginBottom: 0,
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
  bankCountryName: {
    width: "49%",
    paddingLeft: "1rem",
    alignItems: "left",
    justifyContent: "left",
    marginBottom: "2rem",
    "& legend": {
      display: "none",
      width: 0,
      height: 0,
    },
    [theme.breakpoints.up(2000)]: {
      width: "49.6%",
    },
    "@media (max-width: 2250px) and (min-width: 2100px)": {
      width: "49.5%",
    },
    "@media (max-width: 2000px) and (min-width: 1700px)": {
      width: "49.3%",
    },
    "@media (max-width: 960px)": {
      width: "100%",
      paddingLeft: "0rem !important",
      flexDirection: "column",
      marginBottom: 0,
    },
  },

  // inputImage: {
  //   position: "relative",
  //   "& img": {
  //     position: "absolute",
  //     right: "1rem",
  //     top: 0,
  //   },
  // },
  cardIcon: {
    width: "18rem",
  },
  cvcIcon: {
    width: "6rem",
  },
  passwordResetLink: {
    fontSize: 17,
    color: "#959595",
    textAlign: "right",
    display: "block",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
    "@media (max-width: 768px)": {
      top: "-.6rem",
    },
    [theme.breakpoints.down(426)]: {
      paddingBottom: "1rem",
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
  },
  settingsBtn: {
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
