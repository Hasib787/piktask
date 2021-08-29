import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  totalResources: {
    fontSize: "2.2rem",
    padding: "3rem 0rem",
    [theme.breakpoints.down(426)]: {
      padding: "2.5rem 0 3rem",
    },
  },
}));

export default useStyles;
