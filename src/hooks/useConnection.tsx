import { useContext } from "react";
import { ConnectionContext } from "../contexts/ConnectionContext";

export const useConnection = () => {
  const context = useContext(ConnectionContext);

  if (context === null) {
    throw new Error("ConnectionContext not define");
  }

  return context;
};
