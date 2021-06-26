import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paginationWrapper: {
    width: "100%",
  },
  root: {
    marginTop: "4.8rem",
  },
  listWrapper: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 0,
  },
  listItem: {
    width: "auto",
    paddingRight: ".6rem",
    paddingLeft: ".6rem",

    "& a": {
      textDecoration: "none",
      backgroundColor: theme.palette.common.white,
      borderRadius: ".4rem",
      fontSize: "1.9rem",
      transition: "all 0.3s linear",
      color: theme.palette.primary.main,
      width: "5.2rem",
      height: "4.7rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
      },

      "@media (max-width: 576px)": {
        width: "3.2rem",
        height: "3.7rem",
        fontSize: "1.5rem",
      },
    },
  },
  icon: {
    "@media (max-width: 576px)": {
      width: "1.3rem",
      height: "1.3rem",
    },
  },
}));

export default useStyles;
