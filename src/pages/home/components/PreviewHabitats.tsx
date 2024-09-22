import { theme } from "../../../theme/Theme";
import Card from "../../../components/reusable/card/CardPreview";
import CardsSection from "../../../components/reusable/card/CardsSection";
import styled from "styled-components";

export default function PreviewHabitats() {
  return (
    <PreviewHabitatsStyled>
      <CardsSection title="Habitats" className={"cardsSection-habitats"}>
        <Card
          title="Savane"
          imgUrl="/images/habitats/Savane.avif"
          description="La Savane à une température élevée et à une terre très arride..."
        />
        <Card
          title="Jungle"
          imgUrl="/images/habitats/Jungle.jpg"
          description="La Jungle est un millieu avec une riche végétation..."
        />
        <Card
          title="Marais"
          imgUrl="/images/habitats/Marais.jpg"
          description="Les Marais alterne entre etendu d'eau et terre arride..."
        />
      </CardsSection>
    </PreviewHabitatsStyled>
  );
}

const PreviewHabitatsStyled = styled.div`
  .cardsSection-habitats {
    background: ${theme.colors.background_primary};
  }
`;
