import { FormEvent } from "react";

export default function LoginForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email : </label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password : </label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">Connexion</button>
    </form>
  );
}
