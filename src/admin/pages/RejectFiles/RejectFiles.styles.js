import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  adminRoot: {
    // display: "flex",
  },
  adminSidebar: {
    marginTop: "0rem",
    [theme.breakpoints.down(769)]: {
      display: "none",
    },
  },
  content: {
    padding: 0,
    marginLeft: "28rem",
    marginRight: "0rem",
    marginTop: "10rem",
    [theme.breakpoints.down(769)]: {
      width: "100%",
      marginLeft: "0rem",
    },
  },
  rejectFilesWrapper: {
    margin: "2rem",
  },
  noItemsFound: {
    marginLeft: "1.5rem",
  },
  headingWrapepr: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "2rem",
    marginBottom: "1.5rem",
  },
  cardWrapper: {
    position: "relative",
    cursor: "pointer",
    "& img": {
      width: "100%",
      height: 150,
      borderRadius: "0.1rem",
    },
    "& .MuiCardContent-root": {
      paddingBottom: "0rem !important",
    },
  },
  cardImage: {
    padding: "0.4rem 0.4rem 0rem 0.4rem",
  },
  cardContent: {
    padding: "0rem",
    backgroundColor: "#f1f1f1",
    marginTop: "-0.39rem !important",
    "& h3": {
      fontSize: "1.4rem",
      lineHeight: "1.5",
      color: "#114960",
      textAlign: "center",
      padding: "0.5rem 0rem",
    },
    "& .MuiCardContent-root": {
      padding: "0rem !important",
    },
  },

  // Modal
  drawerRoot: {
    zIndex: "9999 !important",
  },
  paper: {
    width: "40rem",
    top: "0rem",
    height: "100%",
    borderTop: "1px solid #ddd",

  },
  closeIcon: {
    cursor: "pointer",
    fontSize: "3.5rem",
    color: "#B7B7B7",
    "&:hover": {
      color: "#0088f2",
    },
  },
  modalHeader: {
    padding: "2rem 4rem 0",
    "& hr": {
      border: "0 solid transparent",
      backgroundColor: "#ddd",
      height: "0.1rem",
    },
  },
  headingContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1.5rem",
  },

  rejectionMessage: {
    padding: "0rem 4rem",
    margin: "2.2rem 0",
    "& p": {
      color: "#B1B1B1",
      lineHeight: 1.6,
    },
  },
  article: {
    marginBottom: "2rem",
    paddingBottom: "2rem",
    borderBottom: "1px solid #ddd",
    "&:last-child": {
      marginBottom: "0rem",
      borderBottom: "0px solid transparent",
    },
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1.5rem",
    color: "#114960",
  },
  viewBtn: {
    backgroundColor: "#0088f2",
    fontSize: "2.2rem",
    padding: "1.5rem 2rem",
    borderRadius: 0,
    color: "#FFF",
    border: "none",

    "&:hover": {
      backgroundColor: "rgb(17 122 0 / 95%)",
    },
  },
}));

export default useStyles;
