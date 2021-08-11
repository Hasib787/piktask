import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  catItemWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    width: "100%",
  },
  catItem: {
    margin: "0 5px",
  },
  catImage: {
    cursor: "all-scroll",
    width: "100%",
    height: "240px",
    objectFit: "cover",
  },

  catName: {
    zIndex: "99",
    backgroundColor: "#ffffff",
    color: "#333333",
    fontSize: "1.9rem",
    height: "50px",
    width: "100%",
    borderRadius: 0,
  },
}));

export default useStyles;
