import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  searchWrapper: {
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
    borderTopLeftRadius: ".2rem",
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
    "& > select": {
      width: 200,
      paddingLeft: "1rem",
      borderLeft: "1px solid #BEBEBE",
      fontSize: "1.8rem",
      height: "3.2rem",
      "&:focus": {
        backgroundColor: "transparent",
      },
    },
    "& .MuiNativeSelect-icon": {
      right: 22,
    },
  },

  // Search results
  searchResultWrapper: {
    backgroundColor: "#FFF",
    minHeight: 300,
    boxShadow: "box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
    position: "absolute",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    top: 59,
    width: "71.2%",
    left: 0,
  },
  searchResults: {
    backgroundColor: "#FFF",
    minHeight: 300,
    boxShadow: "box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
    position: "absolute",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    top: 59,
    width: "71.2%",
    left: 0,
  },
}));

export default useStyles;
