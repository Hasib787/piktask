import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
    headerBottom: {
      "& > .MuiAppBar-colorPrimary": {
        background: "#143340",
        height: 80,
      },
    },

    logoWrapper: {
      width: 153,
      marginRight: "2rem",
      padding: 0,
      "&:hover": {
        background: "transparent",
      },
  
      "@media (max-width: 1024px)": {
        width: "12rem",
  
        "& img": {
          width: "100%",
        },
      },
    },
    logo: {
      width: "10.5rem",
      display: "block",
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