import { theme } from "../../../theme/Theme";
import Card from "../../../components/reusable/card/CardPreview";
import CardsSection from "../../../components/reusable/card/CardsSection";
import styled from "styled-components";

export default function Services() {
  return (
    <PreviewServicesStyled>
      <CardsSection title="Services" className={"cardsSection-services"}>
        <Card
          title="Boutique souvenirs"
          imgUrl="/images/services/Boutique-souvenir.jpg"
          description="Boutique souvenir"
        />
        <Card
          title="Restaurant"
          imgUrl="/images/services/Restaurant.webp"
          description="Baignade avec des professionnels certifiées (Ne pas provoquer les aligators)."
        />
        <Card
          title="Visite guidée"
          imgUrl="/images/services/Visite-guidée.webp"
          description="Visite guidée commenté par une experte."
        />
      </CardsSection>
    </PreviewServicesStyled>
  );
}

const PreviewServicesStyled = styled.div`
  .cardsSection-services {
    background: ${theme.colors.primary};
  }
`;
