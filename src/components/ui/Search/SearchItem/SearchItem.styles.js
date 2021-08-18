import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  searchItemWrapper: {
    display: "flex",
    alignItems: "flex-start",
    textDecoration: "none",
    color: "#666",
    justifyContent: "space-between",
    padding: "1rem",
    transition: "box-shadow 0.3s linear",

    "&:hover": {
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    },

    "&:focus-visible": {
      border: "1px solid",
      borderColor: "#444",
      outlineOffset: "1px solid #666",
    },

    "& h2": {
      fontSize: 14,
      fontWeight: 400,
    },
  },

  searchLeft: {
    display: "flex",
  },
  thumbnail: {
    width: 60,
    height: "100%",
    marginRight: "1.2rem",

    "& img": {
      width: "100%",
    },
  },

  itemIcons: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

export default useStyles;
