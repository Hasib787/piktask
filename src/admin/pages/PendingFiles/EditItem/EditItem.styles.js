import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  editItemWrapper: {
    width: "60rem",
    padding: "3rem 4.5rem",

    "@media (max-width: 600px)": {
      width: "100%",
      padding: "2rem 2.5rem",
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
    height: "35rem",
    marginBottom: "1.8rem",
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
    padding: "1.8rem !important",
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
    padding: "0.6rem 5.6rem",
    marginRight: ".8rem",
    marginLeft: ".5rem",
    border: ".2rem solid",
    borderColor: "transparent",
  },
  submitBtn: {
    backgroundColor: "#117A00",
    "&:hover": {
      borderColor: "#117A00",
      color: "#117A00",
    },
  },
  saveBtn: {
    backgroundColor: "#114960",
    "&:hover": {
      borderColor: "#114960",
      color: "#114960",
    },
  },
  cancelBtn: {
    backgroundColor: "#D9D9D9",
    color: "#696969",
    "&:hover": {
      borderColor: "#D9D9D9",
      color: "#444",
    },
  },
}));

export default useStyles;
