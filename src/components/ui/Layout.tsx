import { PropsWithChildren } from "react";
import styled from "styled-components";
import { theme } from "../../theme/Theme";
import Navbar from "./Navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <LayoutStyled>
      <Navbar />
      <div className="main">{children}</div>
    </LayoutStyled>
  );
}

const LayoutStyled = styled.div`
  background: ${theme.colors.greyLight};
  height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    background: url(/images/zoolandia.webp);
    background-size: cover;
    background-position: center;
    flex: 1;
    text-align: center;
  }
`;
