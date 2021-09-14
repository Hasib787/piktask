import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  adminRoot: {
    // display: "flex",
    // marginTop: "8rem",
  },
  content: {
    padding: 0,
    marginLeft: "28rem",
    marginRight: "0rem",
  },
  cardContentWrapper: {
    margin: "2rem",
  },
  noItemsFound: {
    marginLeft: "1.5rem",
  },
  headingWrapepr: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "2rem",
    marginBottom: "1.5rem",
  },
  cardWrapper: {
    position: "relative",
    padding: "0.5rem",
    height: "100%",
    "& img": {
      width: "100%",
      height: 150,
      objectFit: "cover",
      borderRadius: theme.shape.borderRadius,
    },
    "& .MuiCardContent-root": {
      paddingBottom: "0rem !important",
    },
  },
  cardContent: {
    padding: "1rem 1rem 1rem 0rem",
    "& h3": {
      fontSize: "1.4rem",
      lineHeight: "1.5",
      color: "#114960",
    },
    "& h6": {
      fontSize: "1.2rem",
      fontWeight: 500,
      color: "#a6a6a6",
    },
  },
}));

export default useStyles;
