import Button from "@material-ui/core/Button";
import styled from "styled-components";

export const CustomButton = styled(Button)`
  background-color: ${({ size }: any) => (size === "large" ? `blue` : "pink")};
`;
