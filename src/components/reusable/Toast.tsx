import styled from "styled-components";
import { theme } from "../../theme/Theme";

export type ToastProps = {
  content: string;
  type?: "success" | "danger" | "default";
  duration?: number;
};

export function Toast({ content, type = "default" }: ToastProps) {
  return (
    <ToastStyled className={type}>
      <p>{content}</p>
    </ToastStyled>
  );
}

const ToastStyled = styled.div`
  position: absolute;
  color: ${theme.colors.white};
  padding: 2rem;
  width: 12rem;
  height: 2rem;
  top: 15%;
  right: 0.5%;
  border: none;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &.default {
    background: ${theme.colors.important};
  }

  &.success {
    background: ${theme.colors.background_primary};
  }

  &.danger {
    background: ${theme.colors.red};
  }
`;
