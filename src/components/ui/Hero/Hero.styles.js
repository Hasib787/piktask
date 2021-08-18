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
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
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
    padding: ".6rem 3.5rem",
    fontWeight: 300,
    [theme.breakpoints.down("sm")]: {
      marginRight: "2rem",
      marginBottom: "2rem",
      width: "auto",
      height: "3.5rem",
    },
  },
  heroButtonWrapper:{
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
  popularButton: {
    ...theme.typography.button,
    backgroundColor: "#117A00",
    border: "2px solid #117A00",
    marginRight: "1rem",
    padding: "0.4rem 2.5rem",
    fontSize: "14px",
    fontWeight: 500,
    color: "#fff",
    transition: "all 0.3s linear",

    "&:hover": {
      backgroundColor: "#106403",
      color: "#fff",
    },
  },
  recButton:{
    border: "2px solid white",
    padding: "0.4rem 2.5rem",
    fontSize: "14px",
    fontWeight: 500,
    color: "#fff",
    borderRadius: 30,
    transition: "all 0.3s linear",
    "&:hover": {
      backgroundColor: "#117A00",
      color: "#fff",
    },
  },
}));

export default useStyles;
