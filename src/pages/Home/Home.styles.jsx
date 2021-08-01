import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headingButton: {
    ...theme.typography.button,
    // backgroundColor: theme.palette.secondary.main,
    padding: "0.8rem 3.5rem",
    fontSize: "1.8rem",
    fontWeight: 500,
    color: "#1B3F4E",

    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export default useStyles;
