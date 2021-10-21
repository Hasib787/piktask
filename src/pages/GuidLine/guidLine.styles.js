import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    guidLineMenu: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    guidLineWrapper: {
        padding: "0rem 20rem",
        [theme.breakpoints.down(1199)]: {
            padding: "0rem 1rem",
        },
    },
    guidLineImageWrapper: {
        display: "flex",
        [theme.breakpoints.down(577)]: {
            flexDirection: "column",
        }
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
            margin: "1rem 0",
        }
    },
    guidLineContent: {
        "& p": {
            lineHeight: "4rem",
            textAlign: "justify",
            [theme.breakpoints.down(769)]: {
                lineHeight: "3rem",
            },
        },

        "& span": {
            fontWeight: "500", 
            fontSize: "1.5rem"
        }
    },
}));

export default useStyles;