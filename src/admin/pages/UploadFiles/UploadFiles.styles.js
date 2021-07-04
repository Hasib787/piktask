import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  adminRoot: {
    display: "flex",
    marginTop: "8rem",
  },
  content: {
    // flexGrow: 1,
    // padding: theme.spacing(2),
    padding: 0,
    width: "calc(100vw - 315px)",
    marginLeft: "2rem",
    marginRight: "2rem",
    marginTop: "2rem",
  },
  uploadContainer: {
    marginBottom: "3rem",
  },
  fileUploadContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "40rem",
    border: "2px dashed",
    borderColor: "#114960",
    marginBottom: "2.5rem",
    marginTop: "1.5rem",

    "&:focus": {
      border: "2px dashed",
      outline: "none",
    },
  },
  uploadIconWrapper: {
    width: "18rem",
    height: "18rem",
    fontSize: "8.5rem",
    color: "#97A1A8",
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "0.8rem",

    "& img": {
      width: "6rem",
      height: "6rem",
    },
  },
  subtitle: {
    fontSize: "1.4rem",
    color: "#97A1A8",
  },

  //input field
  uploadForm: {
    padding: "30px 80px",
    backgroundColor: "white",
    borderRadius: "5px",
    maxWidth: "100%",
  },
  titleText: {
    margin: "15px 0px 5px 0px",
  },
  inputField: {
    width: "100%",
    maxWidth: "100%",
    "& input": {
      height: "1px",
    },
  },
  tag: {
    width: "100%",
    maxWidth: "100%",
    "& input": {
      height: "10px",
      borderRadius: 0,
    },
    "& p": {
      fontSize: "1.5rem",
    },
  },
  description: {
    width: "100%",
    maxWidth: "100%",
    fontSize: "1.5rem",
    padding: "1rem",
    borderRadius: "5px",
  },

  textArea: {
    display: "flex",
  },
  tagContainer: {
    display: "flex",
    color: "white",
  },

  singleBorder: {
    margin: "2.5rem 0 2rem 0",
    borderBottom: "0.7px solid lightgray",
  },
  singleTag: {
    display: "flex",
    height: "28px",
    margin: "3px",
    padding: "5px",
    borderRadius: "3px",
    backgroundColor: "#dd4b39",
  },
  closeBtn:{
    border: "none",
    background: "transparent",
    cursor: "pointer",
  },
  closeIcon: {
    marginTop: "4px",
    color: "white",
    fontSize: "11px",
    borderRadius:"50%",
    marginLeft: ".5rem",
  },
  uploadBtn: {
    padding: "13px 29px",
    marginLeft: "50%",
    transform: "translateX(-50%)",
    border: "none",
    borderRadius: "3px",
    fontSize: "18px",
    cursor: "pointer",
    backgroundColor: "#00a65a",
    color: "white",
  },
  uploadIcon: {
    marginRight: "7px",
  },

  // Checkbox card

  cardContent: {
    padding: "3rem 2.5rem",
    border: "1px solid #ACACAC",

    "& h2": {
      marginBottom: "1.5rem",
    },
  },
  imageTypeGrid: {
    "@media (max-width: 1270px)": {
      marginBottom: "3rem",
    },
  },
  checkboxCol: {
    position: "relative",
    paddingRight: "3.5rem",
    "&:before": {
      content: '""',
      position: "absolute",
      width: ".2rem",
      height: "74%",
      backgroundColor: "#E6E6E6",
      top: "60%",
      right: 0,
      marginRight: "2.5rem",
      transform: "translateY(-50%)",
    },

    "@media (max-width: 960px)": {
      "&:before": {
        backgroundColor: "transparent",
        width: 0,
        height: 0,
        marginRi: 0,
        transform: "translateY(0)",
      },
    },
  },
  root: {
    alignItems: "flex-start",
    marginBottom: "0.6rem",
  },
  checkBox: {
    // paddingTop: 0,
    marginTop: "-.9rem",
    "& svg": {
      width: "2.5rem",
      height: "2.5rem",
    },
  },
  labelItem: {
    fontSize: "1.4rem",
  },
}));

export default useStyles;
