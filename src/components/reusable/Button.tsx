import { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../theme/Theme";

type ButtonProps = {
  onClick: MouseEventHandler;
  children: ReactNode;
};

export default function Button({ onClick, children }: ButtonProps) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  background: ${theme.colors.important};
  color: ${theme.colors.white};
  height: 2.7rem;
  margin-top: 0.2rem;
  padding: 0 1.2rem;
  border: none;
  border-radius: 2rem;
  font-weight: 700;
  cursor: pointer;
`;
