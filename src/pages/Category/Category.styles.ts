import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
    justifyContent:"space-between"
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
  shortList: {
    backgroundColor: "#F8F8F8",
    [theme.breakpoints.down(426)]: {
      display: "none",
     },
  },
  shortListTag: {
    fontSize: "2.7rem",
    width: "20rem",
    marginTop:"7px",
    [theme.breakpoints.down("md")]: {
      display: "block",
      marginBottom: "2.2rem",
    },
  },
  sortListMenu:{
    paddingTop: ".4rem",
    paddingBottom: ".4rem",
    [theme.breakpoints.down(769)]: {  
      paddingTop: "0",
      paddingBottom: "2rem",
    },
  },
  sortListItem:{
    color: "#1B3F4E",
    opacity: 1,
    textDecoration: "none",
    fontSize: "2rem",
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
  shortListWrapper:{
    display: "flex",
    [theme.breakpoints.down(769)]: {
      display: "grid",
    },
  },
  borderStyle:{
    borderRight:"1px solid gray",
    [theme.breakpoints.down(1025)]: {
      marginLeft: "-15px",
      marginRight: "5px",
    },
    [theme.breakpoints.down(769)]: {
     display: "none",
    },
  },
  totalResources: {
    fontSize: "4rem",
    padding: "3.5rem 0 6rem",
    [theme.breakpoints.down(426)]: {
      display: "none",
     },
  },
  abstractBanner: {
    paddingTop:"1rem",
    paddingBottom: "2rem",
    [theme.breakpoints.up(426)]: {
      display: "none",
     },
  },
}));

export default useStyles;
