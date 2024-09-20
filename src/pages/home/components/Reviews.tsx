import CardReview from "../../../components/reusable/card/CardReview";
import CardsSection from "../../../components/reusable/card/CardsSection";

export default function Reviews() {
  return (
    <>
      <CardsSection title="Avis">
        <CardReview
          profile="Dacosta Emilie"
          comment="Le restaurant à été un délice, le service très aimable et l'engagement écologique du zoo est vraiment impressionnant."
          note={5}
        />
        <CardReview
          profile="Albin Jerôme"
          comment="Parfait ! Les animaux sont heureux et ça ce voit."
          note={5}
        />
        <CardReview
          profile="Marie D."
          comment="Une expérience inoubliable ! Les animaux semblent heureux et bien soignés."
          note={5}
        />
        <CardReview
          profile="Shwartchield Herbitzch"
          comment="Mes enfants ce sont biens amusés mais j'ai trouvé dommage que le tigre soit seul."
          note={4}
        />
        <CardReview
          profile="Dacosta Emilie"
          comment="J'ai envoyé un steak à une giraffe, il en a pas voulu."
          note={3}
        />
        <CardReview
          profile="Vamsy Robert"
          comment="Mon fils à voulu jouer avec les lions, depuis il lui manque un bras."
          note={0}
        />
        <CardReview
          profile="Albin Jerôme"
          comment="La baignade avec les aligators avec ma belle mère était génial, elle arrêtera de me faire chier maintenant"
          note={5}
        />
        <CardReview
          profile="Shwartchield Herbitzch"
          comment="Les Hypopotames sont très efficace pour faire disparaitre un corp, je recommande !"
          note={5}
        />
      </CardsSection>
    </>
  );
}
