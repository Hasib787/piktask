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
    background: "#C3C3C3",
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
    color: "#114960",
  },

  // Checkbox card
  cardRoot: {
    borderRadius: 0,
    marginBottom: "2rem",
    boxShadow: "none",
  },
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
