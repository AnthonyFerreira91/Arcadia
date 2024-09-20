import styled from "styled-components";
import CustomLink from "./CustomLink";

export default function Navbar() {
  return (
    <NavbarStyled>
      <ul className="nav_ul">
        <CustomLink to="/">
          <h3>Accueil</h3>
        </CustomLink>
        <CustomLink to="/services">
          <h3>Services</h3>
        </CustomLink>
        <CustomLink to="/habitats">
          <h3>Habitats</h3>
        </CustomLink>
        <CustomLink to="/contact">
          <h3>Contact</h3>
        </CustomLink>
      </ul>
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
