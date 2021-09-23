import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  blogImageWrapper:{
    backgroundColor: "#fff",
    padding: "2rem",
    height: 600,
    boxShadow: "0px 0px 10px #ddd",

    "& img": {
      height: "100%",
      width: "100%",
    },
  },
  blogAuthorInfo: {
    color: "#000"
  },
  blogContent: {
    "& p": {
      lineHeight: "4rem",
    },
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
}));

export default useStyles;
