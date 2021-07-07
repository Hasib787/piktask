import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  containerWrapper: {
    marginTop: "4.5rem",
  },
  itemDetailsContainer: {
    alignItems: "center",
  },
  productColumn: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
  imageWrapper: {
    backgroundColor: theme.palette.common.white,
  },
  image: {
    width: "100%",
    height: "52.2rem",
    padding: "4rem 3rem 0rem",

    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    borderTop: `1px solid #D4DADC`,
    marginTop: "2.5rem",
    padding: "1.5rem 3rem",
  },
  button: {
    ...theme.typography.button,
    fontSize: "1.5rem",
    padding: ".6rem 3.5rem",
    backgroundColor: "#F1F1F2",
    fontWeight: 500,
    color: "#14323F",
    marginLeft: "1.5rem",
    "&:hover": {
      backgroundColor: "#F0F7EF",
    },

    [theme.breakpoints.down("xs")]: {
      marginBottom: "1rem",
    },
  },
  buttonIcon: {
    width: "1.3rem",
    padding: 0,
    marginRight: "0.8rem",
  },
  title: {
    paddingRight: "2rem",
    fontSize: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.8rem",
      lineHeight: 1.3,
    },
  },
  description: {
    paddingRight: "13rem",
    marginTop: "1.5rem",
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
      paddingRight: 0,
      marginBottom: "1rem",
    },
  },
  subHeading: {
    fontSize: "2rem",
    "& span": {
      color: theme.palette.secondary.main,
      display: "block",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
    },
  },
  detailsContainer: {
    backgroundColor: theme.palette.common.white,
    padding: "2.5rem",
    width: "55rem",
    marginTop: "2.8rem",
    marginBottom: "3rem",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    "@media (max-width: 576px)": {
      display: "block",
    },
  },
  singleItem: {
    marginBottom: "3rem",
  },
  gridItem: {
    width: "100%",
    "&:last-child": {
      marginBottom: 0,
    },
  },
  authorArea: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    "@media (max-width: 768px)": {
      display: "block",
    },
  },
  authorProfile: {
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    marginRight: "3rem",
    "@media (max-width: 768px)": {
      marginBottom: "2rem",
    },
  },
  authorImg: {
    width: "7rem",
    height: "7rem",
    borderRadius: "3rem",
    marginRight: "1.4rem",
    objectFit: "cover",
  },
  profileName: {
    color: theme.palette.secondary.main,
    fontSize: "2.6rem",
    fontWeight: 400,
  },
  resourceInfo: {
    fontSize: "1.7rem",
    fontWeight: 400,
  },
  authorBtn: {
    ...theme.typography.button,
    marginRight: "2rem",
    padding: "1rem 5.5rem",

    [theme.breakpoints.down("sm")]: {
      paddingRight: "3rem",
      paddingLeft: "3rem",
    },
  },
  followBtn: {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  unFollowBtn: {
    // backgroundColor: theme.palette.primary.main,
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      // backgroundColor: theme.palette.secondary.main,
    },
  },
  downloadBtn: {
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    "& img": {
      marginRight: "1.5rem",
      width: "1.2rem",
    },
  },
}));

export default useStyles;
