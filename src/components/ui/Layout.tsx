import { PropsWithChildren } from "react";
import styled from "styled-components";
import { theme } from "../../theme/Theme";
import Navbar from "./Navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <LayoutStyled>
      <Navbar />
      {children}
    </LayoutStyled>
  );
}

const LayoutStyled = styled.div`
  height: 100vh;
  background: ${theme.colors.greyLight};
`;
