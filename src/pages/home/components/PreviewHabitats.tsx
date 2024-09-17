import { theme } from "../../../theme/Theme";
import Card from "../../../components/reusable/card/CardPreview";
import CardsContener from "../../../components/reusable/card/CardsContener";
import styled from "styled-components";

export default function Habitats() {
  return (
    <HabitatsStyled>
      <CardsContener title="Habitats" className={"cardsContener-habitats"}>
        <Card
          title="Savane"
          imgUrl="/images/Savane.avif"
          description="La Savane à une température élevée et à une terre très arride..."
        />
        <Card
          title="Jungle"
          imgUrl="/images/Jungle.jpg"
          description="La Jungle est un millieu avec une riche végétation..."
        />
        <Card
          title="Marais"
          imgUrl="/images/Marais.jpg"
          description="Les Marais alterne entre etendu d'eau et terre arride..."
        />
      </CardsContener>
    </HabitatsStyled>
  );
}

const HabitatsStyled = styled.div`
  .cardsContener-habitats {
    background: ${theme.colors.primary};
  }
`;
