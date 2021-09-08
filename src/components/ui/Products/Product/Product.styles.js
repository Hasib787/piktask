import { Card, makeStyles } from "@material-ui/core";
import styled from "styled-components";
import photoBackground from "../../../../assets/transparent_bg.jpg";

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#F8F8F8",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 10%)",
    "&:hover": {
      "& $singlePageLink, $favouriteIcon, $favouriteIconBtn": {
        opacity: 1,
        visibility: "visible",
      },
      "& $categoryButton": {
        background: theme.palette.primary.light,
        color: theme.palette.common.white,
      },
    },
  },
  itemContainer: {
    background: `url(${photoBackground})`,
    position: "relative",
    height: 240,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  itemFooter: {
    padding: "1rem 0rem",
    display: "flex",
    flexDirection: "column",
  },
  productTitle: {
    padding: "1px 16px",
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
    wordBreak: "break-all",
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
    paddingBottom: "4px !important",
  },
  avatar:{
    width: 37,
    height: 37,
    borderRadius: "100%",
    padding: "0.2rem",
    // backgroundColor: "#1B3F4E",
    boxShadow: "0px 0px 5px #ddd",
    marginRight: "0.8rem",
  },
  authorImage: {
    width: "100%",
    height: "100%",
    borderRadius: "100%",
    color: "#000",
    cursor: "pointer",
  },
  profileName: {
    marginBottom: 0,
    fontSize: 14,
    fontWeight: 500,
    color: "#1B3F4E",
    cursor: "pointer",
    textDecoration: "none",
  },
  buttonIcon: {
    fontSize: "1.6rem",
  },
  categoryButton: {
    ...theme.typography.button,
    background: "#EEF0F5",
    color: "#97999F",
    width: "8.5rem",
    height: "3.5rem",
    fontSize: "1.2rem",
    transition: "all 0.3s linear",
  },
  buttonsWrapper: {
    right: "1rem",
    top: "1rem",
    position: "absolute",
  },
  iconBtn: {
    borderRadius: "50%",
    width: "3rem",
    height: "3rem",
    zIndex: 1,
    transition: "all 0.3s linear",
  },
  favouriteIcon: {
    backgroundColor: "#ffffff",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    visibility: "hidden",
    opacity: 0,
    boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",

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
  favouriteIconBtn: {
    backgroundColor: theme.palette.secondary.light,
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    visibility: "hidden",
    opacity: 0,
    borderColor: "#469439",
    color: "#ffffff",

    "&:hover": {
      backgroundColor: "#469439",
      borderColor: "#469439",
    },
  },
  premiumIcon: {
    backgroundColor: "#FDAF01",
    marginBottom: "8px",
    "&:hover": {
      backgroundColor: "rgb(68 68 68 / 60%)",
    },
    "& img": {
      width: "1.5rem",
    },
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
    fontSize: "1.5rem",
    letterSpacing: ".05rem",
    fontWeight: 500,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
    lineHeight: 1,
    padding: "1.6rem 1.6rem",
    transition: "all 250ms ease-in-out",
    opacity: 0,
    visibility: "hidden",
    "&:hover": {
      backgroundColor: "rgb(21 100 8 / 94%)",
    },
  },
  downloadImageIcon: {
    fontSize: "2.5rem",
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
`;

export const ButtonWrapper = styled.div`
  display: flex;

  button {
    height: 3.5rem;
    width: 9.7rem;
    font-size: 12px;
  }

  button:first-child {
    margin-right: 1rem;
  }
`;
