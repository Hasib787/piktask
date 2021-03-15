import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headingButton: {
    ...theme.typography.button,
    backgroundColor: theme.palette.secondary.main,
    width: "16rem",
    height: "5rem",
    fontSize: "1.8rem",

    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
