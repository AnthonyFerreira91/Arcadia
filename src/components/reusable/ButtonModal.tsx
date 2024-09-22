import { ComponentType, ReactNode, useEffect, useState } from "react";
import Button from "./Button";
import { createPortal } from "react-dom";
import Modal from "./Modal";

type ButtonModalProps<T> = {
  ContentComponentModal: ComponentType<T>;
  contentProps?: T;
  children: ReactNode;
};

export default function ButtonModal<T>({
  ContentComponentModal,
  contentProps,
  children,
}: ButtonModalProps<T>) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  useEffect(() => {
    const escapeKeyboardCloseModal = (e: KeyboardEvent) => {
      if (e.key == "Escape") {
        toggleModal();
      }
    };

    if (showModal) {
      document.addEventListener("keydown", escapeKeyboardCloseModal);
    }

    return () => {
      document.removeEventListener("keydown", escapeKeyboardCloseModal);
    };
  }, [showModal]);

  return (
    <>
      <Button onClick={toggleModal}>{children}</Button>
      {showModal &&
        createPortal(
          <Modal toggleModal={toggleModal}>
            <ContentComponentModal
              toggleModal={toggleModal}
              {...(contentProps as T)}
            />
          </Modal>,
          document.body
        )}
    </>
  );
}
