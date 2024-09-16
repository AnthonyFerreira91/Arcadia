import styled from "styled-components";
import Layout from "../../components/ui/Layout";
import Habitats from "./components/PreviewHabitats";
import Services from "./components/PreviewServices";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <HomeStyled>
      <Layout background="url(/images/zoolandia.webp)">
        <h1></h1>
      </Layout>
      <Habitats />
      <Services />
      <Reviews />
    </HomeStyled>
  );
}

const HomeStyled = styled.div``;
