import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tagWrapper: {
    backgroundColor: theme.palette.common.white,
    padding: "4rem 3rem",
  },
  totalResources: {
    fontSize: "2.2rem",
    padding: "3.5rem 0 6rem",
    fontWeight: "500",
    [theme.breakpoints.down(426)]: {
      padding: "2.5rem 0 3rem",
    },
  },
}));

export default useStyles;
