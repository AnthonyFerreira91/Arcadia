import { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";

type ModalType = {
  isOpen: boolean;
  handleSwitch: () => void;
  children: ReactNode;
};

export default function Modal({ isOpen, handleSwitch, children }: ModalType) {
  // 👇 L'usage de cet ref va particulièrement nous intéresser
  const modalRef = useRef<HTMLDialogElement>(null);

  const close = () => {
    modalRef.current?.close();
  };

  useEffect(() => {
    const modal = modalRef.current;
    if (isOpen && !modalRef.current?.open) {
      modal?.showModal();
    } else {
      modal?.close();
    }
  }, [isOpen]);

  return (
    <ModalStyled
      ref={modalRef}
      // 👇 capture l'élément 'close' et mise à jour de l'état du composant
      onClose={handleSwitch}
    >
      {children}
      <button type="button" onClick={close}>
        close
      </button>
    </ModalStyled>
  );
}

const ModalStyled = styled.dialog`
  width: 500;

  &::backdrop {
    background: rgba(50, 20, 100, 0.2);
    backdrop-filter: blur(2px);
  }
`;
