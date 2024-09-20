import { ReactNode } from "react";
import styled from "styled-components";

export default function LayoutSection({ children }: { children: ReactNode }) {
  return (
    <LayoutSectionStyled>
      <section>{children}</section>
    </LayoutSectionStyled>
  );
}

const LayoutSectionStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  > section {
    flex: 1;
  }
`;
