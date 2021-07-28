import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  copyrightWrapper: {
    background: theme.palette.primary.main,
    height: 102,

    "@media (max-width: 768px)": {
      height: "auto",
    },
  },
  root: {
    height: "100%",
  },
  gridRoot: {
    display: "flex",
    alignItems: "center",
    height: "100%",

    "@media (max-width: 768px)": {
      flexDirection: "column",
    },
  },
  logoWrapper: {
    "@media (max-width: 992px)": {
      marginRight: "2rem",
    },
  },
  logo: {
    width: "13.5rem",
    display: "block",
  },
  copyRightText: {
    fontSize: "1.6rem",
    fontWeight: 400,
    color: theme.palette.common.white,
  },
}));

export default useStyles;
