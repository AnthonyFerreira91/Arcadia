import styled from "styled-components";
import CustomLinkNav from "./CustomLinkNav";

export default function Navbar() {
  return (
    <NavbarStyled>
      <ul className="nav_ul">
        <CustomLinkNav to="/">
          <h3>Accueil</h3>
        </CustomLinkNav>
        <CustomLinkNav to="/services">
          <h3>Services</h3>
        </CustomLinkNav>
        <CustomLinkNav to="/habitats">
          <h3>Habitats</h3>
        </CustomLinkNav>
        <CustomLinkNav to="/contact">
          <h3>Contact</h3>
        </CustomLinkNav>
      </ul>
      <button>Connexion</button>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  ul {
    display: flex;
    gap: 5rem;
    list-style: none;
  }
`;
