import styled from "styled-components";
import LoginForm from "./LoginForm";
import { theme } from "../../../theme/Theme";

export default function Login({ toggleModal }: { toggleModal: () => void }) {
  return (
    <LoginStyled>
      <h2>Se connecter</h2>
      <p>
        Connexion réservée aux employées, aux vétérinaires et aux
        Administrateurs du zoo.
      </p>
      <LoginForm toggleModal={toggleModal} />
    </LoginStyled>
  );
}

const LoginStyled = styled.div`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  font-weight: 700;

  h2 {
    color: ${theme.colors.important};
  }
`;
