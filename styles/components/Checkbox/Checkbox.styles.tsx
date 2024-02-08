import styled, { keyframes } from "styled-components";
import { CheckboxProps } from "./Checkbox.d";

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const StyledSpan = styled.span`
  align-items: center;
  background: transparent;
  border-radius: 0.2em;
  border: 2px solid ${({ theme }) => theme.grayscale.gray3};
  display: flex;
  height: 18px;
  justify-content: center;
  margin-right: 11px;
  position: relative;
  transition: all 0.3s ease;
  width: 18px;
  :after {
    content: "";
    display: none;
  }

  @media (hover: hover) {
    :hover {
      background: #2f6455;
      border: 2px solid #2f6455;
    }
  }
`;

const StyledLabel = styled.label<CheckboxProps>`
  color: ${({ theme }) => theme.grayscale.gray1};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: grid;
  font-size: 14px;
  grid-template-columns: auto 1fr;
  margin: 0px;
  padding: 0px;
`;

const StyledInput = styled.input`
  display: none;

  :checked ~ ${StyledSpan} {
    background: #2f6455;
    border: 2px solid #2f6455;
  }

  :checked + ${StyledSpan}::after {
    display: block;
    width: 6px;
    height: 10px;
    top: 1px;
    left: 4px;
    position: absolute;
    border: solid ${({ theme }) => theme.grayscale.white};
    border-width: 0 0.2em 0.2em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  :checked:disabled + ${StyledSpan} {
    border: 2px solid ${({ theme }) => theme.grayscale.gray3};
  }

  :disabled + ${StyledSpan} {
    background: ${({ theme }) => theme.grayscale.gray3};
    cursor: not-allowed;
  }
`;

export { StyledLabel, StyledInput, StyledSpan };
