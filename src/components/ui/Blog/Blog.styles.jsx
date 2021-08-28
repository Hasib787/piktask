import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.primary.main,
    marginTop: "10rem",
    padding: "6.6rem 0 5rem",
  },
  headingWrapepr: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "7rem",
  },
  heading: {
    color: theme.palette.common.white,
    marginBottom: "1rem",
  },
  subheading: {
    fontSize: "1.8rem",
    color: theme.palette.common.white,
  },
  postsWrapper: {
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "@media (max-width: 768)": {
      justifyContent: "flex-start",
    },
  },
  moreButton: {
    ...theme.typography.button,
    backgroundColor: theme.palette.secondary.main,
    padding: "0.5rem 1.2rem",
    margin: "auto",
    fontSize: "1.3rem",
    border: "0.2rem solid transparent",
    display: "block",
    transition: "all 0.3s linear",
    "&:hover": {
     borderColor:"#117A00",
  },
}
}));

export default useStyles;
