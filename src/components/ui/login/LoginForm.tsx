import { FormEvent } from "react";
import styled from "styled-components";
import Button from "../../reusable/Button";
import { theme } from "../../../theme/Theme";

export default function LoginForm({
  toggleModal,
}: {
  toggleModal: () => void;
}) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    console.log(data);
    toggleModal();
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Entrez votre email"
          required
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="off"
          placeholder="Entrez votre mot de passe"
          required
        />
      </div>
      <Button>Connexion</Button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  input {
    color: ${theme.colors.important};
    padding: 0.3rem 1rem;
    font-weight: 700;
    border: none;
    border-radius: 1.5rem;
    outline: none;
  }
  input::placeholder {
    text-align: center;
  }
`;
