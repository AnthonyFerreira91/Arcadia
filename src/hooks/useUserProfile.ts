import { useContext } from "react";
import { UserProfileContext } from "../contexts/UserProfileProvider";

export const useUserProfile = () => {
  const context = useContext(UserProfileContext);

  if (context === null) {
    throw new Error("UserProfileContext not define");
  }

  return context;
};