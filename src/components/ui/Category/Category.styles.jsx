import { Button } from "@material-ui/core";
import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;

  img {
    cursor: all-scroll;
    width: 100%;
    height: 240px;
    object-fit: cover;
  }
`;

export const CategoryButton = styled(Button)`
  position: relative;
  transform: translateX(-50%);
  left: 50%;
  bottom: 2.5rem;
  z-index: 99;
  background-color: #1b3f4e;
  color: #fff;
  border-radius: 3rem;
  padding: 0.6rem 3rem;
  width: fit-content;
  font-size: 1.6rem;

  &:hover {
    background-color: #469439;
  }
`;
