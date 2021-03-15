import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  adminRoot: {
    display: "flex",
    marginTop: "8rem",
  },
  content: {
    // flexGrow: 1,
    // padding: theme.spacing(2),
    padding: 0,
    width: "calc(100vw - 315px)",
    marginLeft: "2rem",
    marginRight: "2rem",
    marginTop: "2rem",
  },
  noItemsFound: {
    marginLeft: "1.5rem",
  },
  headingWrapepr: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "2rem",
    marginBottom: "4.5rem",
  },
  cardWrapper: {
    position: "relative",
    padding: "3.5rem 3rem 0",
    height: "100%",
    "& img": {
      width: "100%",
      borderRadius: theme.shape.borderRadius,
    },
    "& h3": {
      fontSize: "2rem",
      marginBottom: "1rem",
      lineHeight: "1.5",
      color: "#114960",
    },
    "& h6": {
      fontSize: "1.5rem",
      fontWeight: 500,
      color: "#114960",
    },
  },
}));

export default useStyles;
