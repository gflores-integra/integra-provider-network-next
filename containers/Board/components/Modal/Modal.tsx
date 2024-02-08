import React from "react";
import * as Styled from "./Modal.styles";

interface ModalProps {
  showModal: boolean;
  message: string | null;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ showModal, message, handleClose }) => {
  return (
    <Styled.Modal display={showModal ? "block" : "none"}>
      <Styled.ModalContent>
        <Styled.ModalBody>{message}</Styled.ModalBody>
        <Styled.ModalFooter>
          <Styled.CloseButton onClick={handleClose}>Cerrar</Styled.CloseButton>
        </Styled.ModalFooter>
      </Styled.ModalContent>
    </Styled.Modal>
  );
};

export { Modal };
