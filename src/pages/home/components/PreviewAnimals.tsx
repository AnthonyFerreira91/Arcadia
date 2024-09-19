import styled from "styled-components";
import LayoutSection from "../../../components/ui/LayoutSection";
import AvatarAnimal from "../../../components/reusable/AvatarAnimal";
import { zooAnimals } from "../../../data/Animals";
import { theme } from "../../../theme/Theme";

export default function PreviewAnimals() {
  return (
    <LayoutSection>
      <PreviewAnimalsStyled>
        <h2>Animaux</h2>
        <div className="avatar_contener">
          {zooAnimals.map((animal) => (
            <AvatarAnimal img={animal.avatar} />
          ))}
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
