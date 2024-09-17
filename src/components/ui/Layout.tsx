import { ReactNode } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

type LayoutProps = {
  withNavbar?: boolean;
  children: ReactNode;
};

export default function Layout({ withNavbar, children }: LayoutProps) {
  return (
    <LayoutStyled>
      {withNavbar && <Navbar />}
      <section>{children}</section>
    </LayoutStyled>
  );
}

const LayoutStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  > section {
    flex: 1;
  }
`;
