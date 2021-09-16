import { makeStyles } from "@material-ui/core";

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
    marginRight: "0rem",
    marginTop: "10rem",
    [theme.breakpoints.down(769)]: {
      width: "100%",
      marginLeft: "0rem",
    },
  },
  cardContentWrapper: {
    margin: "2rem",
  },
  noItemsFound: {
    marginLeft: "1.5rem",
  },
  headingWrapepr: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "2rem",
    marginBottom: "1.5rem",
  },
  cardWrapper: {
    position: "relative",
    height: "100%",
    "& img": {
      width: "100%",
      height: 150,
      objectFit: "cover",
      borderRadius: "0.1rem",
    },
    "& .MuiCardContent-root": {
      paddingBottom: "0rem !important",
    },
  },
  cardImage: {
    padding: "0.4rem 0.4rem 0rem 0.4rem",
  },
  cardContent: {
    padding: "0rem",
    backgroundColor: "#f1f1f1",
    marginTop: "-0.39rem !important",
    "& h3": {
      fontSize: "1.4rem",
      lineHeight: "1.5",
      color: "#114960",
      textAlign: "center",
      padding: "0.5rem 0rem",
    },
    "& .MuiCardContent-root": {
      padding: "0rem !important",
    },
  },
}));

export default useStyles;
