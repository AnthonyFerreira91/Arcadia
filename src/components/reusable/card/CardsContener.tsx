import { ReactNode } from "react";
import styled from "styled-components";
import Layout from "../../ui/Layout";
import { theme } from "../../../theme/Theme";

type CardsContenerProps = {
  title: string;
  className?: string;
  children: ReactNode;
};

export default function CardsContener({
  title,
  className,
  children,
}: CardsContenerProps) {
  return (
    <Layout>
      <CardsContenerStyled className={className}>
        <div className="cardsContener-head">
          <h2>{title}</h2>
        </div>
        <div className="cardsContener-body">{children}</div>
      </CardsContenerStyled>
    </Layout>
  );
}

const CardsContenerStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 5% 0;

  .cardsContener-head {
    text-align: center;
    font-size: 3rem;
    color: ${theme.colors.important};
  }

  .cardsContener-body {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;
