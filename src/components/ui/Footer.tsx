import styled from "styled-components";
import { theme } from "../../theme/Theme";

export default function Footer() {
  return (
    <FooterStyled>
      <p>Un zoo 100% écologique et indépendant énergétiquement</p>
      <p>© 2024 Zoo Arcadia - Tous droits réservés</p>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  background: ${theme.colors.primary};
  color: white;
  text-align: center;
  align-content: center;
  padding: 2rem 0;
`;
