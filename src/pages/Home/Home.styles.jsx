import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headingButton: {
    ...theme.typography.button,
    // backgroundColor: "rgba(0, 0, 0, 0.04)",
    padding: "0.7rem 1.5rem",
    fontSize: "1.4rem",
    fontWeight: 500,
    color: "#1B3F4E",
    transition: "all 0.3s linear",

    "&:hover": {
      backgroundColor: "#117A00",
      color: "#fff",
    },
  },
}));

export default useStyles;
