import { Button } from "@material-ui/core";
import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  img {
    cursor: all-scroll;
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
