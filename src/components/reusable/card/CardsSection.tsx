import { ReactNode } from "react";
import styled from "styled-components";
import Layout from "../../ui/Layout";
import { theme } from "../../../theme/Theme";

type CardsSectionProps = {
  title: string;
  className?: string;
  children: ReactNode;
};

export default function CardsSection({
  title,
  className,
  children,
}: CardsSectionProps) {
  return (
    <Layout>
      <CardsSectionStyled className={className}>
        <div className="cardsSection-head">
          <h2>{title}</h2>
        </div>
        <div className="cardsSection-body">{children}</div>
      </CardsSectionStyled>
    </Layout>
  );
}

const CardsSectionStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 5% 0;

  .cardsSection-head {
    text-align: center;
    font-size: 3rem;
    color: ${theme.colors.important};
  }

  .cardsSection-body {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;
