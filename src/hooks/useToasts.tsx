import { useCallback, useContext } from "react";
import { ToastContext } from "../contexts/ToastContext";
import { ToastProps } from "../components/reusable/Toast";

export function useToasts() {
  const { pushToastRef } = useContext(ToastContext);

  return {
    pushToast: useCallback(
      (toast: ToastProps) => {
        pushToastRef.current(toast);
      },
      [pushToastRef]
    ),
  };
}
