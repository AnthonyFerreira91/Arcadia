import styled from "styled-components";
import CustomLinkNav from "./CustomLinkNav";
import Button from "../../reusable/Button";
import Modal from "../../reusable/Modal";
import Login from "../login/Login";
import { useModal } from "../../../hooks/useModal";

export default function Navbar() {
  const { isOpen, switchOpen } = useModal();

  return (
    <NavbarStyled>
      <ul className="nav_ul">
        <CustomLinkNav to="/">
          <h4>Accueil</h4>
        </CustomLinkNav>
        <CustomLinkNav to="/services">
          <h4>Services</h4>
        </CustomLinkNav>
        <CustomLinkNav to="/habitats">
          <h4>Habitats</h4>
        </CustomLinkNav>
        <CustomLinkNav to="/contact">
          <h4>Contact</h4>
        </CustomLinkNav>
      </ul>
      <Button onClick={switchOpen}>
        <h5>Connexion</h5>
      </Button>
      <Modal isOpen={isOpen} handleSwitch={switchOpen}>
        <Login />
      </Modal>
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
