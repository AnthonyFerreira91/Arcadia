import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme/Theme";

export default function Navbar() {
  return (
    <NavbarStyled>
      <Link to="/">
        <h3>Accueil</h3>
      </Link>
      <Link to="/services">
        <h3>Services</h3>
      </Link>
      <Link to="/habitats">
        <h3>Habitats</h3>
      </Link>
      <Link to="/contact">
        <h3>Contact</h3>
      </Link>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  display: flex;
  gap: 5rem;

  > a {
    text-decoration: none;

    &:focus {
      color: ${theme.colors.important};
      border-bottom: 2px solid ${theme.colors.secondaire};
    }
  }
`;
