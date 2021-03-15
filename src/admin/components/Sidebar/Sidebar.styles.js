import { makeStyles } from "@material-ui/core";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  sidebarWrapper: {
    backgroundColor: "#FAFAFA",
    width: "28rem",
    paddingTop: "1rem",
  },
  iconButtonHide: {
    position: "absolute",
    right: "-1rem",
    "& svg": {
      color: theme.palette.common.white,
      fontSize: "3rem",
    },
  },
  menuButton: {
    width: "5rem",
    height: "5rem",
    marginLeft: "1rem",
    marginTop: "1rem",
    position: "absolute",
    zIndex: 1111,
    backgroundColor: theme.palette.common.white,

    "& svg": {
      width: "3rem",
      height: "3rem",
    },
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "#1B3F4E",
    borderRight: "0 solid transparent",
    paddingTop: "2rem",
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      // width: theme.spacing(9) + 1,
      width: 0,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  adminLogoLink: {
    marginLeft: "3.5rem",
    "& img": {
      width: "14rem",
      objectFit: "cover",
    },
  },
  listNavs: {
    "& li": {
      padding: "0 2rem",
      "& a": {
        color: "#114960",
        fontSize: "1.6rem",
        textDecoration: "none",
        padding: "1.5rem 1.6rem",
        width: "100%",
      },
      "&:hover": {
        backgroundColor: "#114960",
      },
      "&:hover a": {
        color: `${theme.palette.common.white} !important`,
      },
    },
  },
  selected: {
    backgroundColor: "#114960 !important",
    "& a": {
      color: `${theme.palette.common.white} !important`,
    },
  },
  submenu: {
    "& svg": {
      color: theme.palette.common.white,
      position: "relative",
      right: "1.5rem",
      cursor: "pointer",
    },
  },
  submenuWrapper: {
    backgroundColor: "#114960",
  },
}));

export default useStyles;
