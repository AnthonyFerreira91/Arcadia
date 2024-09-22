import styled from "styled-components";
import CustomNavLink from "./CustomNavLink";
import ButtonModal from "../../reusable/ButtonModal";
import Login from "../login/Login";
import { useConnection } from "../../../hooks/useConnection";
import Button from "../../reusable/Button";
import { useUserProfile } from "../../../hooks/useUserProfile";

export default function Navbar() {
  const { connected, setConnected } = useConnection();
  const { userProfile } = useUserProfile();

  return (
    <NavbarStyled>
      <ul className="nav_ul">
        <CustomNavLink to="/">
          <h4>Accueil</h4>
        </CustomNavLink>
        <CustomNavLink to="/services">
          <h4>Services</h4>
        </CustomNavLink>
        <CustomNavLink to="/habitats">
          <h4>Habitats</h4>
        </CustomNavLink>
        <CustomNavLink to="/contact">
          <h4>Contact</h4>
        </CustomNavLink>
      </ul>
      {!connected && (
        <ButtonModal ContentComponentModal={Login}>
          <h5>Connexion</h5>
        </ButtonModal>
      )}
      {connected && (
        <Button onClick={() => setConnected(false)}>
          {(userProfile && `Espace ${userProfile?.role}`) || "connected"}
        </Button>
      )}
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: 4rem;

  ul {
    display: flex;
    gap: 4rem;
    list-style: none;
  }
`;
