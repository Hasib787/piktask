import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: "3rem",
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
    textAlign: "center",
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

    // [theme.breakpoints.down("md")]: {
    //   marginBottom: "2.5rem",
    // },
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
    float: "right",
    [theme.breakpoints.down(426)]: {
      display: "none",
    },
  },
  shortListWrapper: {
    marginTop: "32px",
    display: "flex",
    alignItems: "center",
  },
  shortListTag: {
    width: "7rem",
    fontSize: "14px",
    textAlign: "center",
    color: "#5f7d95",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  selectSortItem: {
    "& Select": {
      padding: "7px 23px 7px 9px !important",
    },
    "& svg": {
      marginRight: "-7px",
      height: "21px",
      width: "25px",
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
    padding: "3rem 0rem",
    [theme.breakpoints.down(426)]: {
      padding: "2.5rem 0 3rem",
    },
  },
  tagsContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: "4.5rem",
    marginBottom: "2.8rem",
  },
  tagTitle: {
    fontSize: "2.2rem",
    marginRight: "2rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginBottom: "1.5rem",
    },
  },
  tagButton: {
    ...theme.typography.button,
    fontSize: "1.4rem",
    color: theme.palette.primary.main,
    backgroundColor: "#F8F8F8",
    border: "1px solid rgb(150 164 173 / 54%)",
    padding: "0.4rem 2.5rem",
    textDecoration: "none",
    "&:not(last-child)": {
      marginRight: "1.2rem",
    },
    "&:hover": {
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: "3.2rem",
      paddingLeft: "3.2rem",
      marginBottom: "1.5rem",
      width: "auto",
      fontSize: "1.5rem",
    },
  },
}));

export default useStyles;
