import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ErrorPage from "./pages/error/ErrorPage";
import Habitats from "./pages/home/components/PreviewHabitats";
import Services from "./pages/home/components/PreviewServices";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habitats" element={<Habitats />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
