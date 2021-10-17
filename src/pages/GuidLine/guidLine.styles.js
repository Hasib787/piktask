import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    guidLineMenu: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    guidLineWrapper: {
        padding: "0rem 20rem",
    },
    guidLineImageWrapper: {
        display: "flex",
    },
    guidLineImage: {
        width: "65rem",
        height: "20rem",
        margin: "1rem",

        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },

        [theme.breakpoints.down(769)]: {
            width: "100%",
            height: "100%",
        }
    },
    guidLineContent: {
        "& p": {
            lineHeight: "4rem",
        },

        "& span": {
            fontWeight: "500", 
            fontSize: "1.5rem"
        }
    },
}));

export default useStyles;