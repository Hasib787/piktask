import { motion } from "framer-motion";
import styled from "styled-components";

export const SearchBarContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 34rem;
  height: 3.9rem;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.15);
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  min-height: 4rem;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px 15px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 21px;
  color: #12112e;
  font-weight: 500;
  border-radius: 6px;
  background-color: transparent;
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
  &::placeholder {
    color: #bebebe;
    transition: all 250ms ease-in-out;
  }
`;

export const SearchIcon = styled.span`
  color: #bebebe;
  font-size: 27px;
  margin-right: 10px;
  vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #dfdfdf;
  }
`;

export const CloseIcon = styled(motion.span)`
  color: #bebebe;
  font-size: 27px;
  margin-right: 30px;
  vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #dfdfdf;
  }
`;

export const LineSeperator = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 1px;
  background-color: #d8d8d878;
`;

export const SearchContent = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotFound = styled.div`
  color: #a1a1a1;
  font-size: 14px;
  display: flex;
  align-self: center;
  justify-self: center;
`;
