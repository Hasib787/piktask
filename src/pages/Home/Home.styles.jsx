import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headingButton: {
    ...theme.typography.button,
    backgroundColor: theme.palette.secondary.main,
    padding: "0.8rem 3.5rem",
    fontSize: "1.5rem",
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
