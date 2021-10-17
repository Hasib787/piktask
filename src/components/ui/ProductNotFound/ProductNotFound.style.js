import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    notFoundWrap:{
        height: 175,
        textAlign:"center",
        padding:"37px 0",
        borderRadius: "4px",
        backgroundColor: "white",
    },
    title:{
        fontSize:"2rem",
        fontWeight: 500,
    },
    helperText:{
        margin: "2px",
        fontSize: "1.5rem",
        "& span":{
            color: "red",
        },
    },
    headingButton: {
        ...theme.typography.button,
        backgroundColor: "#0088f2",
        margin: "7px",
        padding: "0.5rem 2.2rem",
        fontSize: "1.5rem",
        fontWeight: 500,
        color: "#fff",
        transition: "all 0.5s linear",
    
        "&:hover": {
          borderColor: "#0773c5",
          backgroundColor: "#0773c5",
        },
      },
}));
export default useStyles;