import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appbarHeader: {
    boxShadow: "none",
    backgroundColor: theme.palette.common.white,
  },
  fullWidth: {
    width: "100%",
    height: "8rem",
    // backgroundColor: "#1B3F4E",
  },
  root: {
    height: "100%",
    paddingTop: "1.5rem",
  },
  container: {
    height: "100%",
  },
  item: {
    height: "100%",
    display: "flex",
    padding: "0 !important",
    alignItems: "center",
  },
  adminLogo: {
    width: "13rem",
  },
  headerInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
  },
  earningAmount: {
    color: "#1B3F4E",
    fontSize: "1.8rem",
    fontWeight: 500,
    marginRight: "4rem",
  },
  uploadBtn: {
    ...theme.typography.button,
    backgroundColor: "#117A00",
    paddingRight: "2.5rem",
    paddingLeft: "2.5rem",
    marginRight: "2rem",
    border: "2px solid",
    borderColor: "transparent",

    "&:hover": {
      borderColor: "white",
    },
  },
  ButtoncrownIcon: {
    marginRight: ".8rem",
  },
  userProfile: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  adminPhoto: {
    width: "4.8rem",
    height: "4.8rem",
    borderRadius: "100%",
    marginRight: "1.5rem",
  },
  userName: {
    color: "#1B3F4E",
    fontSize: "1.8rem",
    fontWeight: 500,
  },
  arrowDown: {
    fontSize: "3.5rem",
    color: "#376579",
  },
}));

export default useStyles;
