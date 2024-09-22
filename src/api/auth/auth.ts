import { dataUsers } from "../data/dataUsers";

export default function auth(dataLogin: FormData) {

    const email = (dataLogin.get("email") as string).toLowerCase();
    const pwd = dataLogin.get("password") as string;

    const searchUser = dataUsers.find(
        (el) => el.email === email && el.password === pwd
    );
  
    if (searchUser) {
      return searchUser
    } else {
        let errorMsg;
        if (dataUsers.find((el) => el.email === email)) {
          errorMsg = "Le mot de passe est incorrect.";
        } else {
          errorMsg = "L'utilisateur n'existe pas.";
        }
        return new Error(errorMsg)
    }
}