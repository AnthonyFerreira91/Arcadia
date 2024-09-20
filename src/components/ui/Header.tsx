import styled from "styled-components";
import { theme } from "../../theme/Theme";
import Navbar from "./navbar/Navbar";

export default function Header() {
  return (
    <HeaderStyled>
      <h2>Arcadia</h2>
      <Navbar />
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  background: ${theme.colors.primary};
  color: ${theme.colors.secondaire};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
`;
