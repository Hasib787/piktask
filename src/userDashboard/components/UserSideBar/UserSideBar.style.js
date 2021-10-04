import { makeStyles } from "@material-ui/core";
import userBackground from "../../../assets/user/user-background.png";

const useStyles = makeStyles((theme) => ({
  userProfile: {
    padding: "0",
    marginBottom: "1rem",
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
    padding: "4.5rem",
  },
  profileImage: {
    "& img": {
      height: "12rem",
      Width: "12rem",
      borderRadius: "50%",
      margin: "0 auto",
      display: "flex",
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
    marginTop: "1rem",
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
   "& div div":{
    width: "50rem",
    [theme.breakpoints.down(480)] :{
      width: "100%",
    },
   },
  },
  closeAccountTitle: {
    "& h2":{
      fontSize: "1.8rem !important",
    },
  },
  keepAccountBtn:{
    color:"white",
    backgroundColor:theme.palette.primary.light,
    transition:"all 0.3s linier",
    "&:hover":{
      backgroundColor: "#0773c5",
    }
  },
  closeAccountBtn:{
    color:"white",
    backgroundColor:"#f91c0c",
    transition:"all 0.3s linier",
    "&:hover":{
      backgroundColor:"#b71c1c",
    }
  },
}));

export default useStyles;
