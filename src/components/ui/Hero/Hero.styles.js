import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroWrapper: {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    position: "relative",
    "&::before": {
      background: "rgba(0, 28, 48, 0.6)",
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
  },
  contentWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "85rem",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
  },
  buttonGroups: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
    },
  },
  popularSearchKeyword: {
    ...theme.typography.button,
    background: "#1B3F4E",
    border: `1px solid ${theme.typography.secondary.green}`,
    padding: ".6rem 3.5rem",
    fontWeight: 300,
    [theme.breakpoints.down("sm")]: {
      marginRight: "2rem",
      marginBottom: "2rem",
      width: "auto",
      height: "3.5rem",
    },
  },
  heroButtonWrapper: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    [theme.breakpoints.down("480")]: {
      paddingBottom: "3rem",
    },
  },
  popularButton: {
    marginRight: "1rem",
    border: "2px solid #fff",
    padding: "0.4rem 2.5rem",
    fontSize: "14px",
    fontWeight: 500,
    color: "#fff",
    borderRadius: 30,
    transition: "all 0.3s linear",
    "&.active": {
      backgroundColor: "#0088f2",
      border: "2px solid #0088f2",
    },
    "&:hover": {
      backgroundColor: "#0088f2",
      color: "#fff",
    },
  },
  recentButton: {
    border: "2px solid #fff",
    padding: "0.4rem 2.5rem",
    fontSize: "14px",
    fontWeight: 500,
    color: "#fff",
    borderRadius: 30,
    transition: "all 0.3s linear",
    "&.active": {
      backgroundColor: "#0088f2",
      border: "2px solid #0088f2",
    },
    "&:hover": {
      backgroundColor: "#0088f2",
      color: "#fff",
    },
  },

  selected: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  
  joinNowBtn: {
    padding: "0.5rem 2.5rem",
    fontSize: "14px",
    fontWeight: 500,
    color: "#fff",
    borderRadius: 30,
    transition: "all 0.3s linear",
    backgroundColor: "#0088f2",
    border: "2px solid #0088f2",

    "&:hover": {
      backgroundColor: "#0773c5",
      borderColor: "#0773c5",
    },
  },

  // Contributor 
  contributorHero: {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // display: "flex",
    // alignItems: "center",
    position: "relative",
    "&::before": {
      background: "rgba(0, 28, 48, 0.6)",
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
  },
  contributorContent: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "60rem",
    margin: "0 auto",
    paddingTop: "11rem",
    position: "relative",
    zIndex: 1,

    "& h2": {
      color: "#fff",
      textAlign: "center",
      marginBottom: "1rem",
    },
    "& h1": {
      color: "#fff",
      textAlign: "center",
      marginBottom: "2rem",
    }
  },
  contributorMenu: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contributorLogo: {
    "& img": {
      width: "15rem",
    },
  },
  contributorLogin: {
    ...theme.typography.button,
    fontSize: "1.4rem",
    padding: "0.3rem 2rem",
    borderColor: "#0088f2",
    marginLeft: "1rem",
    marginRight: "1rem",
    border: ".2rem solid #0088f2",
    transition: "all 0.3s linear",
    "&:hover": {
      backgroundColor: "#0088f2",
      borderColor: "#0088f2",
    },
    "@media (max-width: 1024px)": {
      paddingRight: "1rem",
      paddingLeft: "1rem",
      fontSize: "1.4rem",
    },
  },
  userAvatarArea: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    fontSize: "4.8rem",
    width: "3.6rem",
    height: "3.6rem",
    borderRadius: "100%",
    position: "relative",
    right: "-0.6rem",
    color: "#FB5252",
  },
  arrowDown: {
    fontSize: "3.5rem",
    color: "#f1f1f1",
    cursor: "pointer",
  },
}));

export default useStyles;
