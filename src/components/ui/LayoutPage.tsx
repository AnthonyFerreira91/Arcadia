import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function LayoutPage({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
