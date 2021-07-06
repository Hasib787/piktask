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
    width: "16rem",
    height: "5rem",
    margin: "auto",
    display: "block",
    "&:hover": {
      border: `0.2rem solid ${theme.palette.secondary.main}`,
    },
  },
}));

export default useStyles;
