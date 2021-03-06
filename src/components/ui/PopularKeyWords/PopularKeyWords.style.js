import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
      tagsContainer: {
        display: "flex",
        flexWrap: "wrap",
        marginTop: "4.5rem",
        marginBottom: "2.8rem",
      },
      tagTitle: {
        // textAlign: "center",
        fontSize: "2.2rem",
        marginRight: "2rem",
        [theme.breakpoints.down("md")]: {
          display: "block",
        },
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          marginBottom: "1.5rem",
        },
      },
      tagButton: {
        ...theme.typography.button,
        fontSize: "1.4rem",
        marginBottom:"1.5rem",
        color: theme.palette.primary.main,
        backgroundColor: "#F8F8F8",
        border: "1px solid rgb(150 164 173 / 54%)",
        padding: "0.4rem 2rem",
        textDecoration: "none",
        "&:not(last-child)": {
          marginRight: "1rem",
        },
        "&:hover": {
          textDecoration: "none",
        },
        [theme.breakpoints.down("sm")]: {
          marginBottom: "1rem",
          width: "auto",
          fontSize: "1.4rem",
        },
      },
}));


export default useStyles;