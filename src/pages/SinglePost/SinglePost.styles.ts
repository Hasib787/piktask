import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  blogImageWrapper:{
    // backgroundColor: "#fff",
    padding: "2rem",
    height: 600,

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
}));

export default useStyles;
