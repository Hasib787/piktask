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
  },
  image: {
    width: "100%",
    height: "100%",
    padding: "2rem 2rem",

    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  buttons: {
    display: "flex",
    // justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "2.5rem",
    // padding: "1.5rem 3rem",

    [theme.breakpoints.up(1279)]: {
      display: "flex",
    },

    [theme.breakpoints.down(625)]: {
      display: "flex",
    },
    
    [theme.breakpoints.down(480)]: {
      justifyContent: "center",
      flexDirection: "column",
    },
  },
  button: {
    ...theme.typography.button,
    fontSize: "1.5rem",
    padding: ".6rem 3.5rem",
    // backgroundColor: "#F1F1F2",
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

    [theme.breakpoints.down(653)]: {
      marginLeft: "1rem",
      padding: ".6rem 1.5rem",
    },
    
    [theme.breakpoints.down(480)]: {
      padding: ".6rem 1.2rem",
      fontSize: "1.4rem",
      marginBottom: "1rem",
      marginLeft: "1rem",
      flexDirection: "column",
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
  creationDate: {
    fontSize: "2rem",
    marginRight: 10,
  },
  description: {
    paddingRight: "13rem",
    marginTop: "1.5rem",
    // marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
      paddingRight: 0,
      marginBottom: "1rem",
    },
  },
  // subHeading: {
  //   fontSize: "2rem",
  //   "& span": {
  //     color: theme.palette.secondary.main,
  //     display: "block",
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     fontSize: "1.6rem",
  //   },
  // },
  detailsContainer: {
    width: "55rem",
    marginTop: "2rem",
    // marginBottom: "3rem",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    "@media (max-width: 576px)": {
      display: "block",
    },
  },
  singleItem: {
    marginBottom: "2rem",
    "& p": {
      fontSize: 16,
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
    flexWrap: "wrap",
    "@media (max-width: 768px)": {
      display: "block",
    },
  },
  authorProfile: {
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    marginRight: "5rem",
    "@media (max-width: 768px)": {
      marginBottom: "2rem",
    },
  },
  authorImg: {
    width: "6.5rem",
    height: "6.5rem",
    borderRadius: "50%",
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
    fontSize: 17,
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
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  premiumInfo: {
    background: "#E1E3EB",
    padding: "2rem",
    width: "55rem",
    marginTop: "2rem",

    "& h4": {
      marginBottom: "1rem",
      fontSize: "2rem",
    },
    "& p": {
      marginBottom: ".6rem",
      fontSize: "1.6rem",
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
  },
  licenseBtn: {
    background: "#CAD3D2",
    color: "#117A00",
    padding: ".5rem 2rem",
    marginLeft: "16rem",
    transition: "all 0.3s linear",
    "&:hover": {
      // background: "#EDAF41",
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
    position: "relative"
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
  },
}));

export default useStyles;
