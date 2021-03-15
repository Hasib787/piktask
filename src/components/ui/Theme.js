import { createMuiTheme } from '@material-ui/core/styles';

const dark = "#143340";
const lightDark = "#1B3F4E";
const green = "#117A00";
const lightBlack = "#14323F";

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 480,
            sm: 960,
            md: 1280,
            lg: 1688,
        }
    },
    overrides: {
        MuiTypography: {
            body1: {
                margin: 0
            }
        }
    },
    palette: {
        primary: {
            main: dark,
            light: green,
        },
        secondary: {
            main: green,
            light: dark,
        },
    },
    typography: {
        fontFamily: "'Roboto', sans-serif",
        fontSize: 16,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        h1: {
            fontWeight: 500,
            fontSize: "5rem",
            color: dark,
        },
        h2: {
            fontWeight: 500,
            fontSize: "4rem",
            lineHeight: 1.5,
            color: dark,
        },
        h3: {
            fontWeight: 500,
            fontSize: "2.5rem",
            color: dark,
        },
        body1: {
            fontSize: "1.6rem",
            color: dark,
            fontWeight: 400,
        },
        button: {
            color: "#fff",
            fontWeight: 400,
            fontFamily: "'Roboto', sans-serif",
            textTransform: "capitalize",
            fontSize: "1.5rem",
            borderRadius: "3rem",
            opacity: 1,
        },
        secondary: {
            green,
        },
        colors: {
            lightDarkColor: lightDark,
            lightBlackColor: lightBlack,
        },
        darkButton: {
            background: lightDark,

            "&:hover": {
                background: green
            }
        },
    },

});

export default theme;