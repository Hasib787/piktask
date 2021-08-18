import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  searchWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "6.5rem",
    position: "relative",
  },
  inputField: {
    backgroundColor: theme.palette.common.white,
    border: "none",
    padding: ".5rem 3rem",
    fontSize: 18,
    height: "5.2rem",
    borderTopLeftRadius: ".3rem",
    borderBottomLeftRadius: ".2rem",
    [theme.breakpoints.down("sm")]: {
      height: "4.5rem",
    },
    [theme.breakpoints.down(480)]: {
      height: "4rem",
    },
  },
  searchIconWrapper: {
    backgroundColor: theme.palette.primary.light,
    width: 122,
    height: "5.2rem",
    cursor: "pointer",
    textAlign: "center",
    borderTopRightRadius: ".2rem",
    borderBottomRightRadius: ".2rem",
    [theme.breakpoints.down("sm")]: {
      height: "4.5rem",
    },

    [theme.breakpoints.down(480)]: {
      height: "4rem",
      width: 76,
    },
  },
  searchIcon: {
    color: theme.palette.common.white,
    width: "2.2rem",
    height: "100%",
  },
  selectContainer: {
    backgroundColor: theme.palette.common.white,
    height: "5.2rem",
    "& svg": {
      height: "2.6rem",
      marginTop: "-1px",
      marginRight: "-10px",
      width: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "4.5rem",
    },
    "& .MuiInputBase-formControl": {
      height: "5.2rem",
    },
    "& .MuiInputBase-formControl:hover fieldset": {
      borderColor: "transparent",
    },
    "& .MuiInputBase-formControl:focus-visible": {
      outline: 0,
    },
    "&:focus-visible": {
      outline: 0,
    },
    "& select": {
      width: 152,
      paddingLeft: "1rem",
      borderLeft: "0px solid #BEBEBE",
      fontSize: "1.8rem",
      height: "3.2rem",
      "&:focus": {
        backgroundColor: "transparent",
        outline: "none",
      },
    },
    "& fieldset": {
      borderColor: "transparent",
      outline: "none",
      "&:focus-visible": {},
    },
    "& .MuiNativeSelect-icon": {
      right: 22,
    },
  },

  // Search results
  searchResultWrapper: {
    backgroundColor: "#FFF",
    minHeight: 300,
    maxHeight: 400,
    overflowY: "auto",
    overflowX: "hidden",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
    position: "absolute",
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    top: 59,
    width: "71.2%",
    left: 0,
    zIndex: 99,
  },
  closeIcon: {
    position: "absolute",
    right: "29%",
  },
  searchContent: {
    width: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  loadingWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& > p": {
      color: "#a1a1a1",
      fontSize: 14,
      display: "flex",
      alignSelf: "center",
      justifySelf: "center",
    },
  },
}));

export default useStyles;
