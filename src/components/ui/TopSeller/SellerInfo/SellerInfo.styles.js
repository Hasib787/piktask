import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sellerWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    width: "100%",
    backgroundColor: "#fff",
  },
  coverImage: {
    cursor: "pointer",
    width: "100%",
    height: "240px",
    objectFit: "cover",
  },
  sellerProfileImage: {
    height: "9rem",
    width: "9rem",
    margin: "0 auto",
    marginTop: "-5rem",
  },
  profileImage: {
    borderRadius: "100%",
    padding: "0.4rem",
    backgroundColor: "#fff",
    cursor: "pointer",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    color: "#000",
  },
  sellerInfo: {
    textAlign: "center",
    padding: "1.5rem 1rem",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 10%)",

    "& h2": {
      color: "#001c30",
      fontSize: "2rem",
      fontWeight: "700",
    },
  },
  resourceDetails: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: ".4rem",
    margin: "0 auto",
  },
  infoItem: {
    color: "#b4b4b4",
    testAlign: "center",
    fontSize: "1.3rem",
    marginRight: "2rem",
    paddingRight: "2rem",
    position: "relative",
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
      fontSize: "1.6rem",
      display: "block",
      fontWeight: 700,
      color: "#000",
    },
    "&:last-child": {
      marginRight: "0rem",
      paddingRight: "0rem",
    },
    "@media (max-width: 576px)": {
      marginRight: "1.5rem",
      paddingRight: "1.5rem",
    },
  },
}));

export default useStyles;
