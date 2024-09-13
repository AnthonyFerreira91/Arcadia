import { ReactNode } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

type LayoutProps = {
  variant?: "main" | "section";
  background?: string;
  children: ReactNode;
};

export default function Layout({
  variant = "main",
  background,
  children,
}: LayoutProps) {
  return (
    <LayoutStyled>
      {variant === "main" && <Navbar />}
      <main
        style={
          background?.includes("url")
            ? { backgroundImage: background }
            : { background: background }
        }
      >
        {children}
      </main>
    </LayoutStyled>
  );
}

const LayoutStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
    background-size: cover;
    background-position: center;
  }
`;
