import { makeStyles } from "@material-ui/core";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
    rootWrapper:{
        display:"flex",
    },
    boxRoot:{
        margin:"2rem 1.5rem 0rem 0rem",
    },
    userNameLoader:{
        marginLeft: "5rem",
    },
    title:{
        width:"340px",
        marginLeft:"0.9rem",
        marginBottom: "0.5rem",
    },
    avatar:{
        marginLeft:"0.9rem",
        marginBottom: "0.5rem",
    },
    userName:{
        marginRight:"5rem",
    },
    cardFooter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 0,
        marginTop: "auto",
        paddingBottom: 0,
      },
      authorInfo:{
          width:"30rem",
      },
      downloadBtn: {
          width: "10.5rem",
          height: "4.5rem",
          borderRadius: "2.1rem",
      },
}));

export default useStyles;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;