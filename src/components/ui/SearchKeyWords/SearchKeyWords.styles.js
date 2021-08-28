import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    popularSearch: {
      padding: "2rem 0rem",
      textAlign: "center",
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",

      "& a":{
        textDecoration: "none",
      },

      [theme.breakpoints.down(480)]: {
        marginBottom: "1.5rem",
      },
    },
    searchTitle: {
      color: "#D0D0D0",
      fontSize: 16,
      margin: "0px 5px",
      fontWeight: 400,

      "@media (max-width: 1024px)": {
        marginBottom: "1.5rem",
      },
      "@media (max-width: 768px)": {
        marginBottom: "1rem",
      },
      [theme.breakpoints.down(480)]: {
        marginBottom: "0.5rem",
      },
    },

}));

export default useStyles;