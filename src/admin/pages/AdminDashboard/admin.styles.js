import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  adminRoot: {
    // display: "flex",
    // marginTop: "8rem",
  },
  content: {
    // flexGrow: 1,
    // padding: theme.spacing(2),
    padding: 0,
    // width: "calc(100vw - 315px)",
    // marginTop: "2rem",
    marginLeft: "28rem",
    marginRight: "0rem",
  },
  dashboardGridContainer: {
    padding: "1.5rem 1rem 0rem 1rem",
  },
  totalStatus: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // marginBottom: "1.5rem",
    margin: "0rem 1rem",

    "& h2": {
      fontSize: "1.8rem"
    },
  },
  cardHeading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 0rem",

    "& h2": {
      fontSize: "1.8rem"
    },
  },
  // statistics: {
  //   fontSize: "2.5rem",
  // },
  loadMoreBtn: {
    ...theme.typography.button,
    padding: ".2rem 1.5rem",
    backgroundColor: "#fff",
    color: "#000",
    border: ".2rem solid",
    borderColor: "#0387EA",
    transition: "all 0.3s linear",
    "&:hover": {
      borderColor: "#0387EA",
      backgroundColor: "#0387EA",
      color: "#fff",
    },
  },
  // statisticCardContent: {
  //   height: "100%",
  //   display: "flex",
  //   flexDirection: "column",
  // },
  // statisticsInnerWrapper: {
  //   display: "flex",
  //   alignItems: "flex-end",
  //   justifyContent: "space-between",
  //   flexWrap: "wrap",
  //   marginBottom: ".5rem",
  //   height: "100%",
  // },
  statisticsContent: {
    textAlign: "center",
    margin: "1rem",
    backgroundColor: "#fff",
    paddingBottom: "1.5rem",
    boxShadow: "0 8px 12px 3px rgb(0 0 0 / 6%)",
    "&:hover": {
      "& img": {
        transform: "rotate(360deg)",
        transition: "all 0.5s linear",
      },
    },
    
  },

  statisticsIcon: {
    borderRadius: "100%",
    width: "4rem",
    height: "4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "1.5rem",

    "& img": {
      width: "2rem",
      height: "2rem",
    },

    "@media (max-width: 1170px)": {
      width: "5rem",
      height: "5rem",
      "& img": {
        width: "1.8rem",
        height: "1.8rem",
      },
    },
  },
  arrowIcon: {
    margin: "0 auto",
    backgroundColor: "#EEEDFC",
  },
  boxIcon: {
    backgroundColor: "#ECF9FC",
  },
  moneyIcon: {
    backgroundColor: "#EDF8EF",
  },
  totalCount: {
    fontSize: "2.5rem",
    margin: "2rem 0rem",
    lineHeight: 1,
    "& span": {
      color: "#b6b6b6",
      fontSize: "1.4rem",
      display: "block",
      marginTop: ".7rem",
      fontWeight: "400"
    },
    "@media (max-width: 1170px)": {
      fontSize: "2.2rem",
      "& span": {
        fontSize: "1.4rem",
      },
    },
  },
  cardRoot: {
    borderRadius: 0,
    boxShadow: "0 8px 12px 3px rgb(0 0 0 / 6%)",
    margin: "1rem",
  },
  authorCard: {
    // position: "relative",
    padding: "2rem",
    // paddingLeft: "5rem",
    // margin: "2rem",
    // textAlign: "center",
  },
  authorBadge: {
    position: "absolute",
    top: 0,
    right: "1.5rem",
    width: "4rem",
  },
  authorArea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: "2rem",
    "& h4": {
      fontSize: "1.8rem",
      fontWeight: 600,
    },
    "& p": {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
  },
  authorImg: {
    width: "5rem",
    height: "5rem",
    borderRadius: "100%",
    border: "2px solid #ECEEF5",
    padding: "2px",
    marginBottom: "0.5rem",
  },
  aboutText: {
    fontWeight: 500,
    fontSize: "1.5rem",
    "& span": {
      color: "#FD0000",
    },
  },

  // Table
  tableContainer: {
    border: 0,
    boxShadow: "none",
    borderRadius: 0,
  },
  earningImg: {
    width: "10rem",
  },
  tableHead: {
    backgroundColor: "#ECEEF5",
    "& th": {
      borderBottom: "0px solid transparent",
    },
  },
  tableRowContent: {
    "& td": {
      borderColor: "#E3E3E3",
    },

    "&:last-child td": {
      border: 0,
    },
  },
  tableCell: {
    padding: "1rem",
    fontSize: "1.6rem",
    // textAlign: "center",
  },

  // Portfolio
  portfolioContainer: {
    height: "auto",
    marginBottom: "2rem",
  },
  portfolioHeading: {
    fontSize: "2.8rem",
    marginRight: "3rem",
  },
  portfolioTabWrapper: {
    marginBottom: "2rem",
    boxShadow: "0 8px 12px 3px rgb(0 0 0 / 6%)",
    padding: "2.5rem 2rem 0",
  },
  portfolioTabs: {
    marginLeft: "auto",
    "& button": {
      color: theme.palette.primary.main,
      fontWeight: 500,
      textTransform: "uppercase",
    },
  },
  selected: {
    borderRadius: 0,
    backgroundColor: "#117A00",
    color: `${theme.palette.common.white} !important`,
  },
  indicator: {
    backgroundColor: "transparent",
  },
  portfolioWrapper: {
    padding: "2rem",
    width: "100%",
  },
  tabPanel: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  portfolioItem: {
    "& img": {
      width: "100%",
    },
  },
  portfolioContentWrapper: {
    boxShadow: "0 8px 12px 3px rgb(0 0 0 / 6%)",
    height: "100%",
  },
  portfolioContent: {
    padding: "2.5rem",
    textAlign: "center",

    "& img": {
      width: "1.5rem",
      marginRight: "1.5rem",
    },
  },
  portfoioTitle: {
    fontSize: "1.4rem",
    fontWeight: 500,
    marginBottom: "2rem",
  },
  downloadInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.6rem",
  },

  // Top Selling Author
  topAuthorTableHead: {
    boxShadow: "0 8px 12px 3px rgb(0 0 0 / 6%)",
    marginBottom: "1.5rem",
  },
  authorImgWrapper: {
    position: "relative",

    "& img": {
      marginBottom: 0,
    },
    "& img:first-child": {
      marginRight: "1rem",
    },
  },
  bestAuthorBadge: {
    position: "absolute",
    width: "1.8rem",
    objectFit: "cover",
    top: "1rem",
  },
  monthlyEarningHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: ".5rem 1rem",
  },
  subText: {
    fontSize: "1.8rem",
    marginBottom: "2rem",
  },

  earningGraph: {
    position: "relative",
    marginTop: "2rem",
    marginBottom: "3rem",
  },
  earningAmount: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "2.5rem",
    color: "#62BC74",
  },
  currentEarning: {
    color: "#62BC74",
    fontSize: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },

  mapCard: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      width: "100%",
    },
  },
  headingButton: {
    ...theme.typography.button,
    // backgroundColor: "rgba(0, 0, 0, 0.04)",
    padding: "0.4rem 1rem",
    fontSize: "1.3rem",
    fontWeight: 500,
    color: "#1B3F4E",
    transition: "all 0.3s linear",

    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "#fff",
    },
  },
}));

export default useStyles;
