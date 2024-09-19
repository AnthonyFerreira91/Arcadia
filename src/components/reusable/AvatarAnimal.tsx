import styled from "styled-components";

export default function AvatarAnimal({ img }: { img: string }) {
  return <AvatarAnimalStyled style={{ backgroundImage: `url(${img})` }} />;
}

const AvatarAnimalStyled = styled.div`
  width: 10rem;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  background-size: cover;
  background-position: center;
`;
