import { ReactNode } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { theme } from "../../theme/Theme";

export default function Modal({
  toggleModal,
  children,
}: {
  toggleModal: () => void;
  children: ReactNode;
}) {
  return (
    <ModalStyled className="scroll-off">
      <div className="modal" aria-modal="true" role="dialog">
        {children}
        <IoClose className="btn-close" size="2.8rem" onClick={toggleModal} />
      </div>
    </ModalStyled>
  );
}

const ModalStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(50, 20, 100, 0.2);
  backdrop-filter: blur(2px);
  overflow-y: hidden;

  .modal {
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    border-radius: 3rem;
    overflow: hidden;
  }

  .btn-close {
    position: absolute;
    right: 0.8rem;
    top: 0.8rem;
    transition: transform 0.3s ease;
    cursor: pointer;
    color: ${theme.colors.important};

    &:hover {
      transform: rotate(180deg);
      color: ${theme.colors.important};
    }
  }
`;
