import { makeStyles } from "@material-ui/core";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
    rootWrapper:{
        display:"flex",
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
        marginRight: "-14rem",
        borderRadius: "2.1rem",
        width: "10.5rem",
        height: "4.5rem",
      },
}));

export default useStyles;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;