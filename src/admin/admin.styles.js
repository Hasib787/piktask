import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  adminRoot: {
    // display: "flex",
    // marginTop: "8rem",
  },
  cardRoot: {
    height: "100%",
    width: "100%",
    borderRadius: 0,
    boxShadow: "0 8px 12px 3px rgb(0 0 0 / 6%)",
  },
  content: {
    // flexGrow: 1,
    // padding: theme.spacing(2),
    padding: 0,
    // width: "calc(100vw - 315px)",
    // marginTop: "2rem",
    marginLeft: "29rem",
    marginRight: "1rem",
  },
  dashboardGridContainer: {
    marginTop: "1rem",
    marginBottom: "2rem",
  },
  // cardHeading: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   marginBottom: "3rem",
  // },
  // statistics: {
  //   fontSize: "2.5rem",
  // },
  // updateBtn: {
  //   ...theme.typography.button,
  //   padding: ".6rem 2rem",
  //   backgroundColor: "rgb(17 122 0 / 25%)",
  //   color: theme.palette.primary.main,
  //   border: ".2rem solid",
  //   borderColor: "rgb(17 122 0 / 0%)",
  //   "&:hover": {
  //     borderColor: "rgb(17 122 0 / 25%)",
  //     backgroundColor: "rgb(17 122 0 / 0%)",
  //     color: theme.palette.secondary.main,
  //   },
  // },
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
    // marginLeft: "1rem",
    backgroundColor: "#fff",
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
    width: "5.5rem",
    height: "5.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "1.5rem",

    "& img": {
      width: "2.5rem",
      height: "2.5rem",
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
    lineHeight: 1,
    "& span": {
      fontSize: "1.6rem",
      display: "block",
      marginTop: ".5rem",
      fontWeight: "500"
    },
    "@media (max-width: 1170px)": {
      fontSize: "2.2rem",
      "& span": {
        fontSize: "1.4rem",
      },
    },
  },
  authorCard: {
    position: "relative",
    paddingRight: "5rem",
    paddingLeft: "5rem",
    textAlign: "center",
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
    width: "7rem",
    height: "7rem",
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
    width: "2.8rem",
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
}));

export default useStyles;
