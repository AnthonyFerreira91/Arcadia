import { FormEvent } from "react";
import styled from "styled-components";
import Button from "../../reusable/Button";
import { theme } from "../../../theme/Theme";
import { useConnection } from "../../../hooks/useConnection";
import { dataUsers } from "../../../data/dataUsers";
import { useUserProfile } from "../../../hooks/useUserProfile";

export default function LoginForm({
  toggleModal,
}: {
  toggleModal: () => void;
}) {
  const { setConnected } = useConnection();
  const { setUserProfile } = useUserProfile();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = (data.get("email") as string).toLowerCase();
    const pwd = data.get("password") as string;

    const userFind = dataUsers.find(
      (el) => el.email === email && el.password === pwd
    );

    if (userFind) {
      setUserProfile({
        email: userFind.email,
        password: userFind.password,
        name: userFind.name,
        role: userFind.role,
      });
      setConnected(true);
      toggleModal();
    } else {
      if (dataUsers.find((el) => el.email === email)) {
        alert("Mot de passe incorrect !");
      } else {
        alert("Email incorrect !");
      }
    }
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
