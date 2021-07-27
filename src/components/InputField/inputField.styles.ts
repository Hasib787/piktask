import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inputField: {
    // ...theme.typography.input,
    marginBottom: "2rem",
  },
  primaryBtn: {
    paddingTop: ".6rem",
    paddingBottom: ".6rem",
    textTransform: "capitalize",
  },
  authBtn: {
    backgroundColor: "#117A00",
    padding: "8px 16px",
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: "#146b06",
    },
  },
}));

export default useStyles;
