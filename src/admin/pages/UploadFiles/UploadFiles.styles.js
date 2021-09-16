import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  adminRoot: {
    // display: "flex",
    // marginTop: "8rem",
    // [theme.breakpoints.up(1700)]: {
    //   marginTop: "8rem",
    //   margin: "0rem 10rem",
    // },
    // [theme.breakpoints.up(1900)]: {
    //   marginTop: "8rem",
    //   margin: "0rem 15rem",
    // },
    // [theme.breakpoints.up(2100)]: {
    //   marginTop: "8rem",
    //   margin: "0rem 30rem",
    // },
    // [theme.breakpoints.up(2560)]: {
    //   marginTop: "8rem",
    //   margin: "0rem 51rem",
    // },
  },
  adminSidebar: {
    marginTop: "0rem",
    [theme.breakpoints.down(769)]: {
      display: "none",
    },
  },
  content: {
    padding: 0,
    // width: "100%",
    marginLeft: "28rem",
    marginRight: "0rem",
    marginTop: "8rem",
    [theme.breakpoints.down(769)]: {
      width: "100%",
      marginLeft: "0rem",
    },
  },
  uploadContainer: {
    margin: "2rem",
    [theme.breakpoints.down(769)]: {
      padding: "0rem 2rem",
    },
  },
  basicInfo: {
    minWidth: "100%",
    borderColor: "#0088f2",
    backgroundColor: "#0088f2",
    color: "white",
    padding: "2rem",
    marginBottom: "2rem",
    borderRadius: "5px",
    "& ul": {
      listStyle: "none",
      lineHeight: "32px",
    },
  },
  basicInfoIcon: {
    marginRight: "8px",
  },
  fileUploadContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "30rem",
    border: "2px dashed",
    borderColor: "#114960",
    marginBottom: "2.5rem",
    marginTop: "1.5rem",

    "&:focus": {
      border: "2px dashed",
      outline: "none",
    },
  },
  uploadIconWrapper: {
    flexDirection: "column",
    // height: "18rem",
    fontSize: "8.5rem",
    color: "#97A1A8",
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "0.8rem",
  },
  imageErrorText: {
    color: "red",
    fontWeight: "bold",
    fontSize: "3rem",
  },
  photoUploadText: {
    fontSize: "2.5rem",
    color: "#97A1A8",
    [theme.breakpoints.down(480)]: {
      padding: "1rem",
      textAlign: "center",
    },
  },

  subtitle: {
    fontSize: "1.8rem",
    color: "#97A1A8",
  },
  formHeadText: {
    marginBottom: "2rem",
  },
  //input field
  uploadForm: {
    padding: "30px 80px",
    backgroundColor: "white",
    borderRadius: "5px",
    maxWidth: "100%",
    "@media (max-width: 768px)": {
      padding: "20px 24px",
    },
    "@media (max-width: 1024px)": {
      padding: "20px 28px",
    },
  },
  titleText: {
    margin: "15px 0px 5px 0px",
  },
  inputField: {
    "& input": {
      padding: "1.28rem 1.5rem",
    },
    "& p": {
      fontSize: "14px",
    },
  },

  //category
  categoryInput: {
    width: "100%",
    maxWidth: "100%",
    "& select": {
      padding: "1.27rem 1.5rem",
    },
    "& svg": {
      height: "2.6rem",
      marginTop: "-1px",
      width: "3rem",
    },
  },

  //itemSaleInput
  itemSaleInput: {
    width: "100%",
    maxWidth: "100%",
    "& select": {
      padding: "1.27rem 1.5rem",
    },
    "& svg": {
      height: "2.6rem",
      marginTop: "-1px",
      width: "3rem",
    },
  },
  //usagesInput
  usagesInput: {
    width: "100%",
    maxWidth: "100%",
    "& select": {
      padding: "1.27rem 1.5rem",
    },
    "& svg": {
      height: "2.6rem",
      marginTop: "-1px",
      width: "3rem",
    },
  },
  //typeOfImageInput
  typeOfImageInput: {
    width: "100%",
    maxWidth: "100%",
    "& select": {
      padding: "1.27rem 1.5rem",
    },
    "& svg": {
      height: "2.6rem",
      marginTop: "-1px",
      width: "3rem",
    },
  },

  fieldWrapper: {
    marginBottom: "1.4rem",
    "& label": {
      marginBottom: "0.5rem",
    },
    "& label > span": {
      color: "red",
    },
  },

  //tag
  tagsInput: {
    display: "flex",
    alignItems: "flex-start",
    flexWrap: "wrap",
    minHeight: "48px",
    width: "100%",
    maxWidth: "100%",
    padding: "0 8px",
    border: " 1px solid rgb(214, 216, 218)",
    borderRadius: "4px",
    "&:focus-within": {
      border: "1.9px solid black",
    },
  },
  input: {
    flex: "1",
    border: "none",
    height: "46px",
    fontSize: "14px",
    padding: "4px 0 0 0",
    " &:focus": {
      outline: "transparent",
    },
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    padding: "0",
    margin: "8px 0 0 0",
  },
  tag: {
    width: "auto",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    padding: "0 8px",
    fontSize: "14px",
    listStyle: "none",
    borderRadius: "4px",
    margin: "0 8px 8px 0",
    background: "#00a65a",
  },
  tagCloseIcon: {
    display: "block",
    width: "16px",
    height: "16px",
    lineHeight: "16px",
    textAlign: "center",
    fontSize: "14px",
    marginLeft: "8px",
    color: "black",
    borderRadius: "50%",
    background: "#fff",
    cursor: "pointer",
  },
  helperText: {
    fontSize: "1.2rem",
  },
  priceFormats: {
    width: "100%",
    color: "white",
    backgroundColor: "#00a65a",
    borderColor: "#00a65a",
    padding: "15px",
    marginTop: "10px",
    marginBottom: "20px",
    border: " 1px solid transparent",
    borderRadius: "4px",
    "& h3": {
      marginBottom: "10px",
    },
  },
  listStyle: {
    listStyle: "none",
    lineHeight: "22px",
    fontSize: "15px",
    fontWeight: "bold",
    marginBottom: "5px",
    "&& span": {
      fontWeight: "normal",
    },
  },
  imageFileUploadBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "5rem",
    border: "2px dashed",
    borderColor: "#aeb5b9c2",
    marginBottom: "2.5rem",

    "&:focus": {
      border: "2px dashed",
      outline: "none",
    },
    "&:hover": {
      backgroundColor: "lightGray",
    },
  },
  uploadIconImage: {
    display: "flex",
    marginRight: "5px",
  },
  selectFileText: {
    marginLeft: "8px",
    fontSize: "16px",
    color: "#333",
  },
  description: {
    width: "100%",
    maxWidth: "100%",
    fontSize: "1.5rem",
    padding: "1rem",
    borderRadius: "5px",
  },
  textArea: {
    display: "flex",
  },
  singleBorder: {
    margin: "2.5rem 0 2rem 0",
    borderBottom: "0.7px solid lightgray",
  },
  uploadBtn: {
    padding: "1rem 3rem",
    marginLeft: "50%",
    transform: "translateX(-50%)",
    border: "none",
    borderRadius: "3px",
    fontSize: "18px",
    cursor: "pointer",
    backgroundColor: "#0088f2",
    color: "white",
    transition: "all 0.3s linear",
    "&:hover": {
      backgroundColor: "#0773c5",
    },
    [theme.breakpoints.down(480)]: {
      width: "100%",
      marginLeft: "0%",
      fontSize: "14px",
      padding: "1rem 0.9rem",
      transform: "translateX(0%)",
    },
  },
  uploadIcon: {
    marginRight: "7px",
  },

  // Checkbox card

  cardContent: {
    padding: "3rem 2.5rem",
    border: "1px solid #ACACAC",

    "& h2": {
      marginBottom: "1.5rem",
    },
  },
  imageTypeGrid: {
    "@media (max-width: 1270px)": {
      marginBottom: "3rem",
    },
  },
  checkboxCol: {
    position: "relative",
    paddingRight: "3.5rem",
    "&:before": {
      content: '""',
      position: "absolute",
      width: ".2rem",
      height: "74%",
      backgroundColor: "#E6E6E6",
      top: "60%",
      right: 0,
      marginRight: "2.5rem",
      transform: "translateY(-50%)",
    },

    "@media (max-width: 960px)": {
      "&:before": {
        backgroundColor: "transparent",
        width: 0,
        height: 0,
        marginRi: 0,
        transform: "translateY(0)",
      },
    },
  },
  root: {
    alignItems: "flex-start",
    marginBottom: "0.6rem",
  },
  checkBox: {
    // paddingTop: 0,
    marginTop: "-.9rem",
    "& svg": {
      width: "2.5rem",
      height: "2.5rem",
    },
  },
  labelItem: {
    fontSize: "1.4rem",
  },
}));

export default useStyles;
