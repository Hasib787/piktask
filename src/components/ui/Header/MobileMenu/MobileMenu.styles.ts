import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menuWrapper: {
    width: "30rem",
    flexDirection: "column",
  },
  mobileMenuLogo: {
    "&:hover": {
      background: "transparent",
    },
  },
  mobileTabWrapper: {},
  navItems: {
    width: "100%",

    "& a": {
      color: theme.palette.common.white,
      textTransform: "uppercase",
      textDecoration: "none",
    },
  },
  selected: {
    background: "red",
  },
  mobileBtn: {
    ...theme.typography.button,
    justifyContent: "flex-start",
    width: "100%",
    paddingLeft: "1.8rem",
    alignItems: "center",

    "& img": {
      marginRight: "1rem",
    },
  },
}));

export default useStyles;
