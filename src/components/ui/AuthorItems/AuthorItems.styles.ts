import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  authorItemTags: {
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    marginTop: "3.2rem",
    marginBottom: "3.2rem",
  },
  root: {
    width: "100%",
  },
  container: {
    marginBottom: "4rem",
  },
  flexContainer: {
    backgroundColor: theme.palette.common.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 5rem",
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      justifyContent: "flex-start",
    },
  },
  tagButton: {
    backgroundColor: theme.palette.common.white,
    flex: 1,
    border: "none",
    boxShadow: "none",
    borderRadius: 0,
    fontSize: "1.4rem",
    fontWeight: 500,
    color: "#1B3F4E",
    textTransform: "uppercase",
    transition: "all 0.3s linear",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
    },
    "&:focus": {
      boxShadow: "none",
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
    },
    [theme.breakpoints.down("xs")]: {
      flex: "auto",
    },
  },
  indicator: {
    height: 0,
  },
  selected: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  productItem: {
    "@media (max-width: 576px)": {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
}));

export default useStyles;
