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
        height:"3rem",
        width:"360px",
        marginBottom: "3rem",
    },
   
}));

export default useStyles;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;