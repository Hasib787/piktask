import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    backgroundColor: theme.palette.common.white,
    width: "55rem",
    borderRadius: 4,
    flexBasis: "40%",
    [theme.breakpoints.down(480)]: {
      width: "30rem",
    },
  },
  cardHeadingWrapper: {
    textAlign: "center",
  },
  cardHeading: {
    fontSize: "3rem",
    color: "#13303C",
  },
  cardSubtitle: {
    color: "#13303C",
    width: "70%",
    margin: "auto",
  },

  formButtonGroups: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1rem",
  },

  formLink: {
    color: "#117A00",
    fontSize: "1.7rem",
    textTransform: "inherit",
    padding: 0,

    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export default useStyles;
