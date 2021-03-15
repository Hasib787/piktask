import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    adminRoot: {
        display: 'flex',
        marginTop: "8rem",
    },
    content: {
        // flexGrow: 1,
        // padding: theme.spacing(2),
        padding: 0,
        // width: "calc(100vw - 315px)",
        width: "100%",
        // marginLeft: "2rem",
        // marginRight: "2rem",
        // marginTop: "2rem",
    },
    noItemsFound: {
        marginLeft: "1.5rem",
    },
    settingsHero: {
        backgroundColor: "#114960",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "30rem",
        marginBottom: "2.5rem",
        "& h1": {
            color: theme.palette.common.white,
            fontSize: "2.8rem",
            fontWeight: 500,
        }
    },

    headingWrapper: {
        marginBottom: "3.5rem",
    },

    // Form
    seperator: {
        borderWidth: 0,
        height: ".1rem",
        backgroundColor: "rgb(112 112 112 / 38%)",
        width: "100%",
    },
    // formWrapper: {
    //     padding: " 1px 3rem",
    //     // width: "calc(100vw - 315px)",
    // },
    // formInnerWrapper: {
    //     marginLeft: "2rem",
    //     marginRight: "2rem",
    //     marginTop: "2rem",
    //     backgroundColor: theme.palette.common.white,

    // },
    settingsFormTitle: {
        color: "#114960",
        fontWeight: 700,
        padding: "3rem",
    },
    settingsFormWrapper: {
        padding: "3rem",
    },
    cardRoot: {
        marginBottom: "2.5rem",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    },
    cardWrapper: {
        padding: ".6rem 2rem 2rem",
        marginBottom: "2rem"
    },
    srOnly: {
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        border: 0,
    },
    fieldsGroup: {
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        marginBottom: "2rem",

        "& legend": {
            display: "none",
            width: 0,
            height: 0,
        }
    },
    fullWidth: {
        marginRight: "1rem",
        marginLeft: "1rem",
    },
    inputField: {
        "& label": {
            color: "#114960",
            fontSize: "1.6rem"
        },
        "& .MuiInputLabel-shrink": {
            transform: "translate(14px, 2px) scale(0.90)",
            backgroundColor: "transparent"
        },
    },
    inputImage: {
        position: "relative",
        "& img": {
            position: "absolute",
            right: "1rem",
            top: 0,
        },
    },
    cardIcon: {
        width: "18rem",
    },
    cvcIcon: {
        width: "6rem",
    },

    // Portfolio Links
    portfolioLink: {
        position: "relative",
        paddingLeft: "8rem",

        "& fieldset": {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderLeftColor: "transparent",
        },
    },
    portfolioIconWrapper: {
        position: "absolute",
        left: 0,
        top: "-.5rem",
        width: "8rem",
        height: "6.1rem",
        display: "flex",
        justifyContent: "center",
        border: "1px solid rgba(0, 0, 0, 0.23)",

        "& img": {
            width: "3rem",
            height: "auto",
        }
    },

    buttonGroup: {
        display: "flex",
        justifyContent: "flex-end",
    },
    settingsBtn: {
        // ...theme.typography.button,
        padding: "1.4rem 5rem",
        color: theme.palette.common.white,
        fontSize: "1.8rem",
        borderRadius: ".5rem",
    },
    restoreBtn: {
        backgroundColor: "#ACB0C8",
        marginRight: "2rem",
        "&:hover": {
            backgroundColor: "rgb(149 154 185)",
        }
    },
    saveBtn: {
        backgroundColor: "#1B3F4E",
        "&:hover": {
            backgroundColor: "rgb(45 87 105)",
        }
    },
    selectArea: {
        "& svg": {        
            width: "3rem",
            fontSize: "4rem",
            top: "5px",
        },
    }

}));

export default useStyles;