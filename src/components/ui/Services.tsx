import { theme } from "../../theme/Theme";
import Card from "../reusable/Card";
import CardsSection from "../reusable/CardsSection";

export default function Services() {
  return (
    <>
      <CardsSection title="Services" background={theme.colors.secondaire}>
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
