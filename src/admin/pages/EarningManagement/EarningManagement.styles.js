import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  adminRoot: {
    // display: "flex",
  },
  adminSidebar: {
    marginTop: "0rem",
    [theme.breakpoints.down(769)]: {
      display: "none",
    },
  },
  content: {
    padding: 0,
    marginLeft: "28rem",
    marginRight: "0rem",
    marginTop: "8rem",
    [theme.breakpoints.down(769)]: {
      width: "100%",
      marginLeft: "0rem",
    },
  },
  earningManagementWrapper: {
    margin: "2rem",
  },
  indicator: {
    backgroundColor: "transparent",
  },
  cardWrapper: {
    display: "flex",
    alignItems: "center",
    // width: "100%",
    justifyContent: "space-between",
    paddingTop: "3rem",
    paddingBottom: "3rem",
    marginTop: "2rem",
    boxShadow:
      "rgb(0 0 0 / 5%) 0px 10px 15px -3px, rgb(0 0 0 / 5%) 0px 4px 6px -2px",
    marginBottom: "3.5rem",

    "@media (max-width: 1024px)": {
      flexWrap: "wrap",
      justifyContent: "flex-start",
    },
    "@media (max-width: 640px)": {
      justifyContent: "center",
    },
  },
  graphBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    width: "100%",

    "&:after": {
      content: '""',
      position: "absolute",
      right: 0,
      top: 0,
      backgroundColor: "rgb(112 112 112 / 18%)",
      width: "1px",
      height: "100%",
    },
    "&:last-child:after": {
      backgroundColor: "transparent",
      width: 0,
      height: 0,
    },

    "@media (max-width: 1024px)": {
      width: "auto",
      paddingRight: "2rem",
      paddingLeft: "2rem",
      marginBottom: "3rem",

      "&:after": {
        backgroundColor: "transparent",
        width: 0,
        height: 0,
      },
    },
  },
  amount: {
    color: "#FDA701",
    fontSize: "2.8rem",
    marginBottom: "1rem",
    fontWeight: 600,
  },
  title: {
    color: "#4D4D4D",
    fontSize: "1.5rem",
    marginBottom: "0.8rem",
  },
  totalEarnings: {
    backgroundColor: "#F5F5F5",

    "& td": {
      borderBottom: 0,
      borderTop: 0,
    },
  },
  duration: {
    fontSize: "1.2rem",
    color: "#676767",
    backgroundColor: "rgb(247 182 58 / 8%)",
    borderRadius: "3rem",
    padding: "0.8rem 1.5rem",
  },
  totalEarningColor: {
    color: "#6EE671",
  },
  paidDownloadColro: {
    color: "#FB5252",
  },
  freeDownloadColor: {
    color: "#257DED",
  },
  totalDownloadColor: {
    color: "#117A00",
  },
  bgColor2: {
    backgroundColor: "rgb(139 229 142 / 8%)",
  },
  bgColor3: {
    backgroundColor: "rgb(251 82 82 / 8%)",
  },
  bgColor4: {
    backgroundColor: "rgb(18 105 234 / 8%)",
  },
  bgColor5: {
    backgroundColor: "rgb(17 122 0 / 8%)",
  },

  // Selected period fields
  statisticsFormWrapper: {
    borderBottom: "1px solid rgb(112 112 112 / 34%)",
    paddingBottom: "2rem",
    marginBottom: "2rem",
  },
  formTitle: {
    marginBottom: "1.5rem",
  },
  selectPeriodFrom: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",

    "@media (max-width: 990px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  fields: {
    marginRight: "1.8rem",

    "@media (max-width: 960px)": {
      marginBottom: "1.8rem",
    },
  },
  fieldTitle: {
    fontSize: "1.4rem",
    color: "#4D4D4D",
    marginBottom: ".2rem",
  },
  formControl: {
    marginRight: "1.5rem",
    "& select": {
      paddingTop: "1.3rem",
      paddingBottom: "1.3rem",
      backgroundColor: theme.palette.common.white,
    },
    "& fieldset": {
      borderColor: "#E0E0E0",
    },
  },
  statisticsBtn: {
    backgroundColor: "#117A00",
    marginTop: "2.5rem",
    padding: ".9rem 2.2rem",
    color: theme.palette.common.white,
    marginLeft: "2rem",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "rgb(17 122 0 / 90%)",
    },
    "@media (max-width: 1020px)": {
      marginLeft: 0,
      marginTop: "1rem",
    },
  },
  tabsBtnWrapper: {
    marginBottom: "2.5rem",
  },
  earningBtn: {
    ...theme.typography.button,
    borderRadius: 0,
    fontWeight: 500,
    padding: "1rem 2.5rem",
    fontSize: "1.5rem",
  },
  earningGreenBtn: {
    backgroundColor: "#117A00",
    marginRight: "2rem",
    "&:hover": {
      backgroundColor: "rgb(17 122 0 / 90%)",
    },
  },
  earningGrayBtn: {
    backgroundColor: "#434343",
    "&:hover": {
      backgroundColor: "rgb(67 67 67 / 90%)",
    },
  },

  // Top seller earning table
  sellerEarningTableWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "2rem",
    "& h2": {
      fontSize: "3rem",
    },

    "@media (max-width: 1020px)": {
      "& h2": {
        fontSize: "2.5rem",
        marginBottom: "1.5rem",
      },
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  downloadTableBtn: {
    ...theme.typography.button,
    backgroundColor: "#434343",
    fontSize: "1.4rem",
    borderRadius: 0,
    padding: ".8rem 4rem",
    fontWeight: 600,

    "&:hover": {
      backgroundColor: "rgb(67 67 67 / 88%)",
    },
  },

  earningDataWrapper: {},
  earningSellingTableHead: {
    backgroundColor: "#ECEEF5",
    fontSize: "1.6rem",
    color: "#434343",

    "& th": {
      border: "none",
    },
  },
  sellingTableCellHead: {
    fontSize: "1.5rem",
    fontWeight: 600,

    "&:first-child": {
      paddingLeft: "5rem",
    },
    "&:last-child": {
      paddingRight: "5rem",
    },
  },
  sellingTableCell: {
    fontSize: "1.5rem",
    fontWeight: 600,
    paddingTop: "2rem",
    paddingBottom: "2rem",

    "&:first-child": {
      paddingLeft: "5rem",
    },
    "&:last-child": {
      paddingRight: "5rem",
    },
  },

  // data Table Card
  tableWrapper: {
    marginTop: "2.5rem",
  },
  tableContainer: {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    borderRadius: 0,
  },
  tableHead: {
    backgroundColor: theme.palette.common.white,
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;",
  },
  tableCellHead: {
    fontSize: "1.6rem",
    textTransform: "uppercase",
    paddingTop: "2.5rem",
    paddingBottom: "2.5rem",
    marginBottom: "4rem",
    textAlign: "center",

    "&:first-child": {
      paddingLeft: "5rem",
    },
    "&:last-child": {
      paddingRight: "5rem",
    },
    "@media (max-width: 990px)": {
      "&:first-child": {
        paddingLeft: 0,
      },
      "&:last-child": {
        paddingRight: 0,
      },
    },
  },
  tableCellRow: {
    backgroundColor: theme.palette.common.white,
    fontSize: "1.6rem",
    textAlign: "center",

    "&:first-child": {
      paddingLeft: "5rem",
      width: "20rem",
    },
    "&:last-child": {
      paddingRight: "5rem",
    },
  },
  dataTableCard: {},
}));

export default useStyles;
