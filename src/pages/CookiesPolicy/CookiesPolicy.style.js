import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cookiesPolicyWrapper: {
    padding: "0rem 20rem",
    [theme.breakpoints.down("769")]:{
        padding: "0 2rem",
    },
  },
  cookiesPolicyTitle:{
    color: "black !important",
    fontSize: "2.2rem",
  },
  description: {
    color: "#173050",
    fontSize: "1.6rem",
    lineHeight: "28px",
  },
}));

export default useStyles;
