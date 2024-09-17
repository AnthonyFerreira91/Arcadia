import { theme } from "../../../theme/Theme";
import Card from "../../../components/reusable/card/CardPreview";
import CardsContener from "../../../components/reusable/card/CardsContener";
import styled from "styled-components";

export default function Services() {
  return (
    <PreviewServicesStyled>
      <CardsContener title="Services" className={"cardsContener-services"}>
        <Card
          title="Restaurant"
          imgUrl="/images/Savane.avif"
          description="Restaurant 3 étoiles aux spécialités de la savane, la jungle et des marais."
        />
        <Card
          title="Visite guidée"
          imgUrl="/images/Jungle.jpg"
          description="Visite guidée commenté par une experte."
        />
        <Card
          title="Baignade avec les aligators"
          imgUrl="/images/Marais.jpg"
          description="Baignade avec des professionnels certifiées (Ne pas provoquer les aligators)."
        />
      </CardsContener>
    </PreviewServicesStyled>
  );
}

const PreviewServicesStyled = styled.div`
  .cardsContener-services {
    background: ${theme.colors.secondaire};

    h2 {
      color: ${theme.colors.primary};
    }
  }
`;
