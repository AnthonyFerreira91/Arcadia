import CardReview from "../../../components/reusable/card/CardReview";
import CardsSection from "../../../components/reusable/card/CardsSection";

export default function Reviews() {
  return (
    <>
      <CardsSection title="Avis">
        <CardReview
          profile="Dacosta Emilie"
          comment="J'ai envoyé un steak à une giraffe, il en a pas voulu."
        />
        <CardReview
          profile="Vamsy Robert"
          comment="Mon fils à voulu jouer avec les lions, depuis il lui manque un bras."
        />
        <CardReview
          profile="Albin Jerôme"
          comment="La baignade avec les aligators avec ma belle mère était génial, elle arrêtera de ma faire chier maintenant"
        />
      </CardsSection>
    </>
  );
}
