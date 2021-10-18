import { makeStyles } from "@material-ui/core";
import userBackground from "../../../assets/user/user-background.png";

const useStyles = makeStyles((theme) => ({
  userProfile: {
    padding: "0",
    marginBottom: "1.6rem",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 10%)",
    position: "relative",
    "&::before": {
      backgroundImage: `url(${userBackground})`,
      backgroundRepeat: "no-repeat",
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
  },
  userProfileContent: {
    paddingTop: "4rem",
    paddingBottom: "4rem",
    position: "relative",
  },
  profileImage: {
    position: "relative",
    overflow: "hidden",
    "& img": {
      height: "12rem",
      display: "flex",
      Width: "12rem",
      borderRadius: "50%",
      margin: "0 auto",
      padding: "0.2rem",
      boxShadow: "0px 0px 5px #ddd",
    },
    "&:hover": {
      "& $avatarOverlay": {
        opacity: 1,
        visibility: "visible",
        transition: "all 0.3s linear",
        cursor: "pointer",
      },
    },
  },
  avatarOverlay: {
    bottom: "0",
    left: "50%",
    position: "absolute",
    transform: "translateX(-50%)",
    opacity: 0,
    visibility: "hidden",
  },
  bgOverlay: {
    height: "6rem",
    width: "12rem",
    padding: "0.2rem",
    borderBottomRightRadius: "90px",
    borderBottomLeftRadius: "90px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    overflow: "hidden",
  },
  uploadIcon: {
    fontSize: "2.5rem",
    color: "#fff",
    cursor: "pointer",
  },
  uploadButton: {
    color: "#fff",
    border: "0.5px solid #0088f2",
    backgroundColor: "#0088f2",
    marginTop: "1rem",
    transition: "all 0.3s linear",
    "&:hover": {
      backgroundColor: "#0773c5",
    },
  },
  profileInfo: {
    textAlign: "center",
    marginTop: "1rem",

    "& h2": {
      fontSize: "2.5rem",
      fontWeight: "700",
    },
    "& p": {
      fontSize: "1.4rem",
      marginTop: "0.2rem",
    },
  },
  socialMedia: {
    textAlign: "center",
    marginTop: "1.5rem",
    cursor: "pointer",
    "& a": {
      padding: "0rem",
      minWidth: "0rem",
      transition: "all 0.3s linear",
      "&:hover": {
        transform: "translateY(-0.7rem)",
      },
    },
  },
  facebookIcon: {
    width: "0.8rem",
    height: "auto",
    cursor: "pointer",
  },
  twitterIcon: {
    width: "1.8rem",
    height: "auto",
    marginLeft: "1.2rem",
    cursor: "pointer",
  },
  linkedinIcon: {
    width: "1.7rem",
    height: "auto",
    marginLeft: "1.2rem",
    cursor: "pointer",
  },
  instagramIcon: {
    width: "1.6rem",
    height: "auto",
    marginBottom: "-0.1rem",
    marginLeft: "1.2rem",
    cursor: "pointer",
  },
  shutterstockIcon: {
    width: "1.4rem",
    height: "auto",
    marginLeft: "1.2rem",
    cursor: "pointer",
  },
  freepikIcon: {
    width: "1.5rem",
    height: "auto",
    marginLeft: "1.2rem",
    cursor: "pointer",
  },
  behanceIcon: {
    width: "2rem",
    height: "auto",
    marginLeft: "1.2rem",
    cursor: "pointer",
  },
  dribbleIcon: {
    width: "1.6rem",
    height: "auto",
    marginBottom: "-0.1rem",
    marginLeft: "1.2rem",
    cursor: "pointer",
  },
  userMenuList: {
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 10%)",
  },
  userMenuItem: {
    padding: "1rem 1rem",
    color: "#676767",
    borderRadius: "1rem",
    marginBottom: "1.2rem",
    cursor: "pointer",
    transition: "all 0.3s linear",
    "&:hover": {
      backgroundColor: "#F4F7FF",
      color: "#4A7AFF",
    },
    "& svg": {
      fontSize: "2.2rem",
    },
    "& span": {
      fontSize: "1.5rem",
      marginLeft: "1.5rem",
    },
  },
  selectedItem: {
    backgroundColor: "#F4F7FF !important",
    color: "#4A7AFF",
  },
  closedAccount: {
    marginTop: "1.6rem",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 10%)",
    cursor: "pointer",
    "& a": {
      textDecoration: "none",
    },
    "& p": {
      fontSize: "1.6rem",
      fontWeight: "400",
      color: "#E21313",
      textAlign: "center",
      marginBottom: "-0.3rem",
    },
  },
  closeAccountDialog: {
    "& div div": {
      maxWidth: "100%",
      [theme.breakpoints.down(480)]: {
        width: "100%",
      },
    },
  },
  closeAccountTitle: {
    "& h2": {
      fontSize: "1.8rem !important",
    },
  },
  closeAccountsTitle: {
    padding: "1rem 0rem",

    "& h2": {
      fontSize: "1.8rem !important",
      paddingLeft: "0rem",
    },
  },
  keepAccountBtn: {
    color: "white",
    backgroundColor: theme.palette.primary.light,
    transition: "all 0.3s linier",
    "&:hover": {
      backgroundColor: "#0773c5",
    },
  },
  closeAccountBtn: {
    color: "white",
    backgroundColor: "#f91c0c",
    transition: "all 0.3s linier",
    "&:hover": {
      backgroundColor: "#b71c1c",
    },
  },
}));

export default useStyles;
