import styled from "styled-components";
import Layout from "../../../components/ui/Layout";

export default function Welcome() {
  return (
    <Layout withNavbar>
      <WelcomeStyled></WelcomeStyled>
    </Layout>
  );
}

const WelcomeStyled = styled.div`
  height: 100%;
  background: url(/images/zoolandia.webp);
  background-size: cover;
`;
