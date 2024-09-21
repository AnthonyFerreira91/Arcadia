import styled from "styled-components";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <LoginStyled>
      <h2>Se connecter</h2>
      <p>
        Connexion réservée aux employées, aux vétérinaires et aux
        Administrateurs du zoo.
      </p>
      <LoginForm />
    </LoginStyled>
  );
}

const LoginStyled = styled.div``;
