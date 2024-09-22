import { ComponentType, ReactNode, useEffect, useState } from "react";
import Button from "./Button";
import { createPortal } from "react-dom";
import Modal from "./Modal";

type BaseContentProps = {
  toggleModal: () => void;
};

type ButtonModalProps<T extends BaseContentProps> = {
  ContentComponentModal: ComponentType<T>;
  contentProps?: Omit<T, "toggleModal">;
  children: ReactNode;
};

export default function ButtonModal<T extends BaseContentProps>({
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
              {...(contentProps as T)}
              toggleModal={toggleModal}
            />
          </Modal>,
          document.body
        )}
    </>
  );
}
