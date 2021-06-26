import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    color: theme.palette.common.white,
    fontSize: "1.6rem",
    fontWeight: 500,
    marginRight: "2.3rem",
  },
  socialIcon: {
    width: "3rem",
    marginLeft: ".6rem",
  },
}));

export default useStyles;
