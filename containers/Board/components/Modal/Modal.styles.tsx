import styled from "styled-components";

export const Modal = styled.div<{ display: string }>`
  display: ${(props) => props.display};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: #e30613;
  color: white;
  margin: 15% auto;
  padding: 0px;
  border: 1px solid #888;
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2em;
  padding: 2% 2% 3% 2%;

  @media (min-width: 768px) {
    padding: 1%;
  }
`;

export const ModalBody = styled.p`
  margin: 0;
  padding: 0;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  width: 60%;
`;

export const CloseButton = styled.button`
  color: #424242;
  background-color: #f5f5f5;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  width: 100%;
  cursor: pointer;
  font-size: 18px;
  line-height: 1.4285714286;

  &:hover {
    background: #424242;
    color: #f5f5f5;
  }
`;
