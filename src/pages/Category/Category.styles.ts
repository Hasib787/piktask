import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: "4rem",
  },
  productItem: {
    "@media (max-width: 576px)": {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
  headingButton: {
    ...theme.typography.button,
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    padding: "0.8rem 3rem",
    fontSize: "1.7rem",
    fontWeight: 500,
    color: "#1B3F4E",
    transition: "all 0.3s linear",

    "&:hover": {
      backgroundColor: "#117A00",
      color: "#fff",
    },
  },

  // Old
  tagWrapper: {
    backgroundColor: theme.palette.common.white,
    padding: "4rem 3rem",
    [theme.breakpoints.down(426)]: {
      display: "none",
    },
  },
  root: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
  tagTitle: {
    fontSize: "2.2rem",
    // width: "20rem",
    textAlign:"center",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  tagContainer: {
    // width: "70%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  columnItem: {
    display: "flex",

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
    fontSize: "1.5rem",
    fontWeight: 400,
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  shortList: {
    backgroundColor: "#F8F8F8",
    [theme.breakpoints.down(426)]: {
      display: "none",
    },
  },
  shortListTag: {
    fontSize: "1.8rem",
    width: "20rem",
    fontWeight: 500,
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  sortListMenu: {
    paddingTop: ".4rem",
    paddingBottom: ".4rem",
    [theme.breakpoints.down(769)]: {
      paddingTop: "0",
      paddingBottom: "2rem",
    },
  },
  sortListItem: {
    color: "#1B3F4E",
    opacity: 1,
    textDecoration: "none",
    fontSize: "1.5rem",
    fontWeight: 400,

    "&:hover": {
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down(1025)]: {
      marginLeft: "-25px",
    },
    [theme.breakpoints.down(769)]: {
      marginLeft: "-4rem",
    },
  },
  shortListWrapper: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down(769)]: {
      display: "grid",
    },
  },
  borderStyle: {
    borderRight: "1px solid gray",
    [theme.breakpoints.down(1025)]: {
      marginLeft: "-15px",
      marginRight: "5px",
    },
    [theme.breakpoints.down(769)]: {
      display: "none",
    },
  },
  totalResources: {
    fontSize: "2.2rem",
    padding: "3.5rem 0 6rem",

    [theme.breakpoints.down(426)]: {
      display: "none",
    },
  },
}));

export default useStyles;
