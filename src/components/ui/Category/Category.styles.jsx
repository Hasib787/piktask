// import { Button } from "@material-ui/core";
import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  padding: 5px;

  img {
    cursor: all-scroll;
    width: 100%;
    height: 240px;
    object-fit: cover;
  }
`;

export const CategoryButton = styled.div`
  position: relative;
  transform: translateX(-50%);
  left: 50%;
  z-index: 99;
  background-color: #FFFFFF;
  color: #333333;
  width: fit-content;
  font-size: 1.9rem;
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  // &:hover {
  //   background-color: #469439;
  // }
`;
