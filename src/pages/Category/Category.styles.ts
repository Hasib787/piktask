import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tagWrapper: {
    backgroundColor: theme.palette.common.white,
    padding: "4rem 3rem",
  },
  root: {
    alignItems: "center",
  },
  tagTitle: {
    fontSize: "3.2rem",
    width: "36rem",
    [theme.breakpoints.down("md")]: {
      display: "block",
      marginBottom: "2.5rem",
    },
  },
  tagContainer: {
    width: "70%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  columnItem: {
    [theme.breakpoints.down("md")]: {
      marginBottom: "2.5rem",
    },
  },
  linkItem: {
    paddingTop: ".4rem",
    paddingBottom: ".4rem",
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    fontSize: "2.1rem",
    fontWeight: 400,
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },

  shortListItem: {
    backgroundColor: "#F8F8F8",
    padding: "4rem 3rem", 
  },
  totalResources: {
    fontSize: "4rem",
    padding: "3.5rem 0 6rem",
  },
}));

export default useStyles;
