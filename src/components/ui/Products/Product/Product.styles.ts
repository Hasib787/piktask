import { Card, makeStyles } from "@material-ui/core";
import styled from "styled-components";

export const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
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

export const LikeIcon = styled.div`
  background-color: #ffffff;
  border-radius: 50%;
  border: 1px solid;
  border-color: #707070;
  width: 3.8rem;
  height: 3.8rem;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s linear;

  &:hover {
    background-color: #469439;
    color: #ffffff;
    border-color: #469439;
  }

  &.disabled {
    background-color: #469439;
    color: #fff;
    border-color: #469439;
    opacity: 0.5 !important;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
