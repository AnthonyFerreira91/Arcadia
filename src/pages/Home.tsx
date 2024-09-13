import styled from "styled-components";
import Layout from "../components/ui/Layout";
import Habitats from "../components/ui/Habitats";
import Services from "../components/ui/Services";

export default function Home() {
  return (
    <HomeStyled>
      <Layout background="url(/images/zoolandia.webp)">
        <h1></h1>
      </Layout>
      <Habitats />
      <Services />
    </HomeStyled>
  );
}

const HomeStyled = styled.div``;
