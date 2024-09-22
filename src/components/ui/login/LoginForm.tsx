import { FormEvent, useState } from "react";
import styled from "styled-components";
import Button from "../../reusable/Button";
import { theme } from "../../../theme/Theme";
import { useConnection } from "../../../hooks/useConnection";
import { useUserProfile } from "../../../hooks/useUserProfile";
import auth from "../../../api/auth/auth";

export default function LoginForm({
  toggleModal,
}: {
  toggleModal: () => void;
}) {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { setConnected } = useConnection();
  const { setUserProfile } = useUserProfile();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataLogin = new FormData(e.currentTarget);

    try {
      const getUser = await auth(dataLogin);

      if (getUser instanceof Error) {
        setErrorMsg(getUser.message);
      } else {
        setUserProfile({
          email: getUser.email,
          password: getUser.password,
          name: getUser.name,
          role: getUser.role,
        });
        setConnected(true);
        toggleModal();
      }
    } catch (error) {
      setErrorMsg("Une erreur est survenue. Veuillez réessayer.");
      console.error(error);
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
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
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

  .errorMsg {
    color: ${theme.colors.red};
    margin: 8px 0;
  }
`;
