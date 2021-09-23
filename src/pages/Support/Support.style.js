import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    supportWrapper: {
    padding: "0rem 30rem",
    [theme.breakpoints.down("769")]:{
        padding: "0 2rem",
    },
  },
  supportTitle:{
    color: "black !important",
    fontSize: "2.2rem",
  },
  description: {
    color: "#173050",
    fontSize: "1.6rem",
    lineHeight: "28px",
  },
  supportForm:{
    backgroundColor: "White",
    borderRadius: "4px",
    padding:"2.2rem",
    boxShadow:"3px 3px 10px #cacaca8a",
  },
  fieldWrapper: {
    marginBottom: "1.4rem",
    "& label": {
      marginBottom: "0.5rem",
    },
    "& label > span": {
      color: "red",
    },
  },
  inputField: {
    "& input": {
      padding: "1.28rem 1.5rem",
    },
    "&:focus": {
        border: "1px solid gray !important",
    },
    '&:after': {
      borderColor: "gray",
  },
    "& p": {
      fontSize: "14px",
    },
  },
  formDescription: {
    width: "100%",
    maxWidth: "100%",
    fontSize: "1.5rem",
    padding: "1rem",
    borderRadius: "5px",
  },
  uploadBtn: {
    padding: "1rem 3rem",
    marginLeft: "50%",
    transform: "translateX(-50%)",
    border: "none",
    borderRadius: "3px",
    fontSize: "18px",
    cursor: "pointer",
    backgroundColor: "#0088f2",
    color: "white",
    transition: "all 0.3s linear",
    "&:hover": {
      backgroundColor: "#0773c5",
    },
    [theme.breakpoints.down(480)]: {
      width: "100%",
      marginLeft: "0%",
      fontSize: "14px",
      padding: "1rem 0.9rem",
      transform: "translateX(0%)",
    },
  },
  uploadIcon: {
    marginRight: "7px",
  },
}));

export default useStyles;
