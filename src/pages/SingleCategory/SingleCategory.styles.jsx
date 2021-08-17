import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  containerWrapper: {
    marginTop: "4.5rem",
  },
  productColumn: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
  imageWrapper: {
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down(480)]: {
      backgroundColor: "transparent",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    padding: "2rem 2rem",

    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
    [theme.breakpoints.down(480)]: {
      padding: "0",
    },
  },
  buttons: {
    display: "flex",
    marginTop: "1.5rem",
    alignItems: "center",
    [theme.breakpoints.up(1279)]: {
      display: "flex",
    },
    [theme.breakpoints.down(625)]: {
      display: "flex",
    },
  },
  button: {
    ...theme.typography.button,
    fontSize: "1.3rem",
    padding: ".6rem 2.5rem",
    fontWeight: 500,
    border: "1px solid #D9DBE1",
    color: "#14323F",
    marginLeft: "1.5rem",
    "&:hover": {
      backgroundColor: "#F0F7EF",
    },
    [theme.breakpoints.up(1279)]: {
      marginLeft: ".8rem",
    },
    [theme.breakpoints.down(480)]: {
      padding: ".6rem 1.2rem",
      fontSize: "1.1rem",
      marginBottom: "0rem",
      marginLeft: "1rem",
    },
  },
  buttonIcon: {
    width: "1.3rem",
    padding: 0,
    marginRight: "0.8rem",
  },
  title: {
    paddingRight: "2rem",
    fontSize: "2.2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.8rem",
      lineHeight: 1.3,
    },
    [theme.breakpoints.down(480)]: {
      fontSize: "2.4rem",
    },
  },
  creationDate: {
    fontSize: "1.5rem",
    marginRight: 10,
    [theme.breakpoints.down(480)]: {
      fontSize: "1.3rem",
    },
  },
  detailsContainer: {
    width: "55rem",
    marginTop: "2rem",
    [theme.breakpoints.down(768)]: {
      width: "55rem",
    },
    [theme.breakpoints.down(480)]: {
      width: "100%",
    },
  },
  singleItem: {
    marginBottom: "1.3rem",
    paddingRight: "1.2rem",

    "& p": {
      fontSize: "1.4rem",

      [theme.breakpoints.down(480)]: {
        fontSize: "1.3rem",
      },
    },
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
  },
  authorProfile: {
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    marginRight: "5rem",
    "@media (max-width: 768px)": {
      marginBottom: "2rem",
    },
    [theme.breakpoints.down(480)]: {
      marginRight: "4rem",
    },
  },
  authorImg: {
    width: "4.5rem",
    height: "4.5rem",
    borderRadius: "50%",
    marginRight: "1.4rem",
    objectFit: "cover",
    color: "#000",

    "@media (max-width: 768px)": {
      width: "5.8rem",
      height: "5.8rem",
    },
    [theme.breakpoints.down(480)]: {
      width: "4.5rem",
      height: "4.5rem",
    },
  },
  profileName: {
    color: theme.palette.secondary.main,
    fontSize: "1.6rem",
    fontWeight: 400,
    textDecoration: "none",
    // [theme.breakpoints.down(480)]: {
    //   fontSize: "1rem",
    // },
  },
  resourceInfo: {
    fontSize: "1.4rem",
    fontWeight: 400,
    // [theme.breakpoints.down(480)]: {
    //   fontSize: "1.4rem",
    // },
  },
  authorBtn: {
    ...theme.typography.button,
    marginRight: "2rem",
    padding: "0.5rem 3.5rem",
    fontSize: "1.5rem",

    [theme.breakpoints.down("sm")]: {
      padding: "0.7rem 5rem",
      marginBottom: "2rem",
    },
    [theme.breakpoints.down(480)]: {
      padding: ".6rem 3.5rem",
      fontSize: "1.4rem",
      marginBottom: "2rem",
      marginRight: "0rem",
    },
  },
  followBtn: {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  unFollowBtn: {
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  premiumInfo: {
    background: "#E1E3EB",
    padding: "1rem 2rem 2rem",
    width: "55rem",
    marginTop: "2rem",
    borderRadius: "1rem",
    "& h4": {
      marginBottom: "1rem",
      fontSize: "1.8rem",
      display: "flex",
      alignItems: "center",

      [theme.breakpoints.down(480)]: {
        fontSize: "1.5rem",
      },
    },
    "& p": {
      marginBottom: ".6rem",
      fontSize: "1.4rem",
      // [theme.breakpoints.down(480)]: {
      //   fontSize: "1.4rem",
      // },
    },
    [theme.breakpoints.down(480)]: {
      width: "100%",
      padding: "1rem",
    },
  },
  premiumViewBtn: {
    background: "#EDAF41",
    color: "#fff",
    padding: ".5rem 2rem",
    marginLeft: "2rem",
    transition: "all 0.3s linear",
    "&:hover": {
      background: "#EDAF41",
    },
    [theme.breakpoints.down(480)]: {
      padding: ".3rem 1.5rem",
      marginLeft: "2rem",
    },
  },
  licenseBtn: {
    background: "#CAD3D2",
    color: "#117A00",
    padding: ".5rem 2rem",
    marginLeft: "16rem",
    transition: "all 0.3s linear",
    [theme.breakpoints.down(480)]: {
      padding: "0.3rem 1rem",
      marginLeft: ".8rem",
    },
  },
  moreInfoBtn: {
    color: "#117A00",
    textDecoration: "none",
    fontSize: "1.6rem",
  },
  buttonGroup: {
    marginTop: 25,
    display: "flex",
  },
  downloadWrapper: {
    position: "relative",
  },
  downloadBtn: {
    color: "#fff",
    fontSize: 17,
    padding: "1rem 10rem",
    marginRight: "4rem",
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    "& img": {
      marginRight: "1.5rem",
      width: "1.2rem",
    },
    "@media (max-width: 768px)": {
      fontSize: 16,
      padding: "0.8rem 9rem",
      marginRight: "2.5rem",
    },
    [theme.breakpoints.down(480)]: {
      fontSize: 16,
      padding: "0.4rem 5.1rem",
      marginRight: "2.5rem",
    },
  },
  likeBtn: {
    padding: "1rem 1.5rem",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
    "& img": {
      width: "2.7rem",
    },

    [theme.breakpoints.down(480)]: {
      padding: "0.4rem 1.5rem",
    },
  },
  activeLikeBtn: {
    padding: "1rem 1.5rem",
    backgroundColor: theme.palette.secondary.main,
    "& img": {
      width: "2.7rem",
    },

    [theme.breakpoints.down(480)]: {
      padding: "0.4rem 1.5rem",
    },
  },
  downloadedImage: {
    position: "absolute",
    top: "-15px",
    right: "25px",
    color: "#117A00",
    fontSize: "1.2rem",
    padding: ".3rem 1.2rem",
    borderRadius: "3rem",
    background: "#fff",
    border: "2px solid #117A00",
    "@media (max-width: 768px)": {
      right: "12px",
    },
    [theme.breakpoints.down(480)]: {
      padding: ".2rem 1rem",
      right: "12px",
    },
  },
  productItem: {
    "@media (max-width: 576px)": {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
}));

export default useStyles;
