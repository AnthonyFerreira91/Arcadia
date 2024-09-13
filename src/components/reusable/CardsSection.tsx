import styled from "styled-components";
import Layout from "../ui/Layout";
import { ReactNode } from "react";
import { theme } from "../../theme/Theme";

type CardsSectionProps = {
  title: string;
  background?: string;
  children: ReactNode;
};

export default function CardsSection({
  title,
  background,
  children,
}: CardsSectionProps) {
  return (
    <Layout variant="section" background={background}>
      <CardsSectionStyled>
        <div className="section-head">
          <h1>{title}</h1>
        </div>
        <div className="section-cards">{children}</div>
      </CardsSectionStyled>
    </Layout>
  );
}

const CardsSectionStyled = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 5% 0;

  .section-head {
    text-align: center;
    font-size: 3rem;
    color: ${theme.colors.important};
  }

  .section-cards {
    display: flex;
    justify-content: space-around;
  }
`;
