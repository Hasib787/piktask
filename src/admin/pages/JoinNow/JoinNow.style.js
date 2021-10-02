import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // WorkingSteps
  contentWrapper: {
    padding: "5rem 13rem",
  },
  
  // Instruction
  instructionArea: {
    backgroundColor: "#fff",
    padding: "5rem",
  },
  instructionWrapper: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  instructionContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  instructionBy: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& h1": {
      fontSize: "12rem",
      color: "#ddd",
      fontWeight: 700,
      marginRight: "2rem"
    },
    "& h2": {
      fontSize: "12rem",
      color: "#ddd",
      fontWeight: 700,
      marginRight: "0.4rem"
    },
    "& h4": {
      fontSize: "2rem",
      color: "#143340",
      fontWeight: 500,
    },
    "& h5": {
      fontSize: "1.4rem",
      color: "#0088f2",
      fontWeight: 500,
    },
    "& p": {
      fontSize: "1.4rem",
      color: "#143340",
      fontWeight: 400,
    },
  },
  rightArrow: {
    marginLeft: "14rem",

    "& img": {
      width: "6rem"
    },
  },
}))

export default useStyles;
