import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formSubmit: {
    width: "100%",
  },
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
    // backgroundColor: theme.palette.primary.light,
    backgroundColor: "#0088f2",
    width: 122,
    height: "5.2rem",
    cursor: "pointer",
    border: "none",
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
      width: 240,
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

  searchCats: {
    background: theme.palette.common.white,
    borderRadius: 0,
    height: "5.2rem",
    minWidth: 140,
    position: "relative",
    display: "flex",
    alignItems: "center",

    "& > span": {
      display: "block",
      marginRight: "0.5rem",
      minWidth: 140,
      color: "#666",
    },

    "&:hover": {
      background: theme.palette.common.white,
      color: "#666",
    },
    "& svg": {
      position: "absolute",
      right: 5,
      color: "#666",
    },

    [theme.breakpoints.down("sm")]: {
      height: "4.5rem",
    },
    [theme.breakpoints.down(577)]: {
      display: "none"
    },
  },
  searchCatItem: {
    padding: "1rem 0rem",
  },
  categoryList: {
    listStyle: "none",
    cursor: "pointer",
    padding: "0.8rem 2rem",
    transition: "all 0.3s linear",

    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  },
  searchBorder: {
    background: "rgb(0 0 0 / 12%)",
    height: 36,
    width: 1,
    position: "absolute",
    left: -3,
  },

  categoryPaper: {
    height: 450,
    overflowY: "auto",
    overflowX: "hidden",

    "&::-webkit-scrollbar": {
      width: 8,
      borderRadius: 20,
    },

    "&::-webkit-scrollbar-track": {
      background: "#ddd",
      borderRadius: 20,
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#999",
      borderRadius: 20,
      width: 6,
      // border: "3px solid orange",
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
    width: "100%",
    left: 0,
    zIndex: 1,
    opacity: 99,

    "&::-webkit-scrollbar-track": {
      "-webkitBoxShadow": "inset 0 0 6px rgba(0,0,0,0.3)",
      borderRadius: 10,
      backgroundColor: "#F5F5F5",
    },
    "&::-webkit-scrollbar": {
      width: 10,
      backgroundColor: "#F5F5F5",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: 10,
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,.3)",
      backgroundColor: "rgba(0, 28, 48, 0.6)",
    },
  },

  closeIcon: {
    position: "absolute",
    right: "29%",
  },
  searchContent: {
    width: "auto",
    height: "300px",
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
