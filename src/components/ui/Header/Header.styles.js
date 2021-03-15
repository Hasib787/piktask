import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
    headerTop: {
        background: "#143340",
        height: 80
    },
    topBarContainer: {
        height: "100%"
    },
    toolBarContainer: {
        marginLeft: "auto",
        display: "flex",
        justifyContent: "flex-end",
        height: "100%",

        "@media (max-width: 768px)": {
            justifyContent: "flex-end",
            "& a": {
                paddingRight: "2rem",
                paddingLeft: "2rem",
                marginLeft: "0.5rem",
            }
        },
        "@media (max-width: 480px)": {
            "& a": {
                paddingRight: ".6rem",
                paddingLeft: ".6rem",
                marginLeft: "0rem",
                fontSize: "1.4rem",
                minWidth: "fit-content",
            }

        }
    },
    topBarLink: {
        opacity: 1,
        color: "#FFFFFF",
        marginLeft: "1rem"
    },
    
    signupBtn: {
        ...theme.typography.button,
        ...theme.typography.darkButton,
        marginLeft: "1rem",
        padding: ".8rem 3.4rem",
        textTransform: "uppercase",

        "@media (max-width: 480px)": {
            padding: ".8rem 1.5rem !important",

        }
    },
    userAvatarArea: {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
    },
    avatar: {
        fontSize: "4.8rem",
        width: "4.8rem",
        height: "4.8rem",
        borderRadius: "100%",
        position: "relative",
        right: "-0.6rem",
        color: "#FB5252",
    }, 
    arrowDown: {
        fontSize: "5rem",
        color: "#244e5f"
    },

    // Mobile Menu
    paper: {
        backgroundColor: theme.palette.primary.main,
    },
    menuWrapper: {
        width: "30rem",
        flexDirection: "column",
      },
      mobileMenuLogo: {
        "&:hover": {
          background: "transparent",
        },
      },
      mobileTabWrapper: {},
      navItems: {
        width: "100%",
    
        "& a": {
          color: theme.palette.common.white,
          textTransform: "uppercase",
          textDecoration: "none",
        },
      },
      selected: {
        background: "red",
      },
      mobileBtn: {
        ...theme.typography.button,
        justifyContent: "flex-start",
        width: "100%",
        paddingLeft: "1.8rem",
        alignItems: "center",
    
        "& img": {
          marginRight: "1rem",
        },
      },
}));

export default useStyles;