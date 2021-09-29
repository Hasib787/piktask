import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  blogContainer: {
    padding: "0rem 15rem",
  },
  blogImageWrapper:{
    height: 400,
    boxShadow: "0px 0px 10px #ddd",

    "& img": {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
  },
  fieldWrapper: {
    marginBottom: "1.4rem",
    "& label": {
      marginBottom: "0.5rem",
    },
    "& label > span": {
      color: "red",
    },
  },
  formDescription: {
    position: 'relative',
    width: "100%",
    maxWidth: "100%",
    fontSize: "1.5rem",
    padding: "1rem",
    borderRadius: "5px",
    boxShadow: "0 8px 12px 3px rgb(0 0 0 / 6%)",
    // border: "0",
    borderColor: "#ddd",

    "& .MuiInputLabel-outlined.Mui-focused": {
      border: "5px solid",
      borderColor: 'yellow !important',
      color: "yellow",
    },

  },
  sentBtn: {
    padding: "0.8rem 3.5rem",
    border: "none",
    borderRadius: "10rem",
    fontSize: "1.4rem",
    cursor: "pointer",
    backgroundColor: "#0088f2",
    color: "white",
    transition: "all 0.3s linear",
    "&:hover": {
      backgroundColor: "#0773c5",
    },
    [theme.breakpoints.down(480)]: {
      width: "100%",
      marginLeft: "0%",
      fontSize: "14px",
      padding: "1rem 0.9rem",
      transform: "translateX(0%)",
    },
  },
  blogAuthorInfo: {
    color: "#000",

    "& h2": {
      lineHeight: "4rem",
      fontSize: "3rem",
    },

    "& p": {
      lineHeight: "3rem",
    },
  },
  blogContent: {
    "& p": {
      lineHeight: "3rem",
    },
  },
  shareSocialMedia: {
    display: "flex",
    justifyContent: "space-between",
  },
  postsWrapper: {
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "@media (max-width: 768)": {
      justifyContent: "flex-start",
    },
  },
}));

export default useStyles;
