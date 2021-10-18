import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent:"center",
  },
  title: {
    color: theme.palette.common.white,
    fontSize: "1.4rem",
    fontWeight: 500,
    marginRight: "2.3rem",
    [theme.breakpoints.down(576)]:{
      marginRight: "0",
    },
  },
  socialIcon: {
    width: "3rem",
    marginLeft: ".6rem",
  },
}));

export default useStyles;
