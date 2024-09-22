import Welcome from "./components/Welcome";
import PreviewAnimals from "./components/PreviewAnimals";
import PreviewHabitats from "./components/PreviewHabitats";
import PreviewServices from "./components/PreviewServices";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <>
      <Welcome />
      <PreviewServices />
      <PreviewAnimals />
      <PreviewHabitats />
      <Reviews />
    </>
  );
}
