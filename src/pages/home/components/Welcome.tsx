import styled from "styled-components";
import LayoutSection from "../../../components/ui/LayoutSection";
import { theme } from "../../../theme/Theme";

export default function Welcome() {
  return (
    <LayoutSection>
      <WelcomeStyled>
        <div>
          <h1>Bienvenue au zoo Arcadia</h1>
          <br />
          <p>
            Découvrez notre zoo écologique reproduisant à la perfection trois
            habitats différents pour que nos animaux se sentent comme chez eux !
            Le Zoo Arcadia vous offre une expérience unique en parfaite harmonie
            avec la nature.
          </p>
          <br />
          <p>
            Entièrement autonome sur le plan énergétique, notre parc s'engage
            pleinement dans la préservation de la biodiversité et l'éducation à
            l'environnement, pour le bonheur des petits et des grands.
          </p>
        </div>
      </WelcomeStyled>
    </LayoutSection>
  );
}

const WelcomeStyled = styled.div`
  height: 100%;
  background: url(/images/Welcome-Zoo.jpg);
  background-size: cover;
  color: ${theme.colors.important};
  /* align-content: center; */
  padding: 5rem;

  > div {
    width: 50%;
    padding: 5rem;

    > p {
      font-weight: 700;
      font-size: 2rem;
    }
  }
`;
