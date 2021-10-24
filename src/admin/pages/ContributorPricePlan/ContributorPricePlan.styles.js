import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  adminRoot: {
    // display: "flex",
  },
  adminSidebar: {
    marginTop: "0rem",
    [theme.breakpoints.down(769)]: {
      display: "none",
    },
  },
  content: {
    padding: 0,
    marginLeft: "28rem",
    [theme.breakpoints.down(769)]: {
      width: "100%",
      marginLeft: "0rem",
    },
  },
  pricePlanGridContainer: {
    padding: "1.5rem 1rem 0rem 1rem",
    marginTop: "8rem",
  },
  pricePlanImage: {
    width: "100%",
    "& img": {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
  },
}))

export default useStyles;
