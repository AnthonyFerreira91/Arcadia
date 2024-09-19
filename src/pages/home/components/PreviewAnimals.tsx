import styled from "styled-components";
import LayoutSection from "../../../components/ui/LayoutSection";
import AvatarAnimal from "../../../components/reusable/AvatarAnimal";
import { theme } from "../../../theme/Theme";

export default function PreviewAnimals() {
  return (
    <LayoutSection>
      <PreviewAnimalsStyled>
        <h2>Animaux</h2>
        <div className="avatar_contener">
          <AvatarAnimal img="/images/Lion-photo2.jpg" />
          <AvatarAnimal img="/images/Lionne-photo2.jpg" />
          <AvatarAnimal img="/images/Zebre-photo1.png" />
          <AvatarAnimal img="/images/Tigre-photo1.jpg" />
          <AvatarAnimal img="/images/PanthereNoire-photo1.jpg" />
          <AvatarAnimal img="/images/Peroquet-photo1.jpg" />
          <AvatarAnimal img="/images/Hipopotame-photo1.webp" />
          <AvatarAnimal img="/images/Girafe-photo1.jpg" />
          <AvatarAnimal img="/images/Crocodile-photo3.jpg" />
          <AvatarAnimal img="/images/FlamantRose-photo1.jpeg" />
          <AvatarAnimal img="/images/Anaconda-photo1.jpg" />
        </div>
      </PreviewAnimalsStyled>
    </LayoutSection>
  );
}

const PreviewAnimalsStyled = styled.div`
  background: ${theme.colors.background};
  height: 100%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  h2 {
    color: ${theme.colors.important};
  }

  .avatar_contener {
    background: ${theme.colors.primary};
    width: 70%;
    padding: 5rem;
    border-radius: 3rem;
    display: flex;
    gap: 5rem;
    flex-wrap: wrap;
  }
`;
