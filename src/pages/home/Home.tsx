import styled from "styled-components";
import Layout from "../../components/ui/Layout";
import PreviewHabitats from "./components/PreviewHabitats";
import PreviewServices from "./components/PreviewServices";
import Reviews from "./components/Reviews";
import PreviewAnimals from "./components/PreviewAnimals";

export default function Home() {
  return (
    <HomeStyled>
      <Layout background="url(/images/zoolandia.webp)">
        <h1></h1>
      </Layout>
      <PreviewHabitats />
      <PreviewAnimals />
      <PreviewServices />
      <Reviews />
    </HomeStyled>
  );
}

const HomeStyled = styled.div``;
