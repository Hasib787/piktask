import { Card, makeStyles } from "@material-ui/core";
import styled from "styled-components";

export const useStyles = makeStyles((theme) => ({
  container: {
    "&:hover": {
      "& $singlePageLink": {
        opacity: 1,
        visibility: "visible",
      },
      "& $downloadItem": {
        top: "50%",
        opacity: 1,
        visibility: "visible",
      },
    },
  },
  image: {
    width: "100%",
    height: "100%",
  },
  itemFooter: {
    height: "15.8rem",
    display: "flex",
    flexDirection: "column",
  },
  titleLink: {
    textDecoration: "none",
    "&:hover h2": {
      color: theme.palette.secondary.main,
    },
  },
  title: {
    fontSize: "1.4rem",
    color: "#1B3F4E",
    marginBottom: ".5rem",
    textTransform: "capitalize",
  },
  itemStatus: {
    fontSize: 12,
    color: "#1B3F4E",
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
  },
  downloadIcon: {
    marginRight: "0.3rem",
    marginLeft: "0.3rem",
  },
  heartIcon: {
    color: "#1B3F4E",
    fontSize: "1.4rem",
    marginLeft: ".8rem",
    marginRight: ".3rem",
    cursor: "pointer",
  },
  cardFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 0,
    marginTop: "auto",

    "@media (max-width: 1024px)": {
      alignItems: "baseline",
      flexDirection: "column",
    },
    "@media (max-width: 768px)": {
      alignItems: "baseline",
      flexDirection: "column",
    },
  },
  authorImage: {
    width: 37,
    height: 37,
    borderRadius: "100%",
    marginRight: "0.8rem",
    border: "1px solid #1B3F4E",
  },
  profileName: {
    marginBottom: 0,
    fontSize: 14,
    fontWeight: 500,
    color: "#1B3F4E",
  },
  buttonIcon: {
    fontSize: "1.6rem",
  },
  categoryButton: {
    ...theme.typography.button,
    background: theme.palette.primary.light,
    width: "8.5rem",
    height: "5rem",
    fontSize: "1.2rem",
    "&:hover": {
      background: theme.palette.primary.dark,
    },
  },
  productStatusButton: {
    ...theme.typography.button,
    background: theme.palette.primary.main,
    width: "8.5rem",
    height: "5rem",
    fontSize: "1.2rem",
    "&:hover": {
      background: theme.palette.primary.light,
    },
  },
  favouriteIcon: {
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    width: "3.8rem",
    height: "3.8rem",
    position: "absolute",
    right: "1rem",
    top: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    visibility: "hidden",
    opacity: 0,
    transition: "all 0.3s linear",
    zIndex: 1,
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",

    "&:hover": {
      backgroundColor: "#469439",
      color: "#ffffff",
      borderColor: "#469439",
    },

    "&.disabled": {
      backgroundColor: "#469439",
      color: "#fff",
      borderColor: "#469439",
      opacity: "0.5 !important",
    },
  },
  premiumIcon: {
    position: "absolute",
    top: "1rem",
    left: "1rem",
    width: "4rem",
    height: "4rem",
    backgroundColor: "rgb(68 68 68 / 60%)",
    borderRadius: "50%",
    zIndex: 1,
    "&:hover": {
      backgroundColor: "rgb(68 68 68 / 60%)",
    },
    "& img": {
      width: "2.2rem",
    },
  },
  itemContainer: {
    position: "relative",
    height: 405,
  },
  singlePageLink: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transition: "all 250ms ease-in-out",
    opacity: 0,
    visibility: "hidden",
  },
  downloadItem: {
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "1.6rem",
    letterSpacing: ".05rem",
    fontWeight: 500,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
    lineHeight: 1,
    padding: "1.2rem 2rem",
    transition: "all 250ms ease-in-out",
    opacity: 0,
    visibility: "hidden",
    "&:hover": {
      backgroundColor: "rgb(21 100 8 / 94%)",
    },
  },
}));

export const CardWrapper = styled(Card)`
  position: relative;
  border-radius: 0;
  height: 100%;

  &:hover .favourite {
    visibility: visible;
    opacity: 1;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  button {
    height: 3rem;
    width: 8.7rem;
  }

  button:first-child {
    margin-right: 1rem;
  }
`;
