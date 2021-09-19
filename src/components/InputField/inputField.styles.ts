import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inputField: {
    marginBottom: "2rem",
    "& .MuiInputLabel-outlined": {
      zIndex: 1,
      transform: "translate(14px, 13px) scale(1)",
      pointerEvents: "none",
    },
    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      transform: "translate(14px, -6px) scale(0.75)",
    },
    "& .MuiOutlinedInput-input": {
      padding: "11px 14px",
    },
  },
  primaryBtn: {
    paddingTop: ".6rem",
    paddingBottom: ".6rem",
    textTransform: "capitalize",
  },
  authBtn: {
    // backgroundColor: "#117A00",
    backgroundColor: "#0088f2",
    padding: "6px 16px",
    color: theme.palette.common.white,
    fontSize: "1.6rem",

    "&:hover": {
      backgroundColor: "#146b06",
    },
  },
}));

export default useStyles;
