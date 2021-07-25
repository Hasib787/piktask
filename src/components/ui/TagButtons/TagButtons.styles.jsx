import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tagsContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: "4.5rem",
    marginBottom: "2.8rem",
  },
  tagTitle: {
    fontSize: "2.5rem",
    marginRight: "2rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginBottom: "1.5rem",
    },
  },
  tagButton: {
    ...theme.typography.button,
    fontSize: "1.5rem",
    color: theme.palette.primary.main,
    backgroundColor: "#F8F8F8",
    border: "1px solid rgb(150 164 173 / 54%)",
    paddingRight: "3rem",
    paddingLeft: "3rem",
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
