import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dropDownMenuContainer: {
    zIndex: 99,
    left: "-4.5rem !important",
    marginTop: "1rem",
    "@media (max-width: 576px)": {
      minWidth: "60%",
      left: "auto !important",
    },

  },
  dropdownMenuWrapper: {
    padding: 0,
    outline: "none",
  },
  gridUserInfo: {
    padding: "1rem",
    alignItems: "center",
    outline: "none",
    "@media (max-width: 576px)": {
      padding: "1rem",
    },
  },
  userInDropdown: {
    display: "flex",
    alignItems: "center",
  },
  avatarCircle: {

  },
  dropdownUserAvatar: {
    width: "5rem",
    height: "5rem",
    borderRadius: "100%",
    padding: "0.2rem",
    backgroundColor: "#1B3F4E",
    marginRight: "1rem",
    "@media (max-width: 576px)": {
      width: "4rem",
      height: "4rem",
    },
  },
  dropdownUserName: {
    fontSize: "1.6rem",
    "@media (max-width: 576px)": {
      fontSize: "1.4rem",
    },
  },
  userEmail: {
    fontSize: "1.4rem",
    color: theme.typography.colors.lightDarkColor,
    "@media (max-width: 576px)": {
      fontSize: "1.2rem",
    },
  },
  accountStatusBtn: {
    ...theme.typography.button,
    backgroundColor: theme.palette.primary.main,
    marginLeft: "1rem",
    color: "#76C71A",
    fontSize: "1.4rem",
    padding: "0.3rem 1.5rem",
    float: "right",
    border: ".2rem solid transparent",
    "&:hover": {
      borderColor: theme.palette.secondary.main,
    },
    "@media (max-width: 576px)": {
      padding: "0rem 0.2rem",
      fontSize: "1.2rem",
    },
  },
  accountIcon: {
    width: "1.8rem",
    marginRight: "0.8rem",
    "@media (max-width: 576px)": {
      width: "1.2rem",
      marginRight: "0.4rem",
    },
  },
  productDownloadCount: {
    backgroundColor: "rgb(17 122 0 / 15%)",
    textAlign: "center",
    padding: "0.8rem",
    "@media (max-width: 576px)": {
      padding: "0.8rem",
    },
  },
  productDownloadGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "&:first-child": {
      borderRight: "1px solid #CCCCCC",
    },
  },
  totalAmount: {
    color: "#76C71A",
    fontSize: "2rem",
    lineHeight: 1,
    "@media (max-width: 576px)": {
      fontSize: "1.5rem",
    },
  },
  totalText: {
    fontSize: "1.5rem",
    fontWeight: 400,
    "@media (max-width: 576px)": {
      fontSize: "1.3rem",
    },
  },
  userMenuItem: {
    padding: "1rem 1.5rem",
    borderBottom: "1px solid #cccccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "1.5rem",
    fontWeight: 500,
    "& span": {
      color: "inherit",
    },
    "&:last-child": {
      borderBottom: "0px solid transparent",
    },
    "@media (max-width: 576px)": {
      padding: ".6rem 1.5rem",
      fontSize: "1.4rem",
      minHeight: 38,
    },
  },
}));

export default useStyles;
