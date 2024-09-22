import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Habitats from "./pages/habitats/Habitats";
import Contact from "./pages/contact/Contact";
import ErrorPage from "./pages/error/ErrorPage";
import LayoutPage from "./components/ui/layout/LayoutPage";
import { ConnectionProvider } from "./contexts/ConnectionProvider";
import { UserProfileProvider } from "./contexts/UserProfileProvider";

function App() {
  return (
    <ConnectionProvider>
      <UserProfileProvider>
        <LayoutPage>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/habitats" element={<Habitats />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </LayoutPage>
      </UserProfileProvider>
    </ConnectionProvider>
  );
}

export default App;
