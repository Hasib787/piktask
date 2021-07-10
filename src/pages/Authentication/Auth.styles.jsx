import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logoArea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    marginBottom: "3.5rem",

    "& img": {
      width: "15rem",
      marginBottom: "-.8rem",
    },
    "& p": {
      color: theme.palette.common.white,
    },
  },
  rootContainer: {
    width: "65rem",
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)",

    "@media (max-width: 768px)": {
      width: "100%",
      padding: "0 2rem",
    },
  },
  formPageContainer: {
    borderRadius: "1rem",
    overflow: "hidden",
    position: "relative",
    backgroundColor: theme.palette.common.white,
    "@media (max-width: 768px)": {
      padding: "0 2.5rem",
    },
  },
  formWrapper: {
    position: "relative",
    margin: "2rem 0 2.5rem",
    "@media (max-width: 768px)": {
      margin: 0,
    },
  },
  backgroundIconTop: {
    position: "absolute",
    top: "-.5rem",
    left: 0,
    width: "20rem",

    "@media (max-width: 768px)": {
      width: "13rem",
    },
  },
  backgroundIconBottom: {
    position: "absolute",
    bottom: "-.5rem",
    right: "-.1rem",
    width: "16rem",
    "@media (max-width: 768px)": {
      width: "10rem",
    },
  },
  formWrapperInner: {
    width: "53rem",
    margin: "0 auto 3rem",
    "@media (max-width: 768px)": {
      width: "100%",
      marginBottom: "1.5rem",
    },
  },
  formHeading: {
    textAlign: "center",
    margin: "3rem 0 2.5rem",
    "@media (max-width: 768px)": {
      margin: "2rem 0 1em",
    },
  },
  formTitle: {
    marginBottom: "0.4rem",
    fontSize: "2.4rem",
    textAlign: "center",
  },
  formSubtitle: {
    fontSize: "1.6rem",
  },
  socialsButtons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1.5rem",
  },
  googleBtn: {
    backgroundColor: "#fff !important",
    fontSize: "30px !important",
    textAlign: "center",
    padding: "0.2rem 5rem !important",
    width: "49%",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "rgb(28 81 103)",
    },
    "@media (max-width: 768px)": {
      padding: "1.5rem",
      "& img": {
        width: "8rem",
      },
    },
  },
  facebookBtn: {
    backgroundColor: "#425993",
    padding: "1.2rem 2rem",
    fontSize: "26px !important",
    width: "49%",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "rgb(48 72 132)",
    },
    "@media (max-width: 768px)": {
      padding: "1.5rem",
      "& img": {
        width: "8rem",
      },
    },
  },
  formDevider: {
    position: "relative",
    textAlign: "center",
    fontSize: "1.6rem",
    fontStyle: "italic",
    marginBottom: "1.5rem",
    "&:before": {
      content: '""',
      position: "absolute",
      background: "#CBCBCB",
      height: ".1rem",
      width: "47%",
      top: "1.2rem",
      left: 0,
    },
    "&:after": {
      content: '""',
      position: "absolute",
      background: "#CBCBCB",
      height: ".1rem",
      width: "47%",
      top: "1.2rem",
      right: 0,
    },
  },
  form: {
    "@media (max-width: 768px)": {
      "& input": {
        padding: "11px 14px",
      },
      "& label": {
        fontSize: "1.4rem",
        top: "-.6rem",
      },
    },
  },
  formControl: {
    marginBottom: "1.5rem",
    "& input": {
      borderColor: "#CBCBCB",
    },
    "& input:focus": {
      outlineColor: "red",
    },
    "@media (max-width: 768px)": {
      marginBottom: "1.5rem",
    },
  },
  helpText: {
    padding: "0 3rem",
    textAlign: "center",
    marginBottom: "1rem",
    fontSize: "1.4rem",
    fontWeight: 500,
    "@media (max-width: 768px)": {
      padding: 0,
      marginBottom: "1rem",
    },
  },
  checkboxLabel: {
    marginBottom: "2rem",
    marginRight: 0,
    "& span": {
      color: theme.palette.primary.main,
      fontSize: "1.4rem",
    },
  },
  formButton: {
    backgroundColor: "#3B9EE8",
    fontSize: "2rem",
    borderRadius: 0,
    fontWeight: 400,
    boxShadow: "none",
    marginBottom: "3rem",
    padding: "1rem 2rem",
    "& span": {
      color: theme.palette.common.white,
    },
    "&:hover": {
      backgroundColor: "#3092da",
      boxShadow: "none",
    },
    "@media (max-width: 768px)": {
      marginBottom: ".5rem",
      padding: ".5rem 2rem",
      fontSize: "1.6rem",
    },
  },
  formLink: {
    color: theme.palette.secondary.main,
    display: "block",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: 500,

    "&:hover": {
      backgroundColor: "transparent",
    },

    "@media (max-width: 768px)": {
      marginTop: "18px",
      position: "relative",
      left: "50%",
      transform: "translateX(-50%)",
      display: "inline-block",
    },
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
  resetPasswordLink: {
    position: "relative",
    top: "-32px",
    float: "right",
    zIndex: 1,
    paddingRight: 0,
    fontSize: "1.4rem",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "@media (max-width: 768px)": {
      top: "-.6rem",
    },
  },
  formButtonGroups: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    top: "-2rem",
    "& a": {
      padding: 0,
      zIndex: 1,
    },
    "& a:hover": {
      backgroundColor: "transparent",
    },

    "@media (max-width: 768px)": {
      top: "-.8rem",
      justifyContent: "space-around",
      "& a": {
        left: "inherit",
        transform: "inherit",
      },
    },
  },
  buttonTextLink: {
    padding: 0,
    display: "inline-block",
    fontWeight: 500,
    "& span": {
      color: "#3B9EE8",
    },
    "&:hover": {
      backgroundColor: "transparent",
      color: "#143340",
    },
  },
}));

export default useStyles;
