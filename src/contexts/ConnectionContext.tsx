import { createContext, Dispatch, ReactNode, useState } from "react";

type ConnectionContextType = {
  connected: boolean;
  setConnected: Dispatch<React.SetStateAction<boolean>>;
};

export const ConnectionContext = createContext<ConnectionContextType | null>(
  null
);

export const ConnectionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [connected, setConnected] = useState(false);

  return (
    <ConnectionContext.Provider value={{ connected, setConnected }}>
      {children}
    </ConnectionContext.Provider>
  );
};
