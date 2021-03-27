import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const useStyles = makeStyles((theme) => ({
  footerRoot: {
    backgroundColor: theme.palette.common.white,
  },
  root: {
    paddingBottom: "5rem",
    paddingTop: "5rem",
  },
  footerHeading: {
    textTransform: "uppercase",
    marginBottom: "2.4rem",
    fontSize: "1.9rem",
  },
  menuWrapper: {
    listStyleType: "none",
    padding: 0,
  },
  navItem: {
    padding: ".6rem 0",
    "&:first-child": {
      paddingTop: 0,
    },
  },
  navLink: {
    fontSize: "1.5rem",
    fontWeight: 400,
    fontFamily: "'Roboto', sans-serif",
    transition: "color 0.3s linear",
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.secondary.main,
    },
  },
}));

export const Column = styled(Grid)`
  flex-grow: 0;
  max-width: 20%;
  flex-basis: 20%;
  padding: 1.2rem;

  @media (max-width: 1160px) {
    max-width: 25%;
    flex-basis: 25%;
  }

  @media (max-width: 992px) {
    max-width: 30%;
    flex-basis: 30%;
  }

  @media (max-width: 768px) {
    max-width: 50%;
    flex-basis: 50%;
  }
  @media (max-width: 480px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;
