import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dropDownMenuContainer: {
    zIndex: 99,
    minWidth: "45rem",
    left: "-4.5rem !important",
    marginTop: "1rem",
    "@media (max-width: 576px)": {
      minWidth: "35rem",
    },
  },
  dropdownMenuWrapper: {
    padding: 0,
    outline: "none",
  },
  gridUserInfo: {
    padding: "2rem",
    alignItems: "center",
    outline: "none",
    "@media (max-width: 576px)": {
      paddingRight: "1.5rem",
      paddingLeft: "1.5rem",
    },
  },
  userInDropdown: {
    display: "flex",
    alignItems: "center",
  },
  dropdownUserAvatar: {
    width: "6rem",
    height: "6rem",
    borderRadius: "100%",
    marginRight: "1rem",
    "@media (max-width: 576px)": {
      width: "5.4rem",
      height: "5.4rem",
    },
  },
  dropdownUserName: {
    fontSize: "2rem",
    "@media (max-width: 576px)": {
      fontSize: "1.4rem",
    },
  },
  userEmail: {
    fontSize: "1.6rem",
    color: theme.typography.colors.lightDarkColor,
    "@media (max-width: 576px)": {
      fontSize: "1.2rem",
    },
  },
  accountStatusBtn: {
    ...theme.typography.button,
    backgroundColor: theme.palette.primary.main,
    color: "#76C71A",
    fontSize: "1.6rem",
    paddingLeft: "3rem",
    paddingRight: "3rem",
    float: "right",
    border: ".2rem solid transparent",
    "&:hover": {
      borderColor: theme.palette.secondary.main,
    },

    "@media (max-width: 576px)": {
      padding: ".3rem 1.5rem",
      fontSize: "1.6rem",
    },
  },
  accountIcon: {
    marginRight: "1rem",
  },
  productDownloadCount: {
    backgroundColor: "rgb(17 122 0 / 15%)",
    textAlign: "center",
    padding: "2rem",
    "@media (max-width: 576px)": {
      padding: "1rem",
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
    fontSize: "3rem",
    lineHeight: 1,
    "@media (max-width: 576px)": {
      fontSize: "2rem",
    },
  },
  totalText: {
    fontSize: "1.5rem",
    fontWeight: 400,
    "@media (max-width: 576px)": {
      fontSize: "1.5rem",
    },
  },
  userMenuItem: {
    padding: "1.5rem 2rem",
    borderBottom: "1px solid #cccccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "1.6rem",
    fontWeight: 500,
    "& span": {
      color: "inherit",
    },
    "&:last-child": {
      borderBottom: "0px solid transparent",
    },
    "@media (max-width: 576px)": {
      padding: ".8rem 2rem",
      fontSize: "1.5rem",
    },
  },
}));

export default useStyles;
