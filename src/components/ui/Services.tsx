import { theme } from "../../theme/Theme";
import Card from "../reusable/card/Card";
import CardsSection from "../reusable/card/CardsSection";

export default function Services() {
  return (
    <>
      <CardsSection title="Services" background={theme.colors.secondaire}>
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
      </CardsSection>
    </>
  );
}
