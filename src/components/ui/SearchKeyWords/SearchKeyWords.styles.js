import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    popularSearch: {
      marginTop: "2.2rem",
      textAlign: "center",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      "& a":{
        textDecoration: "none",
      }
    },
    searchTitle: {
      color: "#D0D0D0",
      fontSize: 16,
      margin: "0px 5px",
      fontWeight: 400,
      marginBottom: "3.5rem",
    },
}));

export default useStyles;