import { createContext, Dispatch, ReactNode, useState } from "react";
import { TypeUser } from "../types/dataTypes";

type UserProfileContextType = {
  userProfile: TypeUser | null;
  setUserProfile: Dispatch<React.SetStateAction<TypeUser | null>>;
};

export const UserProfileContext = createContext<UserProfileContextType | null>(
  null
);

export const UserProfileProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userProfile, setUserProfile] = useState<TypeUser | null>(null);

  return (
    <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};
