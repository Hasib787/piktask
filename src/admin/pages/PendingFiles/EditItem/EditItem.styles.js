import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  editItemWrapper: {
    width: "45rem",
    padding: "2rem 2rem",

    "@media (max-width: 600px)": {
      width: "100%",
      padding: "1rem 1rem",
    },
  },
  seperator: {
    backgroundColor: "#ddd",
    border: "0px solid transparent",
    height: ".1rem",
    width: "100%",
    marginTop: "3rem",
    marginBottom: "3rem",
  },
  formRoot: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  imgWrapper: {
    width: "100%",
    minHeight: 104,
    objectFit: "cover",
    overflow: "hidden",
    marginBottom: "1.8rem",
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  productItem: {
    width: 96,
    "& img": {
      width: "100%",
      height: "auto",
      objectFit: "cover",
      borderRadius: "0.5rem",
    },
  },
  editItemImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  fieldGroup: {
    marginBottom: "1rem",
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",

    "& label": {
      fontSize: "1.6rem",
      fontWeight: 500,
      marginBottom: "0.8rem",
    },
    "& select": {
      width: "100%",
      border: "1px solid #ddd",
      padding: "1.8rem",
      borderRadius: theme.shape.borderRadius,
      fontSize: "1.6rem",
      "&:focus": {
        outline: "1px",
      },
    },

    "& input": {
      width: "100%",
      border: "1px solid #ddd",
      padding: "1.8rem",
      borderRadius: theme.shape.borderRadius,
      fontSize: "1.6rem",
    },
    "& textarea": {
      width: "100%",
      border: "1px solid #ddd",
      padding: "1.8rem",
      borderRadius: theme.shape.borderRadius,
      fontSize: "1.6rem",
      resize: "none",
    },
  },

  inputRoot: {
    backgroundColor: `${theme.palette.common.white} !important`,
    padding: "1.5rem !important",
    border: "1px solid #ddd",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    "&:before": {
      borderBottom: "0px solid transparent",
    },
    "&:after": {
      borderBottom: "0px solid transparent",
    },
    "&:hover:before": {
      borderBottom: "0px solid transparent",
    },
  },
  input: {
    border: "0px solid transparent !important",
    marginRight: "1.5rem",
  },
  focused: {
    "& input": {
      border: "1px solid #ddd !important",
    },
  },
  tag: {
    backgroundColor: "#F2F2F2",
    fontSize: "1.4rem",
    fontWeight: 500,
    "& span": {
      color: "#B2B2B2",
    },
  },
  clearIndicator: {
    borderBottom: "0px solid transparent",
    "&:hover:before": {
      borderBottom: "0px solid transparent",
    },
  },

  buttonsWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  actionBtn: {
    ...theme.typography.button,
    padding: "0.6rem 3rem",
    marginRight: ".8rem",
    marginLeft: ".5rem",
    border: ".2rem solid",
    borderColor: "transparent",
  },
  submitBtn: {
    backgroundColor: "#0088f2",
    transition: "all 0.3s linear",
    "&:hover": {
      borderColor: "#0088f2",
      color: "#0088f2",
      fontWeight: "500",
    },
  },
  saveBtn: {
    backgroundColor: "#114960",
    transition: "all 0.3s linear",
    "&:hover": {
      borderColor: "#114960",
      color: "#114960",
      fontWeight: "500",
    },
  },
  cancelBtn: {
    backgroundColor: "#D9D9D9",
    color: "#696969",
    transition: "all 0.3s linear",
    "&:hover": {
      borderColor: "#D9D9D9",
      color: "#444",
      fontWeight: "500",
    },
  },
}));

export default useStyles;
