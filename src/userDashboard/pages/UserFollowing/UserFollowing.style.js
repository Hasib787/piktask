import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardItem: {
    "@media (max-width: 576px)": {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
  followerProfileContent: {
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 10%)",
  },
  followerProfile: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #ddd",
    paddingBottom: "2rem",
  },
  viewFollowerInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",

    "@media (max-width: 595px)": {
      flexDirection: "column",
    },
  },
  followerImage: {
    marginRight: "3rem",
    height: "9rem",
    width: "9rem",
    marginTop: "1rem",

    "& img": {
      width: "100%",
      borderRadius: "100%",
      padding: "0.2rem",
      backgroundColor: "#707070",
      objectFit: "cover"
    },
    "@media (max-width: 595px)": {
      width: "7rem",
      height: "7rem",
      marginTop: "2rem",
      marginBottom: "2rem",
      marginRight: 0,

      "& img": {
        padding: "0.4rem",
      },
    },
  },
  followerInfo: {
    color: "#000",

    "@media (max-width: 595px)": {
      width: "auto",
      textAlign: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  followerName: {
    color: "#575757",
    fontSize: "2rem",
    marginBottom: ".8rem",
    marginTop: "2rem",

    [theme.breakpoints.down(480)]: {
      marginTop: "0",
    },
  },
  followerDetails: {
    display: "flex",
    alignItems: "center",
    marginBottom: ".4rem",
  },
  followerInfoItem: {
    fontSize: "1.4rem",
    marginRight: "2.5rem",
    paddingRight: "2.5rem",
    position: "relative",
    color: "#333333",

    "&:before": {
      content: '""',
      position: "absolute",
      backgroundColor: "#ddd",
      width: ".16rem",
      height: "3.5rem",
      top: "0.5rem",
      right: 0,
    },
    "&:last-child:before": {
      backgroundColor: "transparent",
      width: 0,
    },
    "& span": {
      fontSize: "1.8rem",
      display: "block",
      fontWeight: 700,
      color: "#575757",
    },
    "@media (max-width: 576px)": {
      marginRight: "1.5rem",
      paddingRight: "1.5rem",
    },
  },
  viewMoreBtn: {
    padding: "0.6rem 1.5rem",
    backgroundColor: "#0088f2",
    color: "#fff",
    marginTop: "3.5rem",
    border: ".2rem solid",
    borderColor: "#0088f2",
    transition: "all 0.3s linear",
    "&:hover": {
      backgroundColor: "#0773c5",
      borderColor: "#0773c5",
      color: "#fff",
    },
  },
  followerResources: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  followerFiles: {
    height: "16rem",
    width: "26rem",
    margin: "0.2rem",

    "& img": {
      height: "100%",
      width: "100%",
      objectFit: "cover"
    },
  },
}));

export default useStyles;
