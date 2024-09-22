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
          errorMsg = "Mot de passe incorrect !";
        } else {
          errorMsg = "Email incorrect !";
        }
        return new Error(errorMsg)
    }
}