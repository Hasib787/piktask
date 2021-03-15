import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headingContainer: {
    padding: "4.5rem 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",

    [theme.breakpoints.down("xs")]: {
      padding: "2.5rem",
    },
    "@media (max-width: 576px)": {
      flexDirection: "column !important",
      alignItems: "baseline",
    },
  },
  headingH1: {
    color: theme.palette.common.white,
    fontSize: "4rem",
    marginBottom: "1rem",
    textTransform: "uppercase",

    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
      lineHeight: 1.5,
    },
    "@media (max-width: 576px)": {
      fontSize: "2.5rem",
      marginTop: "3.5rem",
    },
  },
  headingSubtitle: {
    color: theme.palette.common.white,
    fontSize: 16,
    marginBottom: "2.3rem",
    fontWeight: 400,
  },
}));

export default useStyles;
