import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

export default function LayoutPage({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
