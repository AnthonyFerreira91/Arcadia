import styled from "styled-components";
import LoginForm from "./LoginForm";

export default function LoginModal() {
  return (
    <LoginModalStyled>
      <h2>Se connecter</h2>
      <p>Connexion réservée au Administrateur et aux vétérinaire du zoo.</p>
      <LoginForm />
    </LoginModalStyled>
  );
}

const LoginModalStyled = styled.div``;
