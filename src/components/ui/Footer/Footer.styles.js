import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  footerRoot: {
    backgroundColor: theme.palette.common.white,
  },
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "5rem",
    paddingTop: "5rem",
  },
  footerWrapper: {
    paddingLeft: "11rem !important",

    "@media (max-width: 1200px)": {
      paddingLeft: "5rem",
    },

    "@media (max-width: 769px)": {
      marginTop: "2rem",
    },

    "@media (max-width: 576px)": {
      maxWidth: "100%",
      flexBasis: "100%",
      paddingLeft: "2rem",
      marginTop: "2rem",
    },
  },
  footerHeading: {
    textTransform: "uppercase",
    marginBottom: "2.4rem",
    fontSize: "1.9rem",
  },
  socialMediaTitle: {
    textTransform: "uppercase",
    marginTop: "2.4rem",
    marginBottom: "1rem",
    fontSize: "1.9rem",
  },
  menuWrapper: {
    listStyleType: "none",
    padding: 0,
  },
  navItem: {
    padding: ".6rem 0",
    "&:first-child": {
      paddingTop: 0,
    },
  },
  navLink: {
    fontSize: "1.5rem",
    textDecoration: "none",
    color: "#27434f",
    fontWeight: 400,
    fontFamily: "'Roboto', sans-serif",
    transition: "color 0.3s linear",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.secondary.main,
    },
  },
 
}));