import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  copyRightWrapper: {
    padding: "0rem 20rem",
    [theme.breakpoints.down("769")]:{
        padding: "0 2rem",
    },
  },
  copyRightTitle:{
    color: "black !important",
    fontSize: "2.2rem",
  },
  description: {
    textAlign:"justify",
    color: "#173050",
    fontSize: "1.6rem",
    lineHeight: "28px",
  },
}));

export default useStyles;
