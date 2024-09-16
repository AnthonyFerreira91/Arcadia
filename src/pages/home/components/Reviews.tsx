import CardReview from "../../../components/reusable/card/CardReview";
import CardsSection from "../../../components/reusable/card/CardsSection";

export default function Reviews() {
  return (
    <>
      <CardsSection title="Avis">
        <CardReview
          profile="Dacosta Emilie"
          comment="J'ai envoyé un steak à une giraffe, il en a pas voulu."
          note={2}
        />
        <CardReview
          profile="Vamsy Robert"
          comment="Mon fils à voulu jouer avec les lions, depuis il lui manque un bras."
          note={1}
        />
        <CardReview
          profile="Albin Jerôme"
          comment="La baignade avec les aligators avec ma belle mère était génial, elle arrêtera de me faire chier maintenant"
          note={5}
        />
        <CardReview
          profile="Shwartchield Herbitzch"
          comment="Les Hypopotames sont très efficace pour faire disparaitre un corp, merci beaucoup !"
          note={5}
        />
      </CardsSection>
    </>
  );
}
