import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headingButton: {
    ...theme.typography.button,
    // backgroundColor: "rgba(0, 0, 0, 0.04)",
    padding: "0.4rem 1rem",
    fontSize: "1.3rem",
    fontWeight: 500,
    color: "#1B3F4E",
    transition: "all 0.3s linear",

    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "#fff",
    },
  },
}));

export default useStyles;
