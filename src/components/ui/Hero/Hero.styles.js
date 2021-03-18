import { makeStyles } from "@material-ui/core/styles";
// import heroBG from "../../../assets/490cdcd7579.svg";

const useStyles = makeStyles((theme) => ({
  heroWrapper: {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    position: "relative",
    "&::before": {
      background: "rgb(20 51 64 / 94%)",
      content: '""',
      position: "absolute",
      //   backgroundImage: `url(${heroBG})`,
      //   opacity: "0.9",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
  },
  heroBg: {
    // backgroundColor: "red",
  },
  contentWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "85rem",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
  },
  popularSearch: {
    marginTop: "2.2rem",
    textAlign: "center",
    width: "100%",
  },
  searchTitle: {
    color: theme.palette.common.white,
    fontSize: 21,
    fontWeight: 400,
    marginBottom: "3.5rem",
  },
  buttonGroups: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
    },
  },
  popularSearchKeyword: {
    ...theme.typography.button,
    background: "#1B3F4E",
    border: `1px solid ${theme.typography.secondary.green}`,
    fontSize: "1.6rem",
    padding: ".8rem 3.5rem",
    fontWeight: 300,
    [theme.breakpoints.down("sm")]: {
      marginRight: "2rem",
      marginBottom: "2rem",
      width: "auto",
      height: "3.5rem",
      fontSize: "1.5rem",
    },
  },
}));

export default useStyles;
