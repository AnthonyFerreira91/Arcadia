import Welcome from "./components/Welcome";
import PreviewAnimals from "./components/PreviewAnimals";
import PreviewHabitats from "./components/PreviewHabitats";
import PreviewServices from "./components/PreviewServices";
import Reviews from "./components/Reviews";
import LayoutPage from "../../components/ui/LayoutPage";

export default function Home() {
  return (
    <LayoutPage>
      <Welcome />
      <PreviewServices />
      <PreviewAnimals />
      <PreviewHabitats />
      <Reviews />
    </LayoutPage>
  );
}
