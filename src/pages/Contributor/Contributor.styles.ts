import { makeStyles } from "@material-ui/core";
import heroBg from "../../assets/hero5.jpg";
import rightArrowIcon from "../../assets/right.svg";

const useStyles = makeStyles((theme) => ({
  contributorHero: {
    backgroundImage: `url(${heroBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "60rem",
    width: "100%",
    position: "relative",
    marginBottom: "5.5rem",
    "&:before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgb(20 51 64 / 90%)",
    },
  },
  heroContainer: {
    position: "relative",
    zIndex: 1,
    height: "100%",
  },
  gridContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1.6rem 0",
  },
  joinNowBtn: {
    ...theme.typography.button,
    border: "1px solid",
    borderColor: "#117A00",
    color: theme.palette.common.white,
    fontWeight: 500,
    textTransform: "inherit",
    paddingLeft: "2.5rem",
    paddingRight: "2.5rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  heroContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "calc(100% - 10.3rem)",
    width: "70rem",
    margin: "auto",
    textAlign: "center",
  },
  heroHeading: {
    color: theme.palette.common.white,
    fontSize: "4rem",
    marginBottom: "2.5rem",
    "& span": {
      display: "block",
      fontWeight: 300,
    },
  },
  heroJoinNowBtn: {
    ...theme.typography.button,
    color: theme.palette.common.white,
    textTransform: "uppercase",
    backgroundColor: theme.palette.secondary.main,
    padding: " 1rem 2.8rem",
    border: "2px solid",
    borderColor: "transparent",

    "&:hover": {
      backgroundColor: "transparent",
      borderColor: "#FFF",
    },
  },

  contributorSection: {
    padding: "0 14rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  processGridContainer: {
    justifyContent: "space-between",
    padding: "0 14rem",
  },
  contributorText: {
    width: "38rem",

    "& h2": {
      fontSize: "4rem",
      lineHeight: 1.2,
      marginBottom: "2.5rem",
      paddingBottom: "1.5rem",
      position: "relative",
      "&:before": {
        content: '""',
        position: "absolute",
        backgroundColor: "#117A00",
        width: "16rem",
        height: ".3rem",
        bottom: 0,
      },
    },
    "& p": {
      fontSize: "1.6rem",
    },
  },
  galleryWrapper: {
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateAreas: '"image1 image1" "image2 image3" "image2 image4"',
    "& img": {
      width: "100%",
    },
  },
  image1: { gridArea: "image1", width: "100%", objectFit: "cover" },
  image2: { gridArea: "image2", width: "100%", objectFit: "cover" },
  image3: { gridArea: "image3", width: "100%", objectFit: "cover" },
  image4: { gridArea: "image4", width: "100%", objectFit: "cover" },
  galleryWrapper2: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateAreas: `"image5 image6" "image5 image7" "image8 image8"`,
    gap: "1rem",
  },
  image5: { gridArea: "image5", width: "100%", objectFit: "cover" },
  image6: { gridArea: "image6", width: "100%", objectFit: "cover" },
  image7: { gridArea: "image7", width: "100%", objectFit: "cover" },
  image8: { gridArea: "image8", width: "100%", objectFit: "cover" },
  processStepWrapper: {
    backgroundColor: theme.palette.common.white,
    padding: "2.5rem 0",
    margin: "6rem 0",
  },
  processStepNumber: {
    fontSize: "16rem",
    color: "#CED5DB",
    fontWeight: 500,
    marginRight: "2rem",
  },
  processItem: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    "&:before": {
      content: '""',
      position: "absolute",
      backgroundImage: `url(${rightArrowIcon})`,
      width: "7.4rem",
      height: "4.9rem",
      left: "100%",
    },
    "&:nth-of-type(3):before": {
      backgroundImage: `url("")`,
      width: 0,
      height: 0,
      left: "inherit",
    },
  },
  processTexts: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    "& span:nth-of-type(2)": {
      fontSize: "2.2rem",
      fontWeight: 400,
      marginBottom: ".6rem",
    },
  },
  joinNowLink: {
    fontSize: "1.4rem",
    fontWeight: 400,
    color: "#2A9B00",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export default useStyles;
