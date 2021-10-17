import { makeStyles } from "@material-ui/core";

 const useStyles = makeStyles((theme) => ({
  productItem: {
    "@media (max-width: 576px)": {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
  headingButton: {
    ...theme.typography.button,
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
