import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((them) => ({
  cardWrapper: {
    width: "50rem",
    margin: "auto",
  },
  root: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    flexDirection: "column",
  },
  loginBtn: {
    padding: 0,
    marginTop: "2rem",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export default useStyles;
