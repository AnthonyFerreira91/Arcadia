import styled from "styled-components";
import LayoutSection from "../../../components/ui/layout/LayoutSection";
import AvatarAnimal from "../../../components/reusable/AvatarAnimal";
import { dataAnimals } from "../../../api/data/dataAnimals";
import { theme } from "../../../theme/Theme";

export default function PreviewAnimals() {
  return (
    <LayoutSection>
      <PreviewAnimalsStyled>
        <h2>Animaux</h2>
        <div className="avatar_contener">
          {dataAnimals.map((animal) => (
            <div className="avatar_contener-profile" key={animal.name}>
              <AvatarAnimal img={animal.avatar} />
              <h4>{animal.name}</h4>
            </div>
          ))}
        </div>
      </PreviewAnimalsStyled>
    </LayoutSection>
  );
}

const PreviewAnimalsStyled = styled.div`
  background: ${theme.colors.background_secondary};
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
    background: ${theme.colors.background_primary};
    width: 75%;
    padding: 5rem;
    border-radius: 3rem;
    display: flex;
    justify-content: space-around;
    gap: 5rem;
    flex-wrap: wrap;

    &-profile {
      text-align: center;
      color: ${theme.colors.important};

      > h4 {
        margin-top: 0.5rem;
      }
    }
  }
`;
