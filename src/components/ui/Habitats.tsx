import { theme } from "../../theme/Theme";
import Card from "../reusable/card/Card";
import CardsSection from "../reusable/card/CardsSection";

export default function Habitats() {
  return (
    <>
      <CardsSection title="Habitats" background={theme.colors.primary}>
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
      </CardsSection>
    </>
  );
}
