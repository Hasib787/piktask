import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    guidLineWrapper: {
        display: "flex",
    },
    guidLineImage: {
        width: "65rem",
        height: "50rem",
        padding: "2rem",
        backgroundColor: "#ddd",
        marginRight: "5rem",

        "& img": {
            width: "100%",
            height: "100%",
        }
    }
}));

export default useStyles;