import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    pagination: {
        display: "flex",
        justifyContent: "flex-end",
    
        "& button": {
          fontSize: "1.4rem",
          fontWeight: 500,
          borderColor: "#0088f2",
          color: "#0088f2",
        },
        "& button:hover": {
          backgroundColor: "#0088f2",
          color: "#fff",
        },
        "& button svg": {
          fontSize: "2.5rem",
        },
        "& .Mui-selected ": {
          backgroundColor: "#0088f2",
          color: "#fff",
          borderColor: "#0088f2",
        },
        "& .Mui-selected:hover ": {
          backgroundColor: "#0773c5",
        },
      },
}));
export default useStyles;