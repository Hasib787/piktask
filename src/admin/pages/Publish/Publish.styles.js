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
    [theme.breakpoints.down(769)]: {
      width: "100%",
      marginLeft: "0rem",
    },
  },
  publishFileWrapper: {
    marginTop: "10rem",
    margin: "2rem",
  },
  noItemsFound: {
    marginLeft: "1.5rem",
  },
  headingWrapepr: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "2rem",
    marginBottom: "1.5rem",
  },
  cardWrapper: {
    position: "relative",
    padding: "1.5rem",
    cursor: "pointer",
    "& img": {
      width: "100%",
      height: 150,
      borderRadius: theme.shape.borderRadius,
    },
    "& .MuiCardContent-root": {
      paddingBottom: "0rem !important",
    },
  },
  itemFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#117A00",
    fontSize: "1.5rem",
  },
  cardContent: {
    padding: "1rem 1rem 1rem 0rem",
    "& h3": {
      fontSize: "2rem",
      marginBottom: "1rem",
      lineHeight: "1.5",
      color: "#114960",
    },
    "& h6": {
      fontSize: "1.5rem",
      fontWeight: 500,
      color: "#FF0000",
      cursor: "pointer",
    },
  },
  loaderItem: {
    "@media (max-width: 576px)": {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
  publishGridContainer: {
    padding: "0rem",
  },
  cardRoot: {
    height: "auto",
    borderRadius: 0,
    boxShadow: "0 8px 12px 3px rgb(0 0 0 / 6%)",
    // margin: "1rem",
  },
  productCard: {
    padding: "2rem",
  },

  // Table
  tableContainer: {
    border: 0,
    boxShadow: "none",
    borderRadius: 0,
  },
  tableHead: {
    backgroundColor: "#ECEEF5",
    "& th": {
      borderBottom: "0px solid transparent",
    },
  },
  tableCell: {
    padding: "1rem",
    fontSize: "1.6rem",
    textAlign: "center",

    "& svg": {
      marginBottom: "-0.19rem",
    },
  },
  tableRowContent: {
    "& td": {
      borderColor: "#E3E3E3",
    },

    "&:last-child td": {
      border: 0,
    },

    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  authProductWrapper: {
    display: "flex",
  },
  publishImg: {
    width: "10rem",
  },
  premiumIcon: {
    margin: "auto 1rem",
    height: "3rem",
    width: "3rem",
    borderRadius: "100%",
    backgroundColor: "#f1f1f1",
    cursor: "pointer",
    "& img": {
      margin: "0.8rem",
      width: "1.5rem",
    },
  },
  // Selected period fields
  dateRanges: {
    padding: "2rem",
    marginBottom: "2rem",
    backgroundColor: "#fff",
    boxShadow: "0 8px 12px 3px rgb(0 0 0 / 6%)",
  },
  statisticsFormWrapper: {
    paddingBottom: "1rem",
    // marginBottom: "2rem",
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
  fieldTitle: {
    fontSize: "1.4rem",
    color: "#4D4D4D",
    marginBottom: ".2rem",
  },
  fields: {
    marginRight: "1.8rem",

    "@media (max-width: 960px)": {
      marginBottom: "1.8rem",
    },
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
  showMoreBtn: {
    padding: "0.6rem 1.5rem",
    backgroundColor: "#0088f2",
    color: "#fff",
    marginTop: "2.5rem",
    border: ".2rem solid",
    borderColor: "#0088f2",
    transition: "all 0.3s linear",
    "&:hover": {
      backgroundColor: "#0773c5",
      borderColor: "#0773c5",
      color: "#fff",
    },
  },
}));

export default useStyles;
