import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tagWrapper: {
    backgroundColor: theme.palette.common.white,
    padding: "4rem 3rem",
  },
  totalResources: {
    fontSize: "4rem",
    padding: "3.5rem 0 6rem",
  },
}));

export default useStyles;
