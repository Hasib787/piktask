import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    // backgroundColor: "#F8FCFF",
    backgroundColor: "#f3f3f3",
    marginTop: "4rem",
    padding: "3rem 0rem",
  },
  headingWrapepr: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "3rem",
  },
  heading: {
    color: "#001c30",
    fontSize: "3rem",
    marginBottom: ".5rem",
  },
  subheading: {
    color: "#001c30",
    fontSize: "1.8rem",
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
  seeMoreButton: {
    textAlign: "center",
  },
  moreButton: {
    ...theme.typography.button,
    backgroundColor: "#0088f2",
    padding: "0.5rem 2.5rem",
    // margin: "0 auto",
    fontSize: "1.3rem",
    border: "0.2rem solid transparent",
    // display: "block",
    transition: "all 0.3s linear",
    "&:hover": {
      backgroundColor: "#0773c5",
      borderColor:"#0773c5",
  },
}
}));

export default useStyles;
