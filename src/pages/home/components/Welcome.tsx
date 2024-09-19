import styled from "styled-components";
import LayoutSection from "../../../components/ui/LayoutSection";

export default function Welcome() {
  return (
    <LayoutSection>
      <WelcomeStyled></WelcomeStyled>
    </LayoutSection>
  );
}

const WelcomeStyled = styled.div`
  height: 100%;
  background: url(/images/zoolandia.webp);
  background-size: cover;
`;
