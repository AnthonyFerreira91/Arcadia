import styled from "styled-components";
import { theme } from "../../theme/Theme";

export default function Navbar() {
  return (
    <NavbarStyled>
      <h1>Arcadia</h1>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: ${theme.colors.primary};
  color: ${theme.colors.secondaire};
`;
