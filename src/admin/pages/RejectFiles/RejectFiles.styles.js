import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  adminRoot: {
    display: "flex",
    marginTop: "8rem",
  },
  content: {
    // flexGrow: 1,
    // padding: theme.spacing(2),
    padding: 0,
    width: "calc(100vw - 315px)",
    marginLeft: "2rem",
    marginRight: "2rem",
    marginTop: "2rem",
  },
  noItemsFound: {
    marginLeft: "1.5rem",
  },
  headingWrapepr: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "2rem",
    marginBottom: "4.5rem",
  },
  cardWrapper: {
    position: "relative",
    padding: "3.5rem 3rem 0",
    "& img": {
      width: "100%",
      borderRadius: theme.shape.borderRadius,
    },
    "& h3": {
      fontSize: "2rem",
      marginBottom: "1rem",
      lineHeight: "1.5",
      color: "#114960",
    },
    "& h6": {
      fontSize: "1.5rem",
      fontWeight: 500,
      color: "#FF0000",
    },
  },

  // Modal
  drawerRoot: {
    zIndex: "2 !important",
  },
  paper: {
    width: "60rem",
    top: "8rem",
    height: "calc(100vh - 8rem)",
    borderTop: "1px solid #ddd",
  },
  closeIcon: {
    cursor: "pointer",
    fontSize: "3.5rem",
    color: "#B7B7B7",
    "&:hover": {
      color: "#FB5252",
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
    backgroundColor: "#117A00",
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
