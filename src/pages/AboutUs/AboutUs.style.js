import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  supportWrapper: {
    padding: "0rem 20rem",
    [theme.breakpoints.down("1200")]: {
      padding: "0 7rem",
    },
    [theme.breakpoints.down("769")]: {
      padding: "0 2rem",
    },
  },
  aboutTitle: {
    color: "black !important",
    fontSize: "2.2rem",
  },
  description: {
    paddingRight: "2rem",
    textAlign: "justify",
    color: "#173050",
    fontSize: "1.6rem",
    lineHeight: "28px",
    [theme.breakpoints.down(769)]: {
      paddingRight: "0rem",
    },
  },
  meetingImage: {
    width: "53rem",
    "& img": {
      paddingTop: "0.7rem",
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    [theme.breakpoints.down("1200")]: {
      width: "100%",
    },
    [theme.breakpoints.down(769)]: {
      width: "100%",
      paddingTop: "2rem",
    },
  },
  historyTitle: {
    display: "flex",
    color: "black !important",
    fontSize: "2.2rem",
  },
  borderLine: {
    height: "26.5rem",
    marginTop: "0.7rem",
    paddingLeft: "16rem",
    borderRight: "0.7rem solid #8bc34a",
    [theme.breakpoints.down("1200")]: {
      paddingLeft: "8rem",
    },
    [theme.breakpoints.down(769)]: {
      display: "none",
    },
  },
  historyDescription: {
    textAlign: "justify",
    color: "#173050",
    fontSize: "1.6rem",
    lineHeight: "28px",
    [theme.breakpoints.down(769)]: {
      paddingTop: "1rem",
    },
  },
  bdtaskMembersImage:{
    width: "100%",
    "& img": {
      paddingTop: "0.7rem",
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  }
}));

export default useStyles;
