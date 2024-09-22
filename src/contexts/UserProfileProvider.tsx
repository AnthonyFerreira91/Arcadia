import { createContext, Dispatch, ReactNode, useEffect, useState } from "react";
import { TypeUser } from "../types/dataTypes";
import { useConnection } from "../hooks/useConnection";

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
  const { connected } = useConnection();

  useEffect(() => {
    if (userProfile != null && connected === false) {
      setUserProfile(null);
    }
  }, [userProfile, connected]);

  return (
    <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};
