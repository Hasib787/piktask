import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inputField: {
    marginBottom: "2rem",
  },
  primaryBtn: {
    paddingTop: ".6rem",
    paddingBottom: ".6rem",
    textTransform: "capitalize",
  },
  authBtn: {
    backgroundColor: "#117A00",
    padding: "12px 16px",
    color: theme.palette.common.white,
    fontSize: "1.8rem",

    "&:hover": {
      backgroundColor: "#146b06",
    },
  },
}));

export default useStyles;
