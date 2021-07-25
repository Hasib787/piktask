import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  headerBottom: {
    "& > .MuiAppBar-colorPrimary": {
      background: "#1B3F4E",
      height: 100,
    },
  },
  container: {
    height: "100%",
  },
  headerBottomToolbar: {
    height: "100%",
  },
  logoWrapper: {
    width: 153,
    marginRight: "2rem",
    padding: 0,
    "&:hover": {
      background: "transparent",
    },

    "@media (max-width: 1024px)": {
      width: "12rem",

      "& img": {
        width: "100%",
      },
    },
  },
  menuUnderline: {
    height: 0,
    backgroundColor: "transparent",
  },
  menuTab: {
    marginLeft: "auto",
  },
  menuItem: {
    opacity: 1,
    minWidth: "1rem",
    textTransform: "uppercase",
    "&:last-child": {
      marginRight: "3rem",
    },

    "@media (max-width: 1024px)": {
      marginRight: 0,
      paddingLight: ".5rem",
      paddingLeft: ".5rem",
      fontSize: "1.4rem",

      "&:last-child": {
        marginRight: ".5rem",
      },
    },
  },
  premium: {
    ...theme.typography.button,
    backgroundColor: theme.palette.secondary.main,
    paddingLeft: "2.4rem",
    paddingRight: "2.4rem",
    textTransform: "uppercase",
    border: ".2rem solid",
    borderColor: "transparent",
    "&:hover": {
      borderColor: `${theme.palette.common.white}`,
    },
    "@media (max-width: 1024px)": {
      paddingRight: "1rem",
      paddingLeft: "1rem",
      fontSize: "1.4rem",

      "& img": {
        display: "none",
      },
    },
  },
  crownIcon: {
    marginRight: ".8rem",
  },
  sellContentBtn: {
    ...theme.typography.button,
    border: `.2rem solid`,
    borderColor: theme.palette.secondary.main,
    paddingRight: "2.4rem",
    paddingLeft: "2.4rem",
    marginRight: "1.5rem",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
    "@media (max-width: 1024px)": {
      marginRight: "1rem",
      paddingRight: "1rem",
      paddingLeft: "1rem",
      fontSize: "1.4rem",
    },
  },
}));

export default useStyles;
