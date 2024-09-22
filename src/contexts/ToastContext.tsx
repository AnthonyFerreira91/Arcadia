import {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from "react";
import { Toast, ToastProps } from "../components/reusable/Toast";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultToast = (_toast: ToastProps) => {};

const defaultValue = {
  pushToastRef: { current: defaultToast },
};

export const ToastContext = createContext(defaultValue);

export function ToastContextProvider({ children }: PropsWithChildren) {
  const pushToastRef = useRef(defaultToast);

  return (
    <ToastContext.Provider value={{ pushToastRef }}>
      <Toasts />
      {children}
    </ToastContext.Provider>
  );
}

export default function Toasts() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const { pushToastRef } = useContext(ToastContext);
  pushToastRef.current = ({ duration, ...toast }: ToastProps) => {
    setToasts((prevToast) => [...prevToast, toast]);
    if (duration) {
      setTimeout(() => {
        setToasts((prevToast) => prevToast.filter((time) => time !== toast));
      }, duration * 2000);
    }
  };

  return (
    <div>
      {toasts.map((toast, key) => (
        <Toast {...toast} key={key} />
      ))}
    </div>
  );
}
